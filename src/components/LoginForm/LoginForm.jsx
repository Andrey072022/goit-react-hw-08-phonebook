import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from 'redux/auth/auth-operations';
import { Form } from './LoginForm.styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('Welcome!');
      })
      .catch(() => toast.error('Error Login'));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        required
        label="Email"
        type="email"
        variant="outlined"
        name="email"
        size="small"
      />
      <TextField
        required
        label="Password"
        type="password"
        variant="outlined"
        name="password"
        size="small"
      />
      <Button type="submit" variant="contained">
        Log In
      </Button>
      <Link to="/register">
        <NavigateNextRoundedIcon fontSize="small" />
        Sign Up
      </Link>
    </Form>
  );
};

export default LoginForm;
