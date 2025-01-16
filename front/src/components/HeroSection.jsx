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
      }, 500); 
    }, 4000); 

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>

      {/* Контент */}
      <div className="hero-content">
        <h1 className={`changing-text ${fadeOut ? "fade-out" : "fade-in"}`}>
          {words[currentWord]} </h1>
        
        <a className="about-btn" href="/">Biz Barada</a>
      </div>
    </div>
  );
};

export default HeroSection;
