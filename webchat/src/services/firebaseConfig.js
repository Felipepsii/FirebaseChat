import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB29XHKZ3F3_nk-PCR3J1-8w4qAPhoFJOY",
    authDomain: "firebasics-5fbd0.firebaseapp.com",
    projectId: "firebasics-5fbd0",
    storageBucket: "firebasics-5fbd0.appspot.com",
    messagingSenderId: "787111217878",
    appId: "1:787111217878:web:ac8a6b20528ab5f4b21777"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);