import React, { useState, useEffect } from "react";
import "./styles/HeroSection.css";
import { useTranslation } from "react-i18next";


const HeroSection = () => {
  const { t } = useTranslation();

  const [currentWord, setCurrentWord] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const words = [t("t1"), t("t2"), t("t3")];


  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setFadeOut(false);
      }, 500); 
    }, 2800); 

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>

      {/* Контент */}
      <div className="hero-content">
        <h1 className={`changing-text ${fadeOut ? "fade-out" : "fade-in"}`}>
          {words[currentWord]} </h1>
        
        <a className="about-btn" href="/aboutus">{t('about')}</a>
      </div>
    </div>
  );
};

export default HeroSection;
