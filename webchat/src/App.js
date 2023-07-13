import React from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import { auth } from 'firebase/compat/auth';


import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({

  apiKey: "AIzaSyB29XHKZ3F3_nk-PCR3J1-8w4qAPhoFJOY",
  authDomain: "firebasics-5fbd0.firebaseapp.com",
  projectId: "firebasics-5fbd0",
  storageBucket: "firebasics-5fbd0.appspot.com",
  messagingSenderId: "787111217878",
  appId: "1:787111217878:web:ac8a6b20528ab5f4b21777"

})

function App() {


  const [user] = useAuthState(auth);


  return (

    <div className="App">
      <header className="App-header">

      </header>

      <section>

        {user ? <ChatRoom /> : <SignIn />}

      </section>
    </div>
  );
}


function SignIn() {

  const useSignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={useSignInWithGoogle}>Entrar com o Google</button>
  )
}

function signOut() {
  return auth.currentUser && (

    <button onClick={() => auth.signOut()}>Sign Out</button>
  )

}

function ChatRoom() {

}

export default App;
