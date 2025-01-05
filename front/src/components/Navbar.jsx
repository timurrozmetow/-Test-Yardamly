import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">{t("HOME")}</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="/aboutus">{t("ABOUT_US")}</a></li>
        <li><a href="#tazelikler">{t("NEWS")}</a></li>
        <li><a href="#habarlar">{t("CONTACT")}</a></li>
      </ul>
      <div className="language-switcher">
        <button onClick={() => changeLanguage("tm")}>TM</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
        <button onClick={() => changeLanguage("tr")}>TR</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
      </div>
    </nav>
  );
};

export default Navbar;
