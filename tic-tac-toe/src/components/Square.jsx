import React from "react";

const Square = (props) => {
    return (
        <div className="Square">
            onClick={props.onClick}
            <h5>{props.value}</h5>
        </div>
    );
};

export default Square;