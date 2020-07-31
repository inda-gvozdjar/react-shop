import firebase from 'firebase/app';
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCd5DWWHye1y5m4TCguOIyot8K0VAfRmk4",
    authDomain: "react-webshop-8fb8d.firebaseapp.com",
    databaseURL: "https://react-webshop-8fb8d.firebaseio.com",
    projectId: "react-webshop-8fb8d",
    storageBucket: "react-webshop-8fb8d.appspot.com",
    messagingSenderId: "373802152147",
    appId: "1:373802152147:web:ccd73fcdcd7cbc329e2426",
    measurementId: "G-BX0NCMTWWT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;