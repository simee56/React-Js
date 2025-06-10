import React, { useEffect, useState } from "react";

const Timer = () => {
    const [Time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setTime(Time +1), 1000)

        return function () {
            clearInterval(timer)
        }
    }, [Time]);

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Current time is {Time}</p>
        </div>
    );
};

export default Timer;
