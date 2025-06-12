
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, sans-serif',
  },
  palette: {
    background: {
      default: 'linear-gradient(0deg, #141414 0%, #1F1D1D 100%)',
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);


