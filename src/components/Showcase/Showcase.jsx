// src/components/Showcase/Showcase.jsx
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./showcase.css";
import { projects } from "../../data/projectsData";

const Showcase = () => {
  const containerRef = useRef(null);
  const galleryRef = useRef(null);
  const [scrollMax, setScrollMax] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const calculateScroll = () => {
      // For desktop, items are 400px wide and gap is 40px.
      // We calculate exactly to avoid flexbox truncating the scrollWidth measurement on mount.
      const itemWidth = 400;
      const gap = 40;
      const totalWidth = (projects.length * itemWidth) + ((projects.length - 1) * gap);
      const viewportWidth = window.innerWidth;
      
      // We start 5vw from the left due to padding. We want to end with roughly 5vw padding on the right.
      const paddingLeft = viewportWidth * 0.05;
      const paddingRight = viewportWidth * 0.05;
      
      // The total distance we need to shift left so the right edge of the final item rests exactly at the viewport right minus padding.
      const maxScroll = Math.max(0, totalWidth + paddingLeft + paddingRight - viewportWidth);
      setScrollMax(-maxScroll);
    };

    calculateScroll();
    window.addEventListener("resize", calculateScroll);
    return () => window.removeEventListener("resize", calculateScroll);
  }, [projects.length]);

  // Finish the horizontal scroll when vertical scroll is at 85%.
  // This provides a buffer so it guarantees the last item is fully seen before the section leaves the screen!
  const x = useTransform(scrollYProgress, [0, 0.85], [0, scrollMax]);

  const [open, setOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);

  const handleOpenProject = (project) => {
    if (project.images && project.images.length > 0) {
      setCurrentGallery(project.images);
      setOpen(true);
    }
  };

  return (
    <section 
      className="showcase-section" 
      ref={containerRef}
      style={{ "--dynamic-height": `${Math.max(300, projects.length * 75)}vh` }}
    >
      <div className="showcase-sticky">
        <h2 className="showcase-title">Featured Works</h2>
        <motion.div style={{ x, width: "max-content" }} className="showcase-gallery" ref={galleryRef}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="showcase-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              onClick={() => handleOpenProject(project)}
              style={{ cursor: project.images.length > 0 ? "pointer" : "default" }}
            >
              <div className="showcase-img-wrapper">
                {/* Using project cover image */}
                <div className="showcase-placeholder" style={{ backgroundImage: `url('${project.cover}')` }}>
                  <span className="overlay-text">{project.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={currentGallery}
        plugins={[Thumbnails]}
      />
    </section>
  );
};

export default Showcase;
