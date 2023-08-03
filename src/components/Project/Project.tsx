import { ProjectProps } from "../../types";
import "./Project.css";

const Project = ({ project }: ProjectProps) => {
  return (
    <article className="project-article">
      <h3 className="project-title">{project.title}</h3>
      <div className="project-screenshot-container">
        <img
          src={`./images/${project.screenshots[0]}`}
          alt={project.title}
          className="project-screenshot"
        />
      </div>
      <p className="project-description-short">{project.descriptionShort}</p>
      <ul className="project-technologies-list">
        {project.technologies.map((technology, index) => {
          return (
            <li
              key={`project-technology-key-${index + 1}`}
              className="project-technologies-list-item"
            >
              {technology}
            </li>
          );
        })}
      </ul>
      <div className="project-links-container">
        <a
          href={project.gitHubRepositoryLink}
          target="_blank"
          className="project-github-repository-link"
        >
          GitHub
        </a>
        <a
          href={project.liveDeployLink}
          target="_blank"
          className="project-live-deploy-link"
        >
          Live Site
        </a>
      </div>
    </article>
  );
};

export default Project;
