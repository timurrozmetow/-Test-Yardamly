import React from "react";
import "./styles/WhoWeAre.css";
import StatItem from "./StatItem";

const WhoWeAre = () => {
  return (
    <div className="who-we-are-section">
      <div className="who-we-are-content">
        <h2>Who are we?</h2>
        <p>
          This agency was created by people who were united by a common passion
          - vivid emotions and impressions.
        </p>
        <p>
          We are friends who are always ready to join the company on an
          adventurous adventure. Your safety and unforgettable emotions is the
          main task that we face.
        </p>
      </div>
      <div className="who-we-are-stats">
        <StatItem value={2007} label="year of foundation" />
        <StatItem value={3300} label="satisfied customers" />
        <StatItem value={500} label="author tours" />
        <StatItem value={0} label="accidents" />
      </div>
    </div>
  );
};

export default WhoWeAre;
