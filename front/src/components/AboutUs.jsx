import React, { useEffect, useState } from "react";
import "./styles/AboutUs.css";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";



const AboutUs = () => {
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
    <div className="about-container">
      <section className="hero-section1">
        <h1 className="hero-title1">{t('who')}</h1>
        <p className="hero-subtitle1">
        {t('who1')}
        </p>
      </section>
      <div className="abb-main">
      <motion.div
        className="about-section scroll-animation"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{t("aboutGen")}</h2>
        <p className="abb"><i>{t('abb0')}</i> {t('abb1')}</p>

      </motion.div>

      </div>
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>10+</h3>
            <p>{t('who4')}</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>{t('who5')}</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>{t('who6')}</p>
          </div>
        </div>
      </section>
      <div className="abb01">
      <motion.div
        className="about-section scroll-animation"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{t("aboutCAT")}</h2>

      </motion.div>
      <div className="stats">
        <motion.div
          className="stat scroll-animation"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h4>{t("aboutCAT1")}</h4>
          <p>{t("aboutCAT1_1")}</p>
        </motion.div>



        <motion.div
          className="stat scroll-animation"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
        >
          <h4>{t("aboutCAT2")}</h4>
          <p>{t("aboutCAT2_2")}</p>
        </motion.div>

        <motion.div
          className="stat scroll-animation"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
        <h4>{t("aboutCAT3")}</h4>
          <p>{t("aboutCAT3_3")}</p>
        </motion.div>
      </div>
      </div>
      <section className="values-section">
        <div className="content">
          <h2 className="section-title">{t('who2')}</h2>
          <p className="section-text">
          {t('who3')}
          </p>
        </div>
        <div className="image-background" />
      </section>

<div className="abb-main1">
      <motion.div
        className="about-section scroll-animation"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{t("aboutEND")}</h2>
        <p className="abb">{t('abbEND')}</p>

      </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;


