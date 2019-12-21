import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCx_JQ3a9un1azmdMlXYVetJuD52R7wfbA",
  authDomain: "ecommerce-db-ac495.firebaseapp.com",
  databaseURL: "https://ecommerce-db-ac495.firebaseio.com",
  projectId: "ecommerce-db-ac495",
  storageBucket: "ecommerce-db-ac495.appspot.com",
  messagingSenderId: "1059589750194",
  appId: "1:1059589750194:web:9f7f456becd2dbf14fb8ab",
  measurementId: "G-GH2R521X02"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
