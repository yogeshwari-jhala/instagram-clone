import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleSignIn from './repository/Firestore/FirebaseAuth.page'
import {Post} from './View/Posts/Post.page'

ReactDOM.render(
  <React.StrictMode>
    <GoogleSignIn />
    {/* <Post /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
