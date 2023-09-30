import firebase from 'firebase/app'

const firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyANBFzTHTtQuzl9ReGf_Bu1xchfc3V_77s",
  authDomain: "chat-app-37d6e.firebaseapp.com",
  projectId: "chat-app-37d6e",
  storageBucket: "chat-app-37d6e.appspot.com",
  messagingSenderId: "977246332866",
  appId: "1:977246332866:web:d78ad8f85a28bb9525985b",
  measurementId: "G-BQW0SBRDK6"
});

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db,auth}
