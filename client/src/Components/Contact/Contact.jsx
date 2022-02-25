import "./Contact.css";
import React from "react";
import { Box, Paper } from "@mui/material";
import linkedinLogo from "../../Assets/linkedin-logo.png";
import githubLogo from "../../Assets/github-logo.png";

const Contact = ({ contactReference }) => {
  return (
    <Box id="contact" ref={contactReference}>
      <h1 id="contact-title">Contact Me</h1>
      <Paper id="contact-cont">
        <h2 id="search-status">Always searching for new opportunities.</h2>
        <h4>
          Shoot me an email at:
          <div
            id="email"
            onClick={() => {
              window.open("mailto:giro.joe@gmail.com");
            }}
          >
            girou.joe@gmail.com
          </div>
        </h4>
        <div id="social-links-cont">
          <a
            className="social-link"
            href="https://www.linkedin.com/in/joelgiroux/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a
            className="social-link"
            href="https://github.com/Nimeroo"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="Github" />
          </a>
        </div>
      </Paper>
    </Box>
  );
};

export default Contact;
