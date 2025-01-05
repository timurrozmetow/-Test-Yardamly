import React, { useState, useEffect } from "react";
import "./styles/PhotoGallery.css";
import axios from "axios";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/gallery");
        setPhotos(response.data);
      } catch (err) {
        console.error("Ошибка загрузки фотографий:", err);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <div className="seamless-gallery-container">
      <div className="seamless-gallery">
        {photos.map((photo, index) => (
          <div className="gallery-item" key={`gallery-item-${index}`}>
            <img
              src={`http://localhost:5000${photo.image_url}`}
              alt={photo.title_en}
              className="gallery-img"
            />
            <div className="gallery-text-overlay">
              <h3>{photo.title_en}</h3>
            </div>
          </div>
        ))}
        {photos.map((photo, index) => (
          <div className="gallery-item" key={`gallery-item-duplicate-${index}`}>
            <img
              src={`http://localhost:5000${photo.image_url}`}
              alt={photo.title_en}
              className="gallery-img"
            />
            <div className="gallery-text-overlay">
              <h3>{photo.title_en}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
