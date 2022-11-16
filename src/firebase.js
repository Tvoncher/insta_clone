import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQ64M8adus3HqyVvbPXz25WWU3G9uNqpQ",
  authDomain: "insta-clone-17c75.firebaseapp.com",
  projectId: "insta-clone-17c75",
  storageBucket: "insta-clone-17c75.appspot.com",
  messagingSenderId: "239666679510",
  appId: "1:239666679510:web:118753647ff68874a64377",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, storage };
