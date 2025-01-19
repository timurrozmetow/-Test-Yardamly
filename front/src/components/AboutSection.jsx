import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles/AboutSection.css";
import { useTranslation } from "react-i18next";

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    const duration = 3500; 
    const increment = end / (duration / 16); 

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(Math.floor(start));
    }, 16); 

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
};

const AboutSection = () => {
  const { t } = useTranslation();
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          controls.start("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    });

    const elements = document.querySelectorAll(".scroll-animation");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [controls]);

  return (
    <div className="container">
      <motion.div
        className="about-section scroll-animation"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{t("aboutGen")}</h2>
        <p className="w60">{t("about1")}</p>
      </motion.div>

      <div className="stats">
        <motion.div
          className="stat scroll-animation"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h3>
            <Counter value="4561" />
          </h3>
          <p>{t("about2")}</p>
        </motion.div>



        <motion.div
          className="stat scroll-animation"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
        >
          <h3>
            <Counter value="2475" />
          </h3>
          <p>{t("about4")}</p>
        </motion.div>

        <motion.div
          className="stat scroll-animation"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h3>
            <Counter value="1252" />
          </h3>
          <p>{t("about3")}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
