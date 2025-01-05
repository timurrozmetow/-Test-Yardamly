import React from "react";
import "./styles/TravelDestinations.css";

const destinations = [
  { country: "Turkiye", image: "/images/Turkiye.jpg" },
  { country: "OAE", image: "/images/Dubai.jpg" },
  { country: "Russia", image: "/images/Moscow.jpg" },
  { country: "Uzbekistan", image: "/images/Tashkent.jpg" },
];

const TravelDestinations = () => {
  return (
    <section className="travel-section">
      <div className="header">
        <h1>Travel Destinations</h1>
        <h2>Available Worldwide</h2>
        <p>
          Explore top global destinations, from Caribbean beaches to European mountains and vibrant Asian cities. Our curated list offers allure and fascination for every traveler.
        </p>
      </div>
      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <div className="destination-card" key={index}>
            <div
              className="destination-image"
              style={{ backgroundImage: `url(${destination.image})` }}
            ></div>
            <div className="destination-info">
              <h3>{destination.country}</h3>
              <p>{destination.places}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelDestinations;
