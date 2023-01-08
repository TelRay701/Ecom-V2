import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Nav.css";

const Nav = (props) => {
  return (
    <>
      <header>
        {/* Navigation Bar*/}
        <nav className="navbar">
          <div className="navContainer">
            <a href="/" id="navLogo">
              <i className="fa-brands fa-teamspeak" />
              NGT
            </a>
            <FaBars className="navToggle" id="mobile-menu" />
            <ul className="navMenu">
              <li className="navItem">
                <Link to="/" className="navLinks">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Products" className="navLinks">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="navLinks">
                  Contact Us
                </Link>
              </li>

              <li className="navbtn">
                <a href="/" className="bttn">
                  Check Out<i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Nav;
