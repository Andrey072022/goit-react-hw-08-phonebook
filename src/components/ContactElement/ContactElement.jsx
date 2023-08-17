import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import ModalUpdateContact from 'components/ModalUpdateContact/ModalUpdateContact';

const ContactElement = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <Card sx={{ minWidth: 150 }}>
        <CardContent sx={{ backgroundColor: '#faf8a2' }}>
          <Typography variant="h6">
            <AccountCircleOutlinedIcon sx={{ color: 'blue' }} /> {name}
          </Typography>
          <Typography variant="h5">
            <PhoneIcon sx={{ color: 'blue' }} /> {number}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={handleDelete}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <ModalUpdateContact contact={contact} />
        </CardActions>
      </Card>
    </>
  );
};

export default ContactElement;

ContactElement.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
