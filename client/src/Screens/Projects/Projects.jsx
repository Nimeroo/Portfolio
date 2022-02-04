import React, { useEffect, useState } from "react";
import { getProjects } from "../../Services/apiConfig";
import ProjectList from "../../Components/ProjectList/ProjectList";

const Projects = () => {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsList = await getProjects();
      if (projectsList) {
        setProjects(projectsList);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div id="project-list-cont">
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;