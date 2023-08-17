import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { BsDiscord, BsEnvelopeHeart } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/socialIcons.css";

const SocialsIcons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const iconsRef = useRef();
  useEffect(() => {
    const clickOutside = (e) => {
      if (isOpen && iconsRef.current && !iconsRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [isOpen]);

  const toggleOpen = () => setIsOpen((prevState) => !prevState);

  return (
    <div ref={iconsRef} className="social-icons">
      {isOpen && (
        <div className="social-icons-container">
          <Link
            onClick={toggleOpen}
            to={"https://github.com/vujadin95"}
            target="_blank"
          >
            <AiFillGithub />
          </Link>
          <Link
            onClick={toggleOpen}
            to={"https://discord.com/"}
            target="_blank"
          >
            <BsDiscord />
          </Link>
          <Link onClick={toggleOpen} to={"mailto:vujke456@gmail.com"}>
            <BsEnvelopeHeart />
          </Link>
          <Link
            onClick={toggleOpen}
            to={"https://app.netlify.com/teams/vujadin95/sites"}
            target="_blank"
          >
            <SiNetlify />
          </Link>
        </div>
      )}
      <div
        onClick={toggleOpen}
        className={`social-icons-btn ${isOpen && "isOpen"}`}
      >
        <AiOutlineLink />
      </div>
    </div>
  );
};
export default SocialsIcons;
