import { BiHomeHeart, BiDownload } from "react-icons/bi";
import { BsPerson, BsEnvelopeHeart } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/header.css";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const activeStyle = {
    color: "#e6429c",
  };
  window.addEventListener("scroll", changeColor);

  return (
    <header
      className={`${color ? "header-bg" : ""} ${
        isOpen
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "visible")
      }`}
    >
      <Link to={"/"} className="logo">
        <p>
          <span>{"<"}</span>V<span>ujadin</span> D
          <span>
            agovic<span>{` />`}</span>
          </span>
        </p>
      </Link>
      <nav className={isOpen ? "active" : ""}>
        <Link to={"/"} onClick={() => setIsOpen(false)}>
          <BiHomeHeart className="icon" /> Home
        </Link>
        <NavLink
          onClick={() => setIsOpen(false)}
          to={"/about"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <BsPerson className="icon" /> About
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(false)}
          to={"/projects"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <AiOutlineFundProjectionScreen className="icon" />
          Projects
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(false)}
          to={"/contact"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <BsEnvelopeHeart className="icon" />
          Contact
        </NavLink>
      </nav>
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`hamburger-btn ${isOpen ? "active" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};
export default Navbar;
