import React,{useState,useEffect, useRef}  from 'react'
import SignOut from './SignOut'
import SendMessage from './SendMessage'
import { db, auth } from '../firebase'
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import Message from './Message';

const Chat = () => {
  const scroll = useRef()
  const[messages,setMessages] = useState()
  useEffect(()=>{
    //   db.collection('messages').orderBy('createdAt').limit(50).onSnapshot((snapshot)=>{
    //       setMessages(snapshot.docs.map(doc =>doc.data()))
    //   })
    const q = query(
        collection(db, "messages"),
        orderBy("createdAt", "desc"),
        limit(50)
    )

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        const fetchedMessages = [];
        QuerySnapshot.forEach((doc) => {
          fetchedMessages.push({ ...doc.data(), id: doc.id });
        });
        const sortedMessages = fetchedMessages.sort(
          (a, b) => a.createdAt - b.createdAt
        );
        setMessages(sortedMessages);
      });
      return () => unsubscribe;
  },[])
  return (
    <div>
    <SignOut />
    <div className="msgs">
        {/* {messages.map(({ id, text, photoURL, uid }) => (
            <div>
                <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                    <img src={photoURL} alt="" />
                    <p>{text}</p>
                </div>
            </div>
        ))} */}
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
    </div>
    <SendMessage scroll={scroll} />
    <div ref={scroll}></div>
</div>
  )
}

export default Chat