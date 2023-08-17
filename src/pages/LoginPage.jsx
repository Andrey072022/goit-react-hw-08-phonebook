import { Helmet } from 'react-helmet';
import LoginForm from 'components/LoginForm';
import Container from '@mui/material/Container';

const LoginPage = () => {
  return (
    <Container maxWidth="xs">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
