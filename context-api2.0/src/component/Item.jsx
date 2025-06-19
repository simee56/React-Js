import React from "react";

const Item = (props) => {
    return (
        <div>
            <h3>{props.name} </h3>
            <h3>Price : {props.price} </h3>
            <button>Add to cart</button>
        </div>
    );
};

export default Item;
