import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
    const count = useSelector((state) => state);
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}; 

export default Count;