import "./Nav.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import React, { useState } from "react";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import mainLogo from "../../Assets/main-logo.png";

const Nav = ({
  scrollTo,
  homeReference,
  aboutReference,
  skillsReference,
  contactReference,
}) => {
  const [boxShadower, setBoxShadower] = useState(0);
  const [hamburgerStatus, setHamburgerStatus] = useState(false);

  window.onscroll = () => {
    if (window.pageYOffset > 20) {
      setBoxShadower(3);
    } else {
      setBoxShadower(0);
    }
  };

  const updateHamburger = () => {
    if (hamburgerStatus === false) {
      setHamburgerStatus(true);
    } else setHamburgerStatus(false);
  };

  const navlinks = (
    <>
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
    </>
  );

  return (
    <Toolbar sx={{ boxShadow: boxShadower }} variant="dense" id="navbar">
      <Link to="/">
        <img id="logo" src={mainLogo} alt="logo"></img>
      </Link>
      <div id="nav-links-cont">
        {window.screen.width <= 600 ? (
          <IconButton onClick={() => updateHamburger()}>
            <MenuIcon />
          </IconButton>
        ) : (
          navlinks
        )}
        {hamburgerStatus && window.screen.width <= 600 ? (
          <HamburgerMenu
            updateHamburger={updateHamburger}
            scrollTo={scrollTo}
            homeReference={homeReference}
            aboutReference={aboutReference}
            skillsReference={skillsReference}
            contactReference={contactReference}
          />
        ) : null}
      </div>
    </Toolbar>
  );
};

export default Nav;
