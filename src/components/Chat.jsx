import React,{useState,useEffect}  from 'react'
import SignOut from './SignOut'
import { db } from '../firebase'

const Chat = () => {
  const[message,setMessage] = useState()
  useEffect(()=>{
      db.collection('messages').orderBy('createdAt').limit(50).onSnapshot((snapshot)=>{
          setMessage(snapshot.docs.map(doc =>doc.data()))
      })
  },[])
  return (
    <div>
      <SignOut></SignOut>
      {message.map((id,text,photoURL)=>(
          <div key={id}>
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
      ))}
    </div>
  )
}

export default Chat