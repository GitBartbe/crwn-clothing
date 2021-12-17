import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'



const config = {
    apiKey: "AIzaSyBIUc-LGV6x2meDBxCBHSP_DAW6UyXDofU",
    authDomain: "crw-clothing-fa8e0.firebaseapp.com",
    projectId: "crw-clothing-fa8e0",
    storageBucket: "crw-clothing-fa8e0.appspot.com",
    messagingSenderId: "781927862283",
    appId: "1:781927862283:web:950fa34aa3443ed2aef70e",
    measurementId: "G-Z05KSSW8NE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> (auth.signInWithPopup(provider));