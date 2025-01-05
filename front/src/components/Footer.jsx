import React from "react";
import "./styles/Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-content">
          {/* Left Section */}
          <div className="footer-section">
            <h2 className="footer-logo">TripNest</h2>
            <p className="footer-description">
              {t("footer_description")}
            </p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} TripNest. {t("rights_reserved")}
            </p>
          </div>

          {/* Middle Section */}
          <div className="footer-section">
            <h3>{t("our_page")}</h3>
            <ul className="footer-links">
              <li><a href="/">{t("home")}</a></li>
              <li><a href="/categories">{t("categories")}</a></li>
              <li><a href="/about">{t("about_us")}</a></li>
              <li><a href="/blogs">{t("blogs")}</a></li>
              <li><a href="/contact">{t("contact_us")}</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="footer-section">
            <h3>{t("contact_us")}</h3>
            <p>{t("company_address")}</p>
            <p><a href="tel:+9930517876285">(+993) 051 787 62 85</a></p>
            <p><a href="mailto:info@tripnest.com">{t("send_message")}</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
