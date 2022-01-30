import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA75kyUQ6Ln4RmsYm0wWXuLFULgiC7qT_A",
    authDomain: "naman-slack-clone.firebaseapp.com",
    projectId: "naman-slack-clone",
    storageBucket: "naman-slack-clone.appspot.com",
    messagingSenderId: "1061334665675",
    appId: "1:1061334665675:web:6355105276a8ce17130e4e"
  };
  

 // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {db,auth,provider};
 