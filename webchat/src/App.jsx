

import React, { useEffect, useState, useRef } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import "./App.css"
import { auth, databaseApp } from './services/firebaseConfig'
import { addDoc, collection, limit, orderBy, query, serverTimestamp } from 'firebase/firestore';


function App() {

  const [user] = useAuthState(auth);
  return (
    <div className='App'>
      <header>
        <h1>WebChat</h1>
        <SignOut />
      </header>

      <section> {user ? <ChatRoom /> : <SignIn />}

      </section>

    </div>

  );



}

function ChatRoom() {

  const dummy = useRef()
  const messageRef = collection(databaseApp, "messages");
  const QuerryMessages = query(messageRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(QuerryMessages, { idField: "id" });

  const [formValue, setFormValue] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();

    const { photoURL, uid } = auth.currentUser;

    await addDoc(messageRef, {
      text: formValue,
      uid,
      photoURL,
      createdAt: serverTimestamp(),
    });
    setFormValue('');

    dummy.current.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <>
      <main>
        {messages && messages.map((msg, index) => <ChatMessage key={index} message={msg} />)}
        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input
          type="text" value={formValue} onChange={e => setFormValue(e.target.value)}
        />
        <button>Send</button>
      </form>
    </>

  )


};

function ChatMessage(props) {
  const { text, photoURL, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recived';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  )

};

function SignIn() {
  const [signInWithGoogle] = useSignInWithGoogle(auth)

  return (
    <button className='sign-in' onClick={() => signInWithGoogle()}>Sign-in with Google</button>

  );
};

function SignOut() {
  return (
    auth.currentUser && (
      <button className='sign-out' onClick={() => auth.signOut()}> Logout</button>
    )
  );
};








export default App;



