import React, { useEffect} from "react";

const MyComponenet = () => {
    useEffect(() => {
        console.log("My componenet is mounting...")
    });

        return (
            <div>
                <h3>MY component</h3>
            </div>
        );
};

export default MyComponenet;