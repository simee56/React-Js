import { React, useContext } from "react";
import { cartContext } from "../context/cart";

const Item = (props) => {
    const cart = useContext(cartContext);
    console.log("cart:", cart);

    return (
        <div>
            <h3>{props.name} </h3>
            <h3>Price : {props.price} </h3>
            <button onClick={() => cart.setItems([...cart.items, { name: props.name, price: props.price }])}>Add to cart</button>
        </div>
    );
};

export default Item;
