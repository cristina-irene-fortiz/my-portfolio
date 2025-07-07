// src/theme.js
import { createTheme } from '@mui/material/styles';
// pull in only the weights you need
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';

const theme = createTheme({
  palette: {
    primary: { main: '#ff41b5' },   // your pink
    secondary: { main: '#000000' }, // your black
    background: { default: '#ffffff' }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h3: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 }
  }
});

export default theme;
