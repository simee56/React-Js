import { createContext } from "react";

export const counterContext = createContext(null);

export const counterProvider = (props) => {
    return <counterContext.Provider>{props.children}</counterContext.Provider>
};