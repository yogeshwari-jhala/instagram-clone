import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from './View/Sign/Page.page'
import {GoogleSignIn, SetPassword} from './View/GoogleSignIn/GoogleSignIn'
import {Post} from './View/Pages/Posts/Post.page'

ReactDOM.render(
  <React.StrictMode>
    {/* <Page /> */}
    <Post />
  </React.StrictMode>,
  document.getElementById('root')
);
