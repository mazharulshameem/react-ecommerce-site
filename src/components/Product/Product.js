import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
  const {handleAddtoCart} = props;
  const {name, img, price, ratings, seller} = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="price">Price: ${price}</p>
        <div className="seller-rating">
          <p>
            <span className="seller">Manufacturer: {seller}</span>
          </p>

          <p>
            <span className="rating">Ratings: {ratings} Stars</span>
          </p>
        </div>
      </div>
      <button onClick={() => props.handleAddToCart(props.product)} className="cart-button">
        <p className='cart-text'>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;