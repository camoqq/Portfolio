import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header headerScroll" : "header"}>
      <Link to="/" className="p">
        <h1>Portfolio</h1>
      </Link>

      <ul className={click ? "bar active" : "bar"}>
        <li>
          <Link to="/project">PROJECTS</Link>
        </li>
        <li className="d">|</li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="d">|</li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
      <div className="icons" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ cursor: "pointer" }} />
        ) : (
          <FaBars size={30} style={{ cursor: "pointer" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
