import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleSignIn from './repository/Firestore/FirebaseAuth.page'
ReactDOM.render(
  <React.StrictMode>
    <GoogleSignIn />
  </React.StrictMode>,
  document.getElementById('root')
);