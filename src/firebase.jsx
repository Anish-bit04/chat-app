import firebase from 'firebase'


const firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyCs5ZmCky5cDtm30ejRUas1X9XyZKcjR_M",
  authDomain: "chat-app-2650e.firebaseapp.com",
  projectId: "chat-app-2650e",
  storageBucket: "chat-app-2650e.appspot.com",
  messagingSenderId: "275486299759",
  appId: "1:275486299759:web:b84e726e226a5c8303df9a",
  measurementId: "G-TF88E4JGL0"
});

const db = firebaseApp.firestore()
const auth = firebase.auth()
export {db,auth}


