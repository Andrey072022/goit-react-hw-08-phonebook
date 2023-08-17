import { Helmet } from 'react-helmet';
import Container from '@mui/material/Container';
import RegisterForm from 'components/RegisterForm';

const RegisterPage = () => {
  return (
    <Container maxWidth="xs">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;
