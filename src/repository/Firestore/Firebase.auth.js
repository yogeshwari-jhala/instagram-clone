import firebase, { auth, firestore } from "./Firestore.config";

class FireauthProviderReply {
  static error;
  static data;
  static message;

  /**
   * @param {*} data Any Data that is Returned From Firestore
   * @param {boolean} error If error is returned
   * @param {String} message Error Message Customized
   */
  constructor(error = true, data = "data", message = "ERROR_OCCURED") {
    this.data = data;
    this.error = error;
    this.message = message;
  }
}

export default class FirebaseAuthProvider {

  /**
   * Create a User Document
   * @param {firebase.default.User} userAuth 
   * @param  {...any} additionalData 
   */
  createUserProfileDocument = async (userAuth, ...additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email, photoURL } = userAuth;
      const createdAt = Date.now();

      await userRef.set({
        is_admin: false,
        displayName,
        city: null,
        country: null,
        dateOfBirth: null,
        email: email,
        username: email.split("@")[0],
        gender: null,
        latitude: null,
        longitute: null,
        phoneNumber: null,
        profilePicture: photoURL,
        timestamp: createdAt,
        password: false,
        is_active: true,
        ...additionalData,
      }).catch((e) => {
        return e;
      });
    }
    return userRef;
  }

  /**
   * Sign in with Google Account
   * @param {firebase.default.auth.AuthProvider} provider
   */
  async signInWithProvider(provider) {
    return new Promise((resolve, reject) => {
      provider.setCustomParameters({ promt: "select_account" });
      auth.signInWithPopup(provider).then((data) => {
        resolve({ error: false, message: "SUCCESS", data: data });
      }).catch((e) => {
        reject({ error: true, message: "SIGN_IN_FAILED", data: e });
      });
    });
  }

  /**
   * Create User with Email and Password
   * @param {String} email 
   * @param {String} password 
   */
  async signUpWithEmail(email, password) {
    return new Promise((resolve, reject) => {
      auth.createUserWithEmailAndPassword(email, password).then((data) => {
        resolve({ error: false, message: "LOGIN_SUCCESS", data: data });
      }).catch((e) => {
        reject({ error: true, message: "LOGIN_ERROR", data: e });
      });
    });
  }

  /**
   * Sign in with Email and Password
   * @param {String} email 
   * @param {String} password 
   */
  async signInWithEmail(email, password) {
    return new Promise((resolve, reject) => {
      auth.signInWithEmailAndPassword(email, password).then((data) => {
        resolve({ error: false, message: "LOGIN_SUCCESS", data: data });
      }).catch((e) => {
        reject({ error: true, message: "LOGIN_ERROR", data: e });
      });
    });
  }

  /**
   * Link current account with a Email and Password
   * @param {String} email 
   * @param {String} password 
   */
  async linkEmailAccount(email, password) {
    return new Promise((resolve, reject) => {
      // this.reauthenticateWithPopup(ProvidersEnum.google).then((data) => {
      var credential = firebase.auth.EmailAuthProvider.credential(email, password);
      auth.currentUser.linkWithCredential(credential)
        .then((usercred) => {
          var user = usercred.user;
          auth.currentUser.reload();
          resolve({ error: false, message: "ACC_LINK_SUCCESS", data: user });
        }).catch((error) => {
          console.log(error);
          reject({ error: true, message: "ACC_LINK_ERR", data: error });
        });
    });
    // });

  }

  async reauthenticateWithPopup(provider) {
    return new Promise((resolve, reject) => {
      if (!auth.currentUser) reject("NO_USER_FOUND");
      auth.currentUser.reauthenticateWithPopup(provider).then((data) => {
        resolve({ error: false, message: "ACC_REAUTH_SUCCESS", data: data });
      }).catch((error) => {
        reject({ error: true, message: "ACC_REAUTH_FAILED", data: error });
      });
    });
  }

  /**
   * Link current account with any service
   * @param {firebase.auth.AuthProvider} provider 
   */
  async linkAccountProviders(provider) {
    return new Promise((resolve, reject) => {
      auth.currentUser.linkWithPopup(provider).then((result) => {
        // Handle Success
        // var credential = result.credential;
        var user = result.user;
        resolve({ error: false, message: "ACC_LINK_SUCCESS", data: user });
      }).catch((error) => {
        // Handle Error
        reject({ error: true, message: "ACC_LINK_ERR", data: error });
      });
    });
  }

  /**
   * Sign Out the User
   */
  async signOut() {
    return new Promise((resolve, reject) => {
      auth.signOut().then((data) => {
        resolve({ error: false, message: "LOGOUT_SUCCESS", data: data });
      }).catch((e) => {
        reject({ error: true, message: "LOGOUT_FAILED", data: e });
      });
    });
  }
}