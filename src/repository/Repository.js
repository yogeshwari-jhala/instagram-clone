import FirebaseAuthProvider from "./Firestore/Firebase.auth";
import FirestoreProvider from "./Firestore/FirebaseModel.firestore.jsx";

export default class Repository {

  /**
   * Create a New User Profile Document
   * @param {firebase.default.User} userAuth 
   * @param  {...any} additionalData 
   */
  createUserProfileDocument = async (userAuth, ...additionalData) => new FirebaseAuthProvider().createUserProfileDocument(userAuth, ...additionalData);

  /**
   * Sign in with Provider Available in ProvidersEnum
   * @param {firebase.default.auth.AuthProvider} provider 
   */
  signInWithProvider = async (provider) => new FirebaseAuthProvider().signInWithProvider(provider);

  /**
   * Sign In with Email and Password
   * @param {String} email 
   * @param {String} password 
   */
  signInWithEmail = async (email, password) => new FirebaseAuthProvider().signInWithEmail(email, password);

  /**
   * Sign Up with Email and Password
   * @param {string} name
   * @param {String} email 
   * @param {String} password 
   */
  signUpWithEmail = async (email, password) => new FirebaseAuthProvider().signUpWithEmail(email, password);

  /**
   * Sign Out User
   */
  signOut = async () => new FirebaseAuthProvider().signOut();

  /**
   * Link Provider with Email Account
   * @param {String} email 
   * @param {String} password 
   */
  linkEmailAccount = async (email, password) => new FirebaseAuthProvider().linkEmailAccount(email, password);

  /**
   * 
   * @param {String} path 
   * @returns {Promise}
   */
  getDocumentSnapshot = async (path) => new FirestoreProvider().getDocumentSnapshot(path); 

  /**
   * 
   * @param {String} path 
   * @param {Array} data 
   * @returns 
   */
  createDocument = async(path, data) => new FirestoreProvider().createDocument(path, data);

  /**
   * 
   * @param {String} path 
   * @param {object} data 
   * @returns {Promise}
   */
  createDocumentExistingUID = async(path, data, uid) => new FirestoreProvider().createDocumentExistingUID(path, data, uid);

  /**
   * 
   * @param {String} path 
   * @param {String} uid 
   * @returns {Promise}
   */
  deleteDocument = async(path, uid) => new FirestoreProvider().deleteDocument(path, uid) 
}