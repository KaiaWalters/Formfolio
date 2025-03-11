// theme.js or theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main:'#1976d2',
      light: '#eaff80',
      dark: '#bccc3e',
    },
    secondary: {
      main: '#dfff4f',
      light: '#ff9b94',
      dark: '#c43c3c',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});

export default theme;
