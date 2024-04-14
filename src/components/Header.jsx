import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

import logo2 from "../assets/logo-grabfood2.svg";
import logo1 from "../assets/logo-grabfood-white.svg";
import "./Design.css";
import cart from "../assets/icon-cart-default-black.svg";
const Navbar = () => {
  const [color, setColor] = useState(false);
  const [logoSrc, setLogoSrc] = useState(logo1);

  const changeColor = () => {
    if (window.scrollY >= 45) {
      setColor(true);
      setLogoSrc(logo2);
    } else {
      setColor(false);
      setLogoSrc(logo1);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg header-shadow" : "header"}>
      <div className="container">
        <nav className="navbar">
          <Link className="navbar-brand" to="/">
            <img className="logo2" src={logoSrc} alt="Logo" />
          </Link>
          <div className="button">
            <button
              style={{ border: "1px solid #f0efef" }}
              id="button"
              type="button"
              className="btn btn-light"
            >
              <img src={cart} alt="Cart" />
            </button>
            <button
              style={{
                border: "1px solid #f0efef",
                fontSize: "13px",
                color: "#676767",
              }}
              id="button"
              type="button"
              className="btn btn-light"
            >
              <a href="#" className="link">
                Login/Sign Up
              </a>
            </button>
            <button
              style={{
                border: "1px solid #f0efef",
                fontSize: "13px",
                color: "#676767",
              }}
              id="button"
              type="button"
              className="btn btn-light"
              aria-expanded="false"
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                EN
              </a>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
