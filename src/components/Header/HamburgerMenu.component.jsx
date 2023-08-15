const HamburgerMenu = ({ setIsMobileNav, isMobileNav }) => {
  return (
    <div
      onClick={() => setIsMobileNav((prevState) => !prevState)}
      className={`hamburger-btn ${isMobileNav ? "active" : ""}`}
    >
      <span className="hamburger-line line-1"></span>
      <span className="hamburger-line line-2"></span>
      <span className="hamburger-line line-3"></span>
    </div>
  );
};

export default HamburgerMenu;
