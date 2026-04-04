// src/components/Hero/Hero.jsx
import React from "react";
import "./hero.css";
import AGLogo from "../../assets/logos/logo123.png";

const Hero = () => {
  return (
    <div className="hero-wrapper fade-in">

      {/* Very light background photograph */}
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">

        {/* AG LOGO */}
        <img src={AGLogo} alt="AG Vision Logo" className="hero-logo fade-in" />

        {/* Title under the logo */}
        <h1 className="hero-title fade-up">
          TRUE SHOTS PHOTOGRAPHY
        </h1>

        <p className="hero-tagline drift-fade">
          Documenting your life's cherished moments with elegance and emotion.
        </p>

        <a href="#contact" className="hero-btn">Book a Session</a>

      </div>
    </div>
  );
};

export default Hero;
