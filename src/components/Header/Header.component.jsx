import "../../styles/header.css";

import { useState, useRef, useEffect } from "react";
import Logo from "./Logo.component";
import Navbar from "./Navbar.component";
import HamburgerMenu from "./HamburgerMenu.component";

const Header = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMobileNav && navRef.current && !navRef.current.contains(e.target)) {
        setIsMobileNav(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMobileNav]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={navRef} className={isScrolled ? "black-bg" : ""}>
      <div
        className={`header-container ${
          isMobileNav
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "visible")
        }`}
      >
        <Logo setIsMobileNav={setIsMobileNav} />
        <Navbar isMobileNav={isMobileNav} setIsMobileNav={setIsMobileNav} />
        <HamburgerMenu
          isMobileNav={isMobileNav}
          setIsMobileNav={setIsMobileNav}
        />
      </div>
    </header>
  );
};

export default Header;
