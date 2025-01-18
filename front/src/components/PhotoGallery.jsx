import React, { useState, useEffect } from "react";
import "./styles/PhotoGallery.css";
import axios from "axios";
import { useTranslation } from "react-i18next";


const PhotoGallery = () => {
  const { t } = useTranslation();
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
      <h1 className="galery-header">{t('Photo')}</h1>
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
