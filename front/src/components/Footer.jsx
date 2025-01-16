import React from "react";
import "./styles/Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-content">
<img className="logo-footer" src="./logo/q.webp" alt="" />
  

          <div className="footer-section">
            <ul className="footer-links">
              <li><a href="/">{t("home")}</a></li>
              <li><a href="/about">{t("about_us")}</a></li>
              <li><a href="/contact">{t("contact_us")}</a></li>
              <li><a href="/news">{t("news")}</a></li>
            </ul>
            <div className="footer-section1">
            <p>{t("company_address")}</p>
            <p><a href="tel:+9930517876285">(+993) 051 787 62 85</a></p>
            <p><a href="mailto:info@tripnest.com">{t("send_message")}</a></p>
          </div>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
