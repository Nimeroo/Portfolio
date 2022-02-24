import "./ProjectList.css";
import React from "react";
import githubLogo from "../../Assets/github-logo.png";
import { Box, Paper } from "@mui/material";

const ProjectList = ({ projects }) => {
  return (
    <Box id="projects">
      {projects.records &&
        projects.records.map((project) => {
          return (
            <Paper elevation={10} id="project-cont">
              <h2 id="project-title">{project.fields.Title}</h2>
              <a id="github-link" href={project.fields.Github} target="_blank">
                <img src={githubLogo}></img>
              </a>
              <img
                id="project-thumbnail"
                src={project.fields.Thumbnail[0].url}
              ></img>
              <h4 id="project-description">{project.fields.Notes}</h4>
              <a id="project-link" href={project.fields.LiveDemo} target="_blank">
                Live Demo
              </a>
              <h5 id="project-technologies">{project.fields.ProgramsUsed.join(", ")}</h5>
            </Paper>
          );
        })}
    </Box>
  );
};

export default ProjectList;
