// src/components/Gallery/Gallery.jsx
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { projects } from "../../data/projectsData";
import "./gallery.css";

// Shuffles array randomly
const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  const photos = useMemo(() => {
    // Collect all images from all projects
    let allImages = [];
    projects.forEach((project) => {
      if (project.images) {
        allImages = [...allImages, ...project.images];
      }
    });

    const shuffled = shuffleArray(allImages);

    // ✅ FIX: Use CONSISTENT aspect ratios — avoids giant gaps in masonry
    // Alternating portrait/landscape in a tight repeating cycle
    const ratios = [
      { width: 4, height: 5 }, // Portrait
      { width: 3, height: 2 }, // Landscape
      { width: 1, height: 1 }, // Square
      { width: 3, height: 4 }, // Tall Portrait
      { width: 16, height: 9 }, // Wide Landscape
    ];

    return shuffled.map((img, idx) => {
      const ratio = ratios[idx % ratios.length];
      // Scale up for pixel dimensions
      const scale = 200;
      return {
        src: img.src,
        width: ratio.width * scale,
        height: ratio.height * scale,
        alt: `Gallery photo ${idx + 1}`,
      };
    });
  }, []);

  return (
    <section className="gallery-section">
      <div className="gallery-wrapper">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="gallery-title glow-gold">Our Gallery</h2>
          <p className="gallery-subtitle">Every frame tells a story</p>
        </motion.div>

        {/* Masonry Photo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <PhotoAlbum
            layout="masonry"
            photos={photos}
            spacing={12} // ✅ Tighter spacing = no big gaps
            columns={(containerWidth) => {
              // ✅ Responsive columns
              if (containerWidth < 480) return 1;
              if (containerWidth < 768) return 2;
              if (containerWidth < 1100) return 3;
              return 4; // ✅ 4 columns on large screens = more compact
            }}
            onClick={({ index }) => setIndex(index)}
            renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
              <motion.div
                style={{
                  ...wrapperStyle,
                  overflow: "hidden",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="gallery-item-wrapper"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",   // ✅ Fills frame without stretching
                    display: "block",
                  }}
                  loading="lazy"
                />
              </motion.div>
            )}
          />
        </motion.div>

      </div>

      {/* Fullscreen Lightbox */}
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Thumbnails]}
      />
    </section>
  );
};

export default Gallery;