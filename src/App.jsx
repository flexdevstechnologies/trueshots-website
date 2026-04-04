// src/App.jsx
import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Showcase from "./components/Showcase/Showcase";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CursorFollower from "./components/CursorFollower/CursorFollower";

const App = () => {
  return (
    <>
      <CursorFollower />
      <Navbar />

      <div className="main-wrapper">
        <section id="hero" className="section-with-divider">
          <Hero />
        </section>

        <div className="gold-divider" />

        <section id="showcase" className="section-with-divider">
          <Showcase />
        </section>

        <div className="gold-divider" />

        <section id="services" className="section-with-divider">
          <Services />
        </section>

        <div className="gold-divider" />

        <section id="testimonials" className="section-with-divider">
          <Testimonials />
        </section>

        <div className="gold-divider" />

        <section id="contact" className="section-with-divider">
          <Contact />
        </section>

        <div style={{ height: 30 }} />

        <Footer />
      </div>
    </>
  );
};

export default App;
