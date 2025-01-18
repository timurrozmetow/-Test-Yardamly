import React from "react";
import "./styles/AboutUs.css";
import { useTranslation } from "react-i18next";


const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <section className="hero-section1">
        <h1 className="hero-title1">{t('who')}</h1>
        <p className="hero-subtitle1">
        {t('who1')}
        </p>
      </section>
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
      <section className="values-section">
        <div className="content">
          <h2 className="section-title">{t('who2')}</h2>
          <p className="section-text">
          {t('who3')}
          </p>
        </div>
        <div className="image-background" />
      </section>




    </div>
  );
};

export default AboutUs;
