// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBcOc83ijFht2HDAxvCiqh70rpG2d-7C4Y",
    authDomain: "clone-3305b.firebaseapp.com",
    projectId: "clone-3305b",
    storageBucket: "clone-3305b.appspot.com",
    messagingSenderId: "507470611856",
    appId: "1:507470611856:web:38554ce346d0a947dddf15",
    measurementId: "G-WLCC1S3TJS"
  };

  //Initializing firebase app
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //firebase local database
  const db = firebaseApp.firestore();
  //authentiaction can be used in project
  const auth = firebase.auth();

  export {db, auth};