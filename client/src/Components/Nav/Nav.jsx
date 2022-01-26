import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">
        <h1>Joel Giroux</h1>
      </Link>
      <div id="nav-links">
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
