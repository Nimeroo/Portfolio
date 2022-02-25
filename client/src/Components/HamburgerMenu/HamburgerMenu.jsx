import "./HamburgerMenu.css";
import { MenuItem, MenuList, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const HamburgerMenu = ({
  updateHamburger,
  scrollTo,
  homeReference,
  aboutReference,
  skillsReference,
  contactReference,
}) => {
  return (
    <Paper elevation={10} id="hamburger-nav-links-cont">
      <MenuList>
        <Link
          to="/"
          onClick={() => {
            scrollTo(homeReference);
            updateHamburger();
          }}
          className="hamburger-nav-link"
        >
          <MenuItem>Home</MenuItem>
        </Link>
        <Link
          to="/"
          onClick={() => {
            scrollTo(aboutReference);
            updateHamburger();
          }}
          className="hamburger-nav-link"
        >
          <MenuItem>About</MenuItem>
        </Link>
        <Link
          to="/"
          onClick={() => {
            scrollTo(skillsReference);
            updateHamburger();
          }}
          className="hamburger-nav-link"
        >
          <MenuItem>Skills</MenuItem>
        </Link>
        <Link
          to="/projects"
          onClick={() => updateHamburger()}
          className="hamburger-nav-link"
        >
          <MenuItem>Projects</MenuItem>
        </Link>
        <Link
          to="/"
          onClick={() => {
            scrollTo(contactReference);
            updateHamburger();
          }}
          className="hamburger-nav-link"
        >
          <MenuItem>Contact</MenuItem>
        </Link>
      </MenuList>
    </Paper>
  );
};

export default HamburgerMenu;
