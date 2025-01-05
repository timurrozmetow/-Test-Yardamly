import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./styles/News.css";
import "./styles/HeroSection.css";

const News = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language; // Получение текущего языка из i18n
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllNews, setShowAllNews] = useState(false); // Состояние для отображения всех новостей

  // Функция для загрузки новостей с сервера
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
        setError("Не удалось загрузить новости");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="loading">{t("LOADING_NEWS")}</div>;
  }

  if (error) {
    return <div className="error">{t("ERROR_LOADING_NEWS")}</div>;
  }

  return (
    <div className="news-container">
      <h1 className="news-header">{t("LATEST_NEWS")}</h1>

      {/* Слайдер новостей */}
      {!showAllNews && (
        <>
          <Swiper
          
            navigation={true}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 1,
              },
            }}
            className="news-swiper"
          >
            {newsData.slice(0, 6).map((news) => (
              <SwiperSlide key={news.id}>
                <div className="news-card">
                  <img
                    src={`http://localhost:5000${news.image_url}`}
                    alt={news[`title_${currentLanguage}`]}
                    className="news-image"
                  />
                  <div className="tekst">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кнопка "Еще новости" с иконкой стрелок */}
          <button
            className="show-more-btn"
            onClick={() => setShowAllNews(true)}
          >
            <div className="arrow-up"></div>
            {t("SHOW_MORE_NEWS")}
          </button>
        </>
      )}

      {/* Полный список новостей */}
      {showAllNews && (
        <div className="all-news-list">
          {newsData.map((news) => (
            <div key={news.id} className="news-list-item">
              <img
                src={`http://localhost:5000${news.image_url}`}
                alt={news[`title_${currentLanguage}`]}
                className="news-list-image"
              />
              <div className="news-list-content">
                <h2>{news[`title_${currentLanguage}`]}</h2>
                <p>{news[`description_${currentLanguage}`]}</p>
                <p className="news-list-date">
                  {t("PUBLISHED_ON")}:{" "}
                  {new Date(news.created_at).toLocaleDateString()}
                </p>
                <Link to={`/news/${news.id}`} className="read-more-btn">
                  {t("READ_MORE")}
                </Link>
              </div>
            </div>
          ))}
          <button
            className="show-less-btn"
            onClick={() => setShowAllNews(false)}
          >
            {t("SHOW_LESS_NEWS")}
          </button>
        </div>
      )}
    </div>
  );
};

export default News;
