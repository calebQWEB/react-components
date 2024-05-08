import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const onShowNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <nav>
      <h1 className="logo">Logo</h1>

      <div className="link-container">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
        </ul>

        <Button text="Contact" hoverColor='#f5f5f5' border='#f5f5f5'/>
      </div>

      {!showNav ? (
        <RxHamburgerMenu
          size={40}
          color="#f5f5f5"
          className="mobile-menu-icon"
          onClick={onShowNav}
        />
      ) : (
        <FaXmark
          size={40}
          color="#f5f5f5"
          className="mobile-menu-icon"
          onClick={onShowNav}
        />
      )}

      {showNav && <Hamburger />}
    </nav>
  );
};

export default Navbar;
