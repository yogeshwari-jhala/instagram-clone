import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyCewKJvG_M3L6Flu_Uj_V_NkMheYg0n46s",
    authDomain: "instagram-ed9fa.firebaseapp.com",
    projectId: "instagram-ed9fa",
    storageBucket: "instagram-ed9fa.appspot.com",
    messagingSenderId: "888246055365",
    appId: "1:888246055365:web:b520209176abcfd1591bac",
    measurementId: "G-FRDRZHRHXS"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const ProvidersEnum = Object.freeze({"google": googleProvider});

export { db, auth, storage, ProvidersEnum };
export default firebase;
