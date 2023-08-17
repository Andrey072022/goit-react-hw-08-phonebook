import React from 'react';
import ContactElement from 'components/ContactElement';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {visibleContacts &&
          visibleContacts.map(contact => (
            <Grid item xs={2} sm={4} md={4} key={contact.id}>
              <ContactElement contact={contact} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default ContactList;
