import "./Nav.css"
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="navbar">
      <Link to="/">
        <h1 id="logo">Joel Giroux</h1>
      </Link>
      <div id="nav-links-cont">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <h3>About</h3>
        <Link to="/projects">
          <h3>Projects</h3>
        </Link>
        <h3>Contact</h3>
      </div>
    </div>
  );
};

export default Nav;
