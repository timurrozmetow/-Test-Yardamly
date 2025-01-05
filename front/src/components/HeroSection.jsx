import React, { useState, useEffect } from "react";
import "./styles/HeroSection.css";

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const words = ["Biz bilen dünýäni gez", "Täze dünýäleri açyň", "Syýahatyň başla"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setFadeOut(false);
      }, 500); // Время на исчезновение
    }, 4000); // Интервал смены слов

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="hero-section">
      {/* Наложение для затемнения фона */}
      <div className="hero-overlay"></div>

      {/* Контент */}
      <div className="hero-content">
        <h1>Yardamly Syyahat</h1>
        <p className={`changing-text ${fadeOut ? "fade-out" : "fade-in"}`}>
          {words[currentWord]}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
