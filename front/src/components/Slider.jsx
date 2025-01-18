import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/Slider.css";
import { useTranslation } from "react-i18next";



const Slider = () => {
  const { t } = useTranslation();
  const slides = [
    {
      id: 1,
      title: t("Istanbul"),
      subtitle: t("Turkiye"),
      description: t("Turkiye1"), 
      background: "/images/Turkiye.webp",
      cards: [
        { title: t("Dubai"), subtitle: t("UnitedArabEmirates"), image: "/images/Dubai.webp" },
        { title: t("Moscow"), subtitle: t("Russia"), image: "/images/Moscow.webp" },
        { title: t("Tashkent"), subtitle: t("Uzbekistan"), image: "/images/Tashkent.webp" },
      ],
    },
    {
      id: 2,
      title: t("Dubai"),
      subtitle: t("UnitedArabEmirates"),
      description: t("UnitedArabEmirates1"),
      background: "/images/Dubai.webp",
      cards: [
        { title: t("Moscow"), subtitle: t("Russia"), image: "/images/Moscow.webp" },
        { title:  t("Tashkent"), subtitle: t("Uzbekistan"), image: "/images/Tashkent.webp" },
        { title: t("Istanbul"), subtitle: t("Turkiye"), image: "/images/Turkiye.webp" },
      ],
    },
    {
      id: 3,
      title: t("Moscow"),
      subtitle: t("Russia"),
      description: t("Russia1"),
    
      background: "/images/Moscow.webp",
      cards: [
        { title: t("Tashkent"), subtitle: t("Uzbekistan"), image: "/images/Tashkent.webp" },
        { title: t("Istanbul"), subtitle: t("Turkiye"), image: "/images/Turkiye.webp" },
        { title: t("Dubai"), subtitle: t("UnitedArabEmirates"), image: "/images/Dubai.webp" },
      ],
    },
    {
      id: 4,
      title: t("Tashkent"),
      subtitle: t("Uzbekistan"),
      description: t("Uzbekistan1"),
     
      background: "/images/Tashkent.webp",
      cards: [
        { title: t("Istanbul"), subtitle: t("Turkiye"), image: "/images/Turkiye.webp" },
        { title: t("Dubai"), subtitle: t("UnitedArabEmirates"), image: "/images/Dubai.webp" },
        { title: t("Moscow"), subtitle: t("Russia"), image: "/images/Moscow.webp" },
  
      ],
    },
  
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slide = slides[currentSlide];

  return (
    <div className="slider-container">
      <AnimatePresence>
        <motion.div
          key={slide.id}
          className="background"
          style={{ backgroundImage: `url(${slide.background})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      <div className="slider-text">
        <motion.h2
          key={slide.subtitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="subtitle"
        >
          {slide.subtitle}
        </motion.h2>
        <motion.h1
          key={slide.title}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.6 }}
          className="title1"
        >
          {slide.title}
        </motion.h1>
        <motion.p
          key={slide.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="description"
        >
          {slide.description}
        </motion.p>
        <div className="slider-controls">
        <button onClick={handlePrev} className="control-btn">
          ←
        </button>
        <span className="slide-number">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <button onClick={handleNext} className="control-btn">
          →
        </button>
      </div>
      </div>

      {/* Горизонтальные карточки */}
      <div className="slider-cards">
        <motion.div
          className="cards-container"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {slide.cards.map((card, index) => (
            <motion.div
              key={index}
              className="card"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="card-overlay">
                <h4>{card.title}</h4>
                <p>{card.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Контролы */}

    </div>
  );
};

export default Slider;
