import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h5" textTransform="uppercase" margin="15px">
        My contacts
      </Typography>
      <Box
        sx={{
          padding: '20px',
          alignItems: 'start',
          gap: '20px',
        }}
      >
        <ContactForm />
        <div>
          <Filter />
          {isLoading && !error && (
            <p>
              <b>Request in progress...</b>
            </p>
          )}
          <ContactList />
        </div>
      </Box>
    </>
  );
};
export default ContactsPage;
