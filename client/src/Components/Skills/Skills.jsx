import "./Skills.css";
import React, { useState } from "react";
import reactLogo from "../../Assets/react-logo.png";
import jsLogo from "../../Assets/javascript-logo.png";
import railsLogo from "../../Assets/rails-logo.png";
import gitLogo from "../../Assets/git-logo.png";
import expressLogo from "../../Assets/express-logo.png";
import nodeLogo from "../../Assets/node-logo.png";
import pythonLogo from "../../Assets/python-logo.png";
import { Box, Paper } from "@mui/material";

const Skills = ({ skillsReference, scrollTo }) => {
  const [expandedSkills, setExpandedSkills] = useState(false);

  const extraSkillsBtn = () => {
    if (expandedSkills === false) {
      return (
        <button className="expand-btn" onClick={() => setExpandedSkills(true)}>
          Show other skills
        </button>
      );
    } else return null;
  };

  const otherSkillsFadeOut = () => {
    const otherSkillsCont = document.getElementById("other-skills-cont");
    otherSkillsCont.style.animation = "shrink-fade-out forwards 0.5s";
    otherSkillsCont.childNodes.forEach((child) => {
      child.style.animation = "fade-out forwards 0.5s";
    });
    setTimeout(() => setExpandedSkills(false), 490);
    extraSkillsBtn();
    console.log(otherSkillsCont.style.height);
  };

  const extraSkills = () => {
    if (expandedSkills) {
      return (
        <Paper elevation={10} id="other-skills-cont">
          <h5 className="specific-skills-title">
            Other proficient technologies
          </h5>
          <div id="other-skills">
            <div className="skill-item">
              <img
                alt="Express"
                src={expressLogo}
                className="skill-image"
              ></img>
              <h5 className="skill-name">Express</h5>
            </div>
            <div className="skill-item">
              <h5 alt="Node.js" className="skill-name">
                Node.js
              </h5>
              <img src={nodeLogo} className="skill-image"></img>
            </div>
            <div className="skill-item">
              <img src={pythonLogo} alt="Python" className="skill-image"></img>
              <h5 className="skill-name">Python</h5>
            </div>
          </div>
          <button
            className="expand-btn"
            onClick={() => {
              otherSkillsFadeOut();
              scrollTo(skillsReference);
            }}
          >
            Collapse
          </button>
        </Paper>
      );
    } else {
      return null;
    }
  };
  return (
    <Box id="skills" ref={skillsReference}>
      <h1 id="skills-title">Skills</h1>
      <Paper elevation={10} id="skills-cont">
        <h5 className="specific-skills-title">Recently used technologies</h5>
        <div id="recent-skills">
          <div className="skill-item">
            <img src={reactLogo} alt="React" className="skill-image"></img>
            <h5 className="skill-name">React</h5>
          </div>
          <div className="skill-item">
            <img src={jsLogo} alt="Javascript" className="skill-image"></img>
            <h5 className="skill-name">JavaScript (ES6+)</h5>
          </div>
          <div className="skill-item">
            <img
              src={railsLogo}
              alt="Ruby on Rails"
              className="skill-image"
            ></img>
            <h5 className="skill-name">Ruby on Rails</h5>
          </div>
          <div className="skill-item">
            <img src={gitLogo} alt="Git" className="skill-image"></img>
            <h5 className="skill-name">Git/Github</h5>
          </div>
        </div>
        {extraSkillsBtn()}
      </Paper>
      {extraSkills()}
    </Box>
  );
};

export default Skills;
