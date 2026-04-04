// src/components/Gallery/GalleryItem.jsx

import React from "react";

const GalleryItem = ({ photo }) => {
  return (
    <div className="gallery-item">
      <img src={photo.src} alt="portfolio" />
    </div>
  );
};

export default GalleryItem;
