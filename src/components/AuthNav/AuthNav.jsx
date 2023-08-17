import { NavLink } from 'react-router-dom';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">
        <Button
          startIcon={<AppRegistrationRoundedIcon />}
          sx={{ color: 'white' }}
        >
          Sign Up
        </Button>
      </NavLink>
      <NavLink to="/login">
        <Button startIcon={<LoginRoundedIcon />} sx={{ color: 'white' }}>
          Log In
        </Button>
      </NavLink>
    </div>
  );
};
