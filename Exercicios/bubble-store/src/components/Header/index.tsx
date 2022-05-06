import React, { useContext, useState } from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCart from '../ShoppingCart';   
import HamburgerMenu from '../HamburgerMenu';
 
const minderaLogo = require("./../../assets/minderaLogo.png");


// types
export type CartItemType = {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string[];
  category: {
    0: string;
    1: string;
  };
  quantity: number;
};

const Header = () => {


  return (
    <div className="headerContainer" id="headerContainer">
      <div className="firstPartHeader">
        <img src={minderaLogo} className="minderaLogo" alt="mindera logo" />
        <h1 id='bubbleStore'>Bubble Store</h1>

        <ShoppingCart />

      </div>

      <hr></hr>
      <nav className="secondPartHeaderContainer">
        <div className="slideBarContainer">
          <HamburgerMenu />
        </div>

        <ul className="secondPartHeader">
          <li>
            <Link to="/" className="routes">
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" className="routes">
              Products
            </Link>
          </li>

          <li>
            <Link to="category/naruto" className="routes">
              Naruto
            </Link>
          </li>

          <li>
            <Link to="/category/fairytail" className="routes">
              Fairy Tail
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;