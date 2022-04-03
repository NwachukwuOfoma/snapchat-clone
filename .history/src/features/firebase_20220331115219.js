import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA8Ej9cIsdBY-2RI0H0Tq2Pp8HPfa778lk",
    authDomain: "snapchat-clone-bf3c9.firebaseapp.com",
    projectId: "snapchat-clone-bf3c9",
    storageBucket: "snapchat-clone-bf3c9.appspot.com",
    messagingSenderId: "878563607583",
    appId: "1:878563607583:web:d52b851e1948802474412a",
    measurementId: "G-X5H43X7RXY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider}