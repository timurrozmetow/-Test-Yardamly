import React from "react";
import { Link } from "react-router-dom";
import "./styles/NewsList.css";

const newsData = [
  {
    id: 1,
    title: "The Beauty of Italy",
    description: "Discover the stunning landscapes and rich history of Italy.",
    content: "Italy offers a blend of stunning natural landscapes, historic sites, and world-famous cuisine. Explore the Colosseum, Venice canals, and the beauty of Tuscany.",
    image: "/images/1.png",
  },
  {
    id: 2,
    title: "Explore Japan",
    description: "Dive into the culture and technology of Japan's top cities.",
    content: "Japan combines ancient traditions with cutting-edge technology. Visit Kyoto's temples, Tokyo's bustling streets, and Mount Fuji's serene beauty.",
    image: "/images/2.png",
  },
  {
    id: 3,
    title: "Visit Iceland",
    description: "Experience breathtaking views of glaciers and geysers in Iceland.",
    content: "Iceland is a land of fire and ice, home to glaciers, geysers, and waterfalls. Don't miss the Northern Lights and Blue Lagoon.",
    image: "/images/3.png",
  },
];

const NewsList = () => {
  return (
    <div className="news-container">
      <h1 className="news-header">All News</h1>
      <div className="news-grid">
        {newsData.map((news) => (
          <div className="news-card" key={news.id}>
            <img src={news.image} alt={news.title} className="news-image" />
            <h2 className="news-title">{news.title}</h2>
            <p className="news-description">{news.description}</p>
            <Link to={`/news/${news.id}`} className="read-more-btn">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
    