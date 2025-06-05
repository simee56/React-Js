import React, { useState } from "react";

const StateHoops = () => {
    const [count, setCount] = useState(0);

    return (
        <div >
            <h5>The number is {count %2 ===0 ?<>Even</> : <>Odd</> }</h5>
            <p>Counter Value is {count} </p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div >
    );
};

export default StateHoops;
