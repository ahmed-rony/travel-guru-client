import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <nav className="header-menu">
        <a href="/">
        <img src={require("../../images/logo.png")} alt="logo" />
        </a>
      
      <div>
        <Link className="nav-links" to={"/"}>Home</Link>
        <Link className="nav-links" to={"/destination"}>Destination</Link>
        <Link className="nav-links" to={"/blog"}>Blog</Link>
        <Link className="nav-links" to={"/contact"}>Contact</Link>
        <Link className="nav-links" to={"/login"}>Login</Link>
      </div>
    </nav>
  );
};

export default Header;
