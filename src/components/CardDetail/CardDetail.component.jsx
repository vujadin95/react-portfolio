import { AiFillGithub } from "react-icons/ai";
import { IoMdOpen } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

import "../../styles/cardDetail.css";

const CardDetail = ({ project }) => {
  const {
    title,
    imageUrl,
    description = "",
    githubLink = "",
    liveDemoLink = "",
    certificateLink = "",
  } = project;
  return (
    <div className="card-wrapper">
      <img loading="lazy" className="card-img" src={imageUrl} alt="" />
      <h3 className="card-title">{title}</h3>
      {description && <p className="card-desc">{description}</p>}
      <div className="card-button-container">
        {githubLink && (
          <Link to={githubLink} target="_blank" className="card-btn github">
            Github <AiFillGithub />
          </Link>
        )}
        {liveDemoLink && (
          <Link
            to={liveDemoLink}
            target="_blank"
            className="card-btn open-live"
          >
            Live Demo <IoMdOpen />
          </Link>
        )}
        {certificateLink && (
          <Link
            className="card-btn cert-link"
            to={certificateLink}
            target="_blank"
          >
            See <MdKeyboardArrowRight className="send-arrow" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardDetail;
