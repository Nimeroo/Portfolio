import React, { useEffect, useState } from "react";
import { getProjects } from "../../Services/apiConfig";
import ProjectList from "../../Components/ProjectList/ProjectList";
import ProjectHero from "../../Components/ProjectHero/ProjectHero";

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
    <div>
      <ProjectHero />
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
