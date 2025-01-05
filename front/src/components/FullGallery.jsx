import React from "react";
import "./styles/FullGallery.css";

const fullPhotos = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/1.png",
  "/images/2.png",
];

const FullGallery = () => {
  return (
    <div className="full-gallery-container">
      <h1 className="gallery-header">Photo Gallery</h1>
      <div className="full-photo-grid">
        {fullPhotos.map((photo, index) => (
          <div className="photo-full" key={index}>
            <img src={photo} alt={`Photo ${index + 1}`} className="full-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullGallery;
