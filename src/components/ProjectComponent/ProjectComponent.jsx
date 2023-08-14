import { AiFillGithub } from "react-icons/ai";
import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";

const ProjectComponent = ({ project }) => {
  const { title, imageUrl, description, githubLink, liveDemoLink } = project;
  return (
    <div className="project-card">
      <img className="project-img" src={imageUrl} alt="" />
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-button-container">
        <Link to={githubLink} target="_blank" className="github">
          Github <AiFillGithub />
        </Link>
        <Link to={liveDemoLink} target="_blank" className="open-live">
          Live Demo <IoMdOpen />
        </Link>
      </div>
    </div>
  );
};

export default ProjectComponent;
