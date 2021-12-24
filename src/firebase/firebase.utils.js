import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBIUc-LGV6x2meDBxCBHSP_DAW6UyXDofU",
  authDomain: "crw-clothing-fa8e0.firebaseapp.com",
  projectId: "crw-clothing-fa8e0",
  storageBucket: "crw-clothing-fa8e0.appspot.com",
  messagingSenderId: "781927862283",
  appId: "1:781927862283:web:950fa34aa3443ed2aef70e",
  measurementId: "G-Z05KSSW8NE",
};

firebase.initializeApp(config);


//checking if user egsists in db and creating 

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // geting back our user from firebase library

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch(error){
      console.log(error.message);
    }

  }
return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setting up provider as google, then  setCustomParameters sending a pop up 
// and on the end creating function signInWidthGoogle

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
