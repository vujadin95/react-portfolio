import { BiHomeHeart } from "react-icons/bi";
import { BsPerson, BsEnvelopeHeart } from "react-icons/bs";
import { AiOutlineCode } from "react-icons/ai";

import NavLinkComponent from "./NavLink.component";
const navigationData = [
  {
    id: 1,
    path: "/",
    label: "Home",
    icon: <BiHomeHeart />,
    activeStyle: { color: "" },
  },
  {
    id: 2,
    path: "/about",
    label: "About",
    icon: <BsPerson />,
    activeStyle: { color: "#e6429c" },
  },
  {
    id: 3,
    path: "/projects",
    label: "Projects",
    icon: <AiOutlineCode />,
    activeStyle: { color: "#e6429c" },
  },
  {
    id: 4,
    path: "/contact",
    label: "Contact",
    icon: <BsEnvelopeHeart />,
    activeStyle: { color: "#e6429c" },
  },
];
const Navbar = ({ isMobileNav, setIsMobileNav }) => {
  return (
    <nav className={`navigation__menu ${isMobileNav ? "mobile" : ""}`}>
      {navigationData.map((link) => (
        <NavLinkComponent
          key={link.id}
          path={link.path}
          label={link.label}
          icon={link.icon}
          activeStyle={link.activeStyle}
          handleLinkClick={setIsMobileNav}
        />
      ))}
    </nav>
  );
};
export default Navbar;
