import "./HamburguerMenu.css";
import React, { useState } from 'react'
import { Link } from "react-router-dom";

const HamburgerMenu = () => {

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

    return (
      <div
        className={
          isActive
            ? "hamburgerMenuContainerActive"
            : "hamburgerMenuContainerInactive"
        }
        onClick={() => {
          if (isActive) {
            toggleClass();
          }
        }}
      >
        <img
          onClick={toggleClass}
          className="hamburgerMenuImage"
          id="hamburgerMenuImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />

        <nav className={isActive ? "hamburgueractive" : "inactiveHamburger"}>
          <ul className="hamburgerMenuList" id="hamburgerMenuList">
            <li>
              <Link to={"/"} className="hamburgerMenuInfo">
                Home
              </Link>
            </li>

            <li>
              <Link to={"/products"} className="hamburgerMenuInfo">
                Products
              </Link>
            </li>

            <li>
              <Link to={"/category/naruto"} className="hamburgerMenuInfo">
                Naruto
              </Link>
            </li>
            <li>
              <Link to={"/category/fairytail"} className="hamburgerMenuInfo">
                Fairy Tail
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default HamburgerMenu;

