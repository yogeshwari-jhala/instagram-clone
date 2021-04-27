import React, { Component } from "react";
import { auth } from './Firestore.config';
import FirebaseAuthOperations from './Firebase.auth';
import Router from '../router'

import Page from "../../View/Sign/Page.page";

import {Loading} from '../../Components/Loader/Loader.component'
import SetPassword from '../../View/SetPassword/SetPassword.component'

export const GlobalUserState = React.createContext({});

export default class GoogleSignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  async componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = new FirebaseAuthOperations().createUserProfileDocument(userAuth);

        (await userRef).onSnapshot((snapShot) => {
          this.setState({
            loading: false,
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });

      } else {
        this.setState({
          loading: false,
          currentUser: null,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    if (this.state.loading) {
      return <Loading/>
    }

    if (this.state.currentUser === null) {
      return (
        <div>
          <Page />
        </div>
      )
    }

    if ((auth.currentUser.providerData[1] === undefined || auth.currentUser.providerData[1] === null) && auth.currentUser.providerData[0]['providerId']==='google.com') {
      return (
        <GlobalUserState.Provider value={this.state.currentUser}>
          <SetPassword />
        </GlobalUserState.Provider>
      )
    }

    return (
      <GlobalUserState.Provider value={this.state.currentUser}>
        <Router/>
      </GlobalUserState.Provider>
    );
  }
}