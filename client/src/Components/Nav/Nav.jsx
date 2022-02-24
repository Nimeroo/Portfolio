import "./Nav.css";
import React, { useState } from "react";
import { Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Nav = ({
  scrollTo,
  homeReference,
  aboutReference,
  skillsReference,
  contactReference,
}) => {
  const [boxShadower, setBoxShadower] = useState(0);

  window.onscroll = () => {
    if (window.pageYOffset > 20) {
      setBoxShadower(3);
    } else {
      setBoxShadower(0);
    }
  };

  return (
    <Toolbar sx={{ boxShadow: boxShadower }} variant="dense" id="navbar">
      <Link to="/">
        <h1 id="logo">Joel Giroux</h1>
      </Link>
      <div id="nav-links-cont">
        <Link to="/" onClick={() => scrollTo(homeReference)}>
          <h3 className="nav-link">Home</h3>
        </Link>
        <Link to="/" onClick={() => scrollTo(aboutReference)}>
          <h3 className="nav-link">About</h3>
        </Link>
        <Link to="/" onClick={() => scrollTo(skillsReference)}>
          <h3 className="nav-link">Skills</h3>
        </Link>
        <Link to="/projects">
          <h3 className="nav-link">Projects</h3>
        </Link>
        <Link to="/" onClick={() => scrollTo(contactReference)}>
          <h3 className="nav-link">Contact</h3>
        </Link>
      </div>
    </Toolbar>
  );
};

export default Nav;
