import { NavLink } from "react-router-dom";
const NavLinkComponent = ({
  path,
  handleLinkClick,
  label,
  icon,
  activeStyle,
}) => {
  return (
    <NavLink
      className="nav-link"
      style={({ isActive }) => (isActive ? activeStyle : null)}
      to={path}
      onClick={() => handleLinkClick()}
    >
      {icon} {label}
    </NavLink>
  );
};

export default NavLinkComponent;
