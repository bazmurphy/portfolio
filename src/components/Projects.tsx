import { ProjectType } from "../types";
import projectsData from "../data/projects.json";
import Project from "./Project";

const Projects = () => {
  const projects: ProjectType[] = projectsData;

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project: ProjectType) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
