// src/components/Footer/Footer.jsx
import React from "react";
import "./footer.css";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Divider Line */}
      <div className="footer-divider"></div>

      {/* Brand Name */}
      <h2 className="footer-title">TRUE SHOTS PHOTOGRAPHY</h2>

      {/* Updated Locations */}
      <div className="footer-locations">
        <div>
          <FaMapMarkerAlt /> Chennai, India
        </div>

        <span className="dot">•</span>

        <div>
          <FaMapMarkerAlt /> Bangalore, India
        </div>

        <span className="dot">•</span>

        <div>
          <FaMapMarkerAlt /> Hosur, India
        </div>
      </div>

      {/* Social Icons */}
      <div className="footer-social">
        <a href="mailto:trueshotsphotography3@gmail.com"><FaEnvelope /></a>
        <a href="tel:+918870763304"><FaPhoneAlt /></a>
        <a href="https://www.instagram.com/true_shots_4/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>

      {/* Contact Info (UPDATED) */}
      <p className="footer-contact">
        📧 <a href="https://www.trueshotsphotography.com" target="_blank">www.trueshotsphotography.com</a>
        <span className="footer-separator">&nbsp; | &nbsp;</span>
        <br className="footer-break" style={{ display: "none" }} />
        📞 +91-8870763304 ,8148337487 , 9150569854
      </p>

      {/* Footer Navigation */}
      <div className="footer-nav">
        <a href="#hero">About</a>
        <a href="#services">Services</a>
        <a href="#showcase">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Copyright */}
      <p className="footer-copy">© 2026 TRUE SHOTS PHOTOGRAPHY. All rights reserved.</p>

    </footer>
  );
};

export default Footer;
