import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
}
    from "firebase/auth";


const firebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyBK1NVPlytDaaKu4rQ94Jcm4cn2SBnbjQw",
    authDomain: "bookify-92867.firebaseapp.com",
    projectId: "bookify-92867",
    storageBucket: "bookify-92867.firebasestorage.app",
    messagingSenderId: "535255944444",
    appId: "1:535255944444:web:1b83a3fb15ff6e2fa99b79"
};

export const useFirebase = () => useContext(firebaseContext)

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);


export const FirebaseProvider = (props) => {
    const signupUserWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
    };

    const signinUserWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(firebaseAuth, email, password)
    };

    return <firebaseContext.Provider
        value={{
            signupUserWithEmailAndPassword,
            signInWithEmailAndPassword
        }}>
        {props.children}
    </firebaseContext.Provider>
}