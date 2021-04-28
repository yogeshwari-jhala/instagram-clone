import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleSignIn from './repository/Firestore/FirebaseAuth.page'
import Post from './View/Posts/Posts.page'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core'

let theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <GoogleSignIn />
    {/* <Post /> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
