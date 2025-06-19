import React from "react";
import { useContext } from "react";
import { counterContext } from "../Contexts/Counter";

const Counter = () => {
    const counterState = useContext(counterContext);
    return (
        <div>
            <button onClick={() => counterState.setCount(counterState.count + 1)}>Increment</button>
            <button onClick={() => counterState.setCount(counterState.count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter;