import Box from '@mui/material/Box';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Zoom from '@mui/material/Zoom';

const HomePage = () => {
  return (
    <Box
      sx={{
        mx: 'auto',
        p: 5,
        borderRadius: 5,
        width: 300,
        backgroundColor: '#c2e6f3',
        color: 'blue',
        boxShadow: '3px 3px 2px 1px rgba(0, 0, 0, 0.2)',
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: 2,
        fontWeight: 600,
      }}
    >
      <p>Welcome! </p>
      <Zoom in={true} style={{ transitionDelay: '500ms' }}>
        <WavingHandIcon />
      </Zoom>
      <p>Create your own phonebook!</p>
    </Box>
  );
};
export default HomePage;
