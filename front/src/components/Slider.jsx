import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/Slider.css";

const slides = [
  {
    id: 1,
    title: "Istanbul",
    subtitle: "Turkiye",
    description: "Traveling in Turkey usually starts in Istanbul",
    background: "/images/Turkiye.webp",
    cards: [
      { title: "Dubai", subtitle: "United Arab Emirates", image: "/images/Dubai.webp" },
      { title: "Moscow", subtitle: "Russia", image: "/images/Moscow.webp" },
      { title: "Tashkent", subtitle: "Uzbekistan", image: "/images/Tashkent.webp" },
    ],
  },
  {
    id: 2,
    title: "Dubai",
    subtitle: "United Arab Emirates",
    description: "Traveling in UAE usually starts in Dubai",
    background: "/images/Dubai.webp",
    cards: [
      { title: "Moscow", subtitle: "Russia", image: "/images/Moscow.webp" },
      { title: "Tashkent", subtitle: "Uzbekistan", image: "/images/Tashkent.webp" },
      { title: "Istanbul", subtitle: "Turkiye", image: "/images/Turkiye.webp" },
    ],
  },
  {
    id: 3,
    title: "Moscow",
    subtitle: "Russia",
    description: "Traveling in Russia usually starts in Moscow",
    background: "/images/Moscow.webp",
    cards: [
      { title: "Tashkent", subtitle: "Uzbekistan", image: "/images/Tashkent.webp" },
      { title: "Istanbul", subtitle: "Turkiye", image: "/images/Turkiye.webp" },
      { title: "Dubai", subtitle: "United Arab Emirates", image: "/images/Dubai.webp" },
    ],
  },
  {
    id: 4,
    title: "Tashkent",
    subtitle: "Uzbekistan",
    description: "Traveling in Uzbekistan usually starts in Tashkent",
    background: "/images/Tashkent.webp",
    cards: [
      { title: "Istanbul", subtitle: "Turkiye", image: "/images/Turkiye.webp" },
      { title: "Dubai", subtitle: "United Arab Emirates", image: "/images/Dubai.webp" },
      { title: "Moscow", subtitle: "Russia", image: "/images/Moscow.webp" },

    ],
  },

];

const Slider = () => {
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
  );
};

export default Slider;
