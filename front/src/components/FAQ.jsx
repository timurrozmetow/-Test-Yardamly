import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/FAQ.css"; // Добавьте стили для улучшения интерфейса
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/faqs");
        setFaqs(response.data);
      } catch (err) {
        console.error("Ошибка загрузки FAQ:", err);
        setError("Не удалось загрузить FAQ. Попробуйте позже.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return <div className="faq-loading">{t("LOADING")}</div>;
  }

  if (error) {
    return <div className="faq-error">{t("FAQ_LOAD_ERROR")}</div>;
  }

  if (!faqs.length) {
    return <div className="faq-empty">{t("NO_FAQS_AVAILABLE")}</div>;
  }

  return (
    <div className="faq-container">
      <h2 className="faq-header">{t("FAQ_TITLE")}</h2>
      {faqs.map((faq, index) => (
        <div key={faq.id} className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(index)}>
            <span
              className={`faq-icon ${
                openIndex === index ? "rotated" : ""
              }`}
            >
              ▼
            </span>
            <h3>{faq[`question_${currentLanguage}`]}</h3>
          </div>
          <div
            className={`faq-answer ${
              openIndex === index ? "open" : ""
            }`}
          >
            <p>{faq[`answer_${currentLanguage}`]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
