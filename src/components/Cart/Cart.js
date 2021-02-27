import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    console.log(cart);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
};

export default Cart;