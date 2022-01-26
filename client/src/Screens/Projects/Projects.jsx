import React, { useEffect, useState } from "react";
import { getProjects } from "../../Services/apiConfig";

const Projects = () => {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsList = await getProjects();
      if (projectsList) {
        setProjects(projectsList);
      }
      console.log(projectsList);
    };
    fetchProjects();
  }, []);

  return (
    <div id="project-list-cont">
      {projects.records &&
        projects.records.map((project) => {
          return (
            <div id="project-cont">
              <h1 id="project-title">{project.fields.Title}</h1>
              <img
                id="project-thumbnail"
                src={project.fields.Thumbnail.url}
              ></img>
              <h4 id="project-description">{project.fields.Notes}</h4>
              <div id="project-tech-used"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Projects;
