import { selectUser } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { Chip } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <Chip
        icon={<AccountCircleIcon />}
        sx={{ color: 'white' }}
        label={user.email}
      />
      <Button
        startIcon={<LogoutIcon />}
        type="button"
        onClick={handleLogOut}
        color="inherit"
      >
        Log Out
      </Button>
    </div>
  );
};
