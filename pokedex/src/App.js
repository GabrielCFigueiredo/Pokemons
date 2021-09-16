import React from 'react'
import Router from './Router';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';

export function App() {

  const theme = createTheme({
    
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#2962ff',
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
