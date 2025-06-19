import React, { useContext } from "react";
import { cartContext } from "../context/cart";

const Cart = () => {
    const cart = useContext(cartContext)
    return (
        <div>
            <h1>Cart</h1>
            {
                cart && cart.items.map((item) => (
                    <li>
                        {item.name} -{item.price}
                    </li>
                )
                )
            }
            <h4>Total Amount</h4>
        </div>
    );
};

export default Cart;