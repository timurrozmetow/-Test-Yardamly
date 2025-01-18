import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./styles/NewsPage.css";


const NewsPage = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news");
        const sortedNews = response.data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setNewsData(sortedNews);
      } catch (err) {
        console.error("Ошибка при загрузке новостей:", err);
        setError(t("ERROR_LOADING_NEWS"));
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [t]);

  if (loading) {
    return <div className="loading">{t("LOADING_NEWS")}</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="news-page-container">
      <section className="news1212">
        <h1 className="hero-title1">{t("ournews")}</h1>
        <p className="hero-subtitle1">
        {t("ournews1")}
        </p>
      </section>

      <h1 className="news-page-header">{t("ALL_NEWS")}</h1>
      <div className="news-grid">
        {newsData.map((news) => (
          <div key={news.id} className="news-card">
            <img
              src={`http://localhost:5000${news.image_url}`}
              alt={news[`title_${currentLanguage}`]}
              className="news-image"
            />
            <div className="news-content">
              <h2 className="news-title">{news[`title_${currentLanguage}`]}</h2>
              <p className="news-description">
                {news[`description_${currentLanguage}`]}
              </p>
              <p className="news-date">
                {t("PUBLISHED_ON")}:{" "}
                {new Date(news.created_at).toLocaleDateString()}
              </p>
              <Link to={`/news/${news.id}`} className="read-more-btn">
                {t("READ_MORE")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
