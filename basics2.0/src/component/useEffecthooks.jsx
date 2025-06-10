import React, { useEffect, useState } from "react";

const MyComponent = () => {

    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("My componenet is mounting....")
    }, []);

     useEffect(() => {
        console.log("Value got updated.")
    }, []);


    return (
        <div>
            <p>value is {value}</p>
            <button onClick={() => setValue(value + 1)}>Update Value</button>
            <h3>My component</h3>;
        </div>
    )
}

export default MyComponent;