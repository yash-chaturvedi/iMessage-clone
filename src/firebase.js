import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBdhDRSY5p3hUxnwStnqwdRM5olxE3w2sQ",
    authDomain: "imessage-clone-7bcdb.firebaseapp.com",
    databaseURL: "https://imessage-clone-7bcdb.firebaseio.com",
    projectId: "imessage-clone-7bcdb",
    storageBucket: "imessage-clone-7bcdb.appspot.com",
    messagingSenderId: "688683547578",
    appId: "1:688683547578:web:b599398d76dd396c203b83"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;