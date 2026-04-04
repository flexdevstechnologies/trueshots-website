// src/components/Navbar/Navbar.jsx
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import AGLogo from "/src/assets/logos/logo123.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle state based on scroll position > 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="nav-container">
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        {/* Left Logo + Brand */}
        <div className="nav-left">
          <img src={AGLogo} className="nav-logo" alt="AG Vision Logo" />
          <span className="nav-title">TRUE SHOTS PHOTOGRAPHY</span>
        </div>

        {/* Center Navigation (Desktop) */}
        <ul className="nav-menu">
          <li><a href="#hero">The Studio</a></li>
          <li><a href="#showcase">Selected Works</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>

        {/* Right Action Button */}
        <div className="nav-right">
          <a href="#contact" className="nav-btn">Book a Session</a>

          {/* Mobile Menu Icon */}
          <div className="mobile-menu-icon" onClick={toggleMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="mobile-nav-links">
            <li><a href="#hero" onClick={toggleMenu}>The Studio</a></li>
            <li><a href="#showcase" onClick={toggleMenu}>Selected Works</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Book a Session</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
