export interface ProjectProps {
  project: ProjectType;
}

export interface ProjectType {
  id: string;
  title: string;
  screenshots: string[];
  descriptionShort: string;
  technologies: string[];
  liveDeployLink: string;
  gitHubRepositoryLink: string;
}

export interface FormStateType {
  name: string;
  email: string;
  message: string;
}
