import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./styles/NewsDetail.css";
import "./styles/HeroSection.css";
import HeroSection from "./HeroSection";

const NewsDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/news/${id}`);
        setNews(response.data);
      } catch (err) {
        console.error("Ошибка при загрузке новости:", err);
        setError(t("ERROR_LOADING_NEWS"));
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id, t]);

  if (loading) {
    return <div className="loading">{t("LOADING_NEWS")}</div>;
  }

  if (error || !news) {
    return <div className="error">{error || t("ERROR_LOADING_NEWS")}</div>;
  }

  return (
    <>
      {/* <HeroSection /> */}
      <div className="news-detail-container">
        <div className="image-overlay">
          <img
            src={`http://localhost:5000${news.image_url}`}
            alt={news[`title_${currentLanguage}`]}
            className="news-detail-image"
          />
          <div className="text-overlay">
            <h1 className="news-detail-title">{news[`title_${currentLanguage}`]}</h1>
            <p className="news-detail-date">
              {t("PUBLISHED_ON")}: {new Date(news.created_at).toLocaleDateString()}
            </p>
            <div className="news-detail-content">
          <p>{news[`content_${currentLanguage}`]}</p>
          <Link to="/" className="back-btn">
            {t("BACK_TO_NEWS")}
          </Link>
        </div>
          </div>
          
        </div>

      </div>
    </>
  );
};

export default NewsDetail;
