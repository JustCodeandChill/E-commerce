import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC5RUM0nZILeO9F6m6oO4sBvURg0lz36AY",
    authDomain: "crwn-db-258f3.firebaseapp.com",
    databaseURL: "https://crwn-db-258f3.firebaseio.com",
    projectId: "crwn-db-258f3",
    storageBucket: "crwn-db-258f3.appspot.com",
    messagingSenderId: "886247094851",
    appId: "1:886247094851:web:3e48e6913c7b64be70f2f6",
    measurementId: "G-2MCHT9N2QX"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;