import React from "react";
import "./styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="hero-section1">
        <h1 className="hero-title1">Who We Are</h1>
        <p className="hero-subtitle1">
          Discover our journey, our passion, and what makes us unique.
        </p>
      </section>

      <section className="values-section">
        <div className="content">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            At the heart of everything we do is a commitment to excellence,
            innovation, and making a positive impact on the world. Our mission
            is to empower communities and transform lives through our work.
          </p>
        </div>
        <div className="image-background" />
      </section>



      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years in Business</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Global Projects</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Join Our Journey</h2>
        <p>
          Ready to collaborate or learn more about us? Reach out to us today.
        </p>
        <button className="cta-button">Contact Us</button>
      </section>
    </div>
  );
};

export default AboutUs;
