
import React from 'react';
import logo from "../../images/Logo.svg"
import "./Header.css"

const Header = () => {
  return (
    <div className='header-top'>
      <img src={logo} alt="" />
      <nav>
        <a href="/about">About</a>
        <a href="/orders">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/shop">Shop</a>
      </nav>

    </div>
  );
};

export default Header;