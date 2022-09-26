import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const {cart} = props;
  let price = 0;
  let shipping =0;
  let quantity = 0;
  for ( const product of cart){
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = price*0.1 ;
  const grandTotal = price + shipping + tax;
  return (
    <div className="cart">
      <h3>Order Summery in Cart</h3>
      <div className='cart-item'>
        <p>Selected Item: {quantity}</p>
        <p>Total Price: ${price}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Total Tax: ${tax.toFixed(2)} </p>
        <h5>Grand Total: ${grandTotal .toFixed(2)} </h5>
        <div button-two>
          <button> Order Clear</button>
          <button> Order Review</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;