

import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import "./App.css"
import { auth } from './services/firebaseConfig'


function App() {



  return (
    <div className='App'>
      <header>
        <h1>WebChat</h1>

        <SignOut />
      </header>


    </div>

  );



}


function ChatRoom() {

}


function SignIn() {
  const [signInWithGoogle] = useSignInWithGoogle(auth)

  return (
    <button className='sign-in' onClick={() => signInWithGoogle}>Entrar com o Google</button>


  );
}


function SignOut() {
  return auth.currentUser && (
    <button className='sign-out' onClick={() => auth.signOut()}> Sair</button>

  );
}








export default App;



