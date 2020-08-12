import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBHKoKUsvv7TCmIFN28bhhrIsMs0uqGx8g",
    authDomain: "slack-clone-96a9b.firebaseapp.com",
    databaseURL: "https://slack-clone-96a9b.firebaseio.com",
    projectId: "slack-clone-96a9b",
    storageBucket: "slack-clone-96a9b.appspot.com",
    messagingSenderId: "420175965361",
    appId: "1:420175965361:web:d21d1b2adbd54d28024690",
    measurementId: "G-4SZ4HY2Y29"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};
  export default db;

