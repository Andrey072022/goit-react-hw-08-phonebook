import { useDispatch, useSelector } from 'react-redux';
import { Form } from './ContactForm.styled';
import { addContact } from 'redux/contacts/operations';
import { selectContactsList } from 'redux/contacts/selectors';
import { toast } from 'react-hot-toast';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ContactForm = () => {
  const contacts = useSelector(selectContactsList);

  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (contacts.find(contact => contact.name === form.elements.name.value)) {
      toast.error(`${form.elements.name.value} is already in contacts`);
      return;
    }
    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <TextField
          required
          label="Name"
          type="text"
          variant="outlined"
          name="name"
          size="small"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <TextField
          required
          label="Number"
          type="tel"
          variant="outlined"
          name="number"
          size="small"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />

        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
