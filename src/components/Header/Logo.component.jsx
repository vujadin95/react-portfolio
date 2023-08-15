import { Link } from "react-router-dom";
const Logo = ({ setIsMobileNav }) => {
  return (
    <Link to={"/"} className="logo" onClick={() => setIsMobileNav(false)}>
      <span className="logo__symbol">{"< "}</span>Vujadin Dagovic
      <span className="logo__symbol">{" />"}</span>
    </Link>
  );
};

export default Logo;
