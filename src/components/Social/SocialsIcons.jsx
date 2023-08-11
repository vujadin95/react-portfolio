import { FiPaperclip } from "react-icons/fi";
import { AiFillGithub, AiFillCodepenCircle } from "react-icons/ai";
import { BsDiscord, BsEnvelopeHeart } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import { useState } from "react";
import { Link } from "react-router-dom";
const SocialsIcons = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="social-icons">
      {isOpen && (
        <div className="social-icons-container">
          <Link to={"https://github.com/vujadin95"} target="_blank">
            <AiFillGithub />
          </Link>
          <Link to={"https://discord.com/"} target="_blank">
            <BsDiscord />
          </Link>
          <Link to={"mailto:vujke456@gmail.com"}>
            <BsEnvelopeHeart />
          </Link>
          <Link
            to={"https://app.netlify.com/teams/vujadin95/sites"}
            target="_blank"
          >
            <SiNetlify />
          </Link>
        </div>
      )}
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`social-icons-btn ${isOpen && "isOpen"}`}
      >
        <FiPaperclip />
      </div>
    </div>
  );
};
export default SocialsIcons;
