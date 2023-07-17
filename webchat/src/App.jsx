

import React, { useEffect, useState } from 'react';
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

  };

  return (
    <>
      <main>
        {messages && messages.map((msg, index) => <ChatMessage key={index} message={msg} />)}
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
    <button className='sign-in' onClick={() => signInWithGoogle()}>Entrar com o Google</button>

  );
};

function SignOut() {
  return (
    auth.currentUser && (
      <button className='sign-out' onClick={() => auth.signOut()}> Sair</button>
    )
  );
};








export default App;



