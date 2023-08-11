import logo from "../../assets/logo.png";
import { BiHomeHeart, BiDownload } from "react-icons/bi";
import { BsPerson, BsEnvelopeHeart } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Navbar = () => {
  const activeStyle = {
    color: "#e6429c",
  };
  return (
    <header>
      <Link to={"/"} className="logo">
        <p>
          <span>{"<"}</span>V<span>ujadin</span> D
          <span>
            agovic<span>{` />`}</span>
          </span>
        </p>
      </Link>
      <nav>
        <Link to={"/"}>
          <BiHomeHeart className="icon" /> Home
        </Link>
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
        {/* <ToggleTheme /> */}
      </nav>
    </header>
  );
};
export default Navbar;
