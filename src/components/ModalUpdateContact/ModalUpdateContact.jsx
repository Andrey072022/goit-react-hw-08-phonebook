import { useState } from 'react';
import { fetchContacts, updateContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { Form } from './ModalUpdateContact.styled';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 2,
};

const ModalUpdateContact = ({ contact }) => {
  const { id, name, number } = contact;
  const [contactItem, setContactItem] = useState({
    name,
    number,
  });
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setContactItem({ [name]: value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      updateContact({
        id,
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );

    handleClose();
    dispatch(fetchContacts());
  };

  return (
    <div>
      <Button size="small" startIcon={<EditIcon />} onClick={handleOpen}>
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-update-contact"
        aria-describedby="modal-update-contact"
      >
        <Box sx={style}>
          <Form onSubmit={handleFormSubmit}>
            <TextField
              required
              label="Name"
              type="text"
              name="name"
              value={contactItem.name}
              onChange={handleChange}
              size="normal"
              variant="standard"
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
              label="Number"
              type="tel"
              name="number"
              value={contactItem.number}
              onChange={handleChange}
              size="normal"
              variant="standard"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit">Save</Button>
            <Button onClick={handleClose}>Close</Button>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalUpdateContact;
