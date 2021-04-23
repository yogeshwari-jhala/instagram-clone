import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from './View/Sign/Page.page'
import GoogleSignIn from './View/GoogleSignIn/GoogleSignIn'

ReactDOM.render(
  <React.StrictMode>
    <GoogleSignIn/>
  </React.StrictMode>,
  document.getElementById('root')
);
