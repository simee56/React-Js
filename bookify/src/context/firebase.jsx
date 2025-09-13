import {createContext, useContext} from "react";

const firebaseContext = createContext(null);

export const useFirebase = useContext(firebaseContext);

export const FirebaseProvider =(props) => {
    return <firebaseContext.Provider>{props.children}</firebaseContext.Provider>
}