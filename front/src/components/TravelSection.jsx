import React, { useState, useEffect } from "react";
import "./styles/TravelSection.css";

const images = [
  "1/2.jpg",
  "1/3.jpg",
  "1/4.jpg",
];

const TravelSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Меняется каждые 4 секунды
    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, []);

  return (
    <div
      className="travel-section"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="travel-overlay"></div>
      <div className="travel-text">
        <h1>
          TRAVEL BEYOND LIMITS <br />
          EXPLORE BEYOND BORDERS
        </h1>
        <p>
          Discover unique destinations, create cherished memories, and let every
          journey take you beyond the ordinary. Your next great adventure awaits.
        </p>
        <div className="travel-buttons">
          <button className="btn-primary">Book Now</button>
          <button className="btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default TravelSection;
