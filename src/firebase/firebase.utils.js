import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCid-wJYIhryqDZxFFhkQebRmnbEpsxJLA",
  authDomain: "crwn-db-dbad0.firebaseapp.com",
  projectId: "crwn-db-dbad0",
  storageBucket: "crwn-db-dbad0.appspot.com",
  messagingSenderId: "228532117346",
  appId: "1:228532117346:web:1402cb3c362fa91e1f563b",
  measurementId: "G-0SNKNHV3HR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
