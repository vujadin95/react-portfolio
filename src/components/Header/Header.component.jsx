import logo from "../../assets/logo.png";
import { BiHomeHeart, BiDownload } from "react-icons/bi";
import { BsPerson, BsEnvelopeHeart } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineLightMode } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const activeStyle = {
    color: "#e6429c",
  };
  const homeColor = {
    color: "inherit",
  };
  return (
    <header>
      <Link to={"/"} className="logo">
        <img src={logo} alt="photo of Vujadin" />
        <p>Vujadin Dagovic</p>
      </Link>
      <nav>
        <NavLink
          to={"/"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <BiHomeHeart className="icon" /> Home
        </NavLink>
        <NavLink
          to={"/about"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <BsPerson className="icon" /> About
        </NavLink>
        <NavLink
          to={"/projects"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <AiOutlineFundProjectionScreen className="icon" />
          Projects
        </NavLink>
        <NavLink
          to={"/contact"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <BsEnvelopeHeart className="icon" />
          Contact
        </NavLink>
        <MdOutlineLightMode />
      </nav>
    </header>
  );
};
export default Navbar;
