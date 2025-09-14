import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, EmailAuthCredential } from "firebase/auth";


const firebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyDjHFXSotmg-LcvIJadntnNAJstrYOWGe4",
    authDomain: "firstproject-ee77a.firebaseapp.com",
    projectId: "firstproject-ee77a",
    storageBucket: "firstproject-ee77a.firebasestorage.app",
    messagingSenderId: "194258121649",
    appId: "1:194258121649:web:2941bb9d4cd879dd7fc390",
    databaseUrl: "https://firstproject-ee77a-default-rtdb.firebaseio.com/"
};

export const useFirebase = () => useContext(firebaseContext)

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);


export const FirebaseProvider = (props) => {
    const signupUSerWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
    };

    return <firebaseContext.Provider
        value={{ signupUSerWithEmailAndPassword }}>
        {props.children}
    </firebaseContext.Provider>
}