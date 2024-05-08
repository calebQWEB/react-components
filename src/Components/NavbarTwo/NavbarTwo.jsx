import React from 'react'
import './NavbarTwo.css'
import Button from "../Button/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Hamburger from "../Hamburger/Hamburger";

const NavbarTwo = () => {
    const [showNav, setShowNav] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const onShowNav = () => {
        setShowNav((prev) => !prev);
    };

  return (
    <nav>
        <h1 className='logo'>Logo</h1>

        <ul className='navLinks-container'>
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About</a></li>
        </ul>

        {!isMobile && <Button text='Contact' border='#f5f5f5' hoverColor='#f5f5f5'/>}

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
  )
}

export default NavbarTwo