import "./About.css";
import React from "react";
import pfp from "../../Assets/pfp.jpg"
import { Box, Paper, Typography } from "@mui/material";

const About = ({ aboutReference }) => {
  return (
    <Box id="about" ref={aboutReference}>
      <h1 id="about-title">About me</h1>
      <Paper elevation={10} id="about-cont">
        <img id="profile-pic" alt="joel" src={pfp}></img>
        <div id="about-info">
          <h1 id="about-job-title">Software Developer</h1>
          <Typography component="h4" id="about-text">
            I am a Software Developer who has an immense amount of interest in
            the future of technology. I address issues through the use of
            creative and logical thinking. My innate ability to adapt allows me
            to become accustomed to new situations and environments extremely
            fast.
          </Typography>
          <a
            id="resume-link"
            href="https://docs.google.com/document/d/12JlR-qfUxxi4QuhbJMRenwtd4ORIPnBhlmaIwOtHRfQ/"
            target="_blank"
            rel="noreferrer"
          >
            Click here for resume.
          </a>
        </div>
      </Paper>
    </Box>
  );
};

export default About;
