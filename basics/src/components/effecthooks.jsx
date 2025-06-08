import React, { useEffect} from "react";

const USeEffectHooks = () => {
    useEffect(() => {
        console.log("My componenet is mounting...")
    });

        return (
            <div>
                <h3>USeEffect Hooks</h3>
            </div>
        );
};

export default USeEffectHooks;