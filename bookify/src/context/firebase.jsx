import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
}
    from "firebase/auth";
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, user => {
            if (user) setUser(user);
            else setUser(null);
        })
    })

    const signupUserWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
    };

    const signinUserWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(firebaseAuth, email, password)
    };

    const singinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

    const handleCreateNewListing = async (name, isbnNumber, price, coverPic) => {
        const imageRef = ref(storage, `uploads/iamges/${Date.now()}-${coverPic.name}`);
        const uploadResult = await uploadBytes(imageRef, coverPic);
        return await addDoc(collection(firestore, 'books'), {
            name,
            isbnNumber,
            price,
            imageURL: uploadResult.ref.fullPath,
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        })
    }
    const isLoggedIn = user ? true : false;

    return <firebaseContext.Provider
        value={{
            signupUserWithEmailAndPassword,
            signinUserWithEmailAndPassword,
            singinWithGoogle,
            isLoggedIn,
            handleCreateNewListing
        }}>
        {props.children}
    </firebaseContext.Provider>
}