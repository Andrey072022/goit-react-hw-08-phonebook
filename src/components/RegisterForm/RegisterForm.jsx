import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/auth-operations';
import { toast } from 'react-hot-toast';
import { Form } from './RegisterForm.styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('User successfully created!');
      })
      .catch(() => toast.error('Error Sign Up'));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        required
        label="Name"
        type="text"
        variant="outlined"
        name="name"
        size="small"
      />
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
        helperText="Please enter min 7 symbols"
      />
      <Button type="submit" variant="contained">
        Sign Up
      </Button>
      <Link to="/login">
        <NavigateNextRoundedIcon fontSize="small" />
        Log In
      </Link>
    </Form>
  );
};

export default RegisterForm;
