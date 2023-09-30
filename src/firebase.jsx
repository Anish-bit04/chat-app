import {getAuth} from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANBFzTHTtQuzl9ReGf_Bu1xchfc3V_77s",
  authDomain: "chat-app-37d6e.firebaseapp.com",
  projectId: "chat-app-37d6e",
  storageBucket: "chat-app-37d6e.appspot.com",
  messagingSenderId: "977246332866",
  appId: "1:977246332866:web:d78ad8f85a28bb9525985b",
  measurementId: "G-BQW0SBRDK6"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getMessages(){
  const messages = collection(db,'messages');
  const messageSnapshot = await getDocs(messages);
  const messageList = messageSnapshot.docs.map(doc => doc.data());
  return messageList;
}

const auth = getAuth(app);

export default  {db,auth}
