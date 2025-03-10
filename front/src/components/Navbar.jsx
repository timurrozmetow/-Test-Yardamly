import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./styles/Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false); // Закрыть языковое меню после выбора языка
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Обработчик прокрутки
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Логотип */}
        <div className="navbar-logo">
          <a href="/">Yardamly Syyahat</a>
        </div>

<div className="merge">
        {/* Меню */}
        <div className={`navbar-menu-container ${isMenuOpen ? "open" : ""}`}>
          <ul className="navbar-menu">
            <li>
              <a href="/aboutus">{t("ABOUT_US")}</a>
            </li>
            <li>
              <a href="/news">{t("NEWS")}</a>
            </li>
            <li>
              <a href="/contact">{t("CONTACT")}</a>
            </li>
          </ul>
          <div className="lang-mob">
          <li onClick={() => changeLanguage("en")}>
                <img src="/icons/en.svg" alt="EN" className="language-icon" />
              </li>
              <li onClick={() => changeLanguage("ru")}>
                <img src="/icons/ru.svg" alt="RU" className="language-icon" />
              </li>
              <li onClick={() => changeLanguage("tm")}>
                <img src="/icons/tm.svg" alt="TM" className="language-icon" />
              </li>
              <li onClick={() => changeLanguage("tr")}>
                <img src="/icons/tr.svg" alt="TR" className="language-icon" />
              </li>
          </div>
        </div>

        {/* Языковой переключатель */}
        <div
          className="language-switcher"
          onMouseEnter={() => setIsLanguageMenuOpen(true)}
          onMouseLeave={() => setIsLanguageMenuOpen(false)}
        >
          <button className="language-btn">

<svg fill="#fff" height="24" width="24"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 490 490" xml:space="preserve">
<g>
	<path d="M490,245C490,109.915,380.089,0,245,0C109.911,0,0,109.915,0,245c0,135.085,109.911,245,245,245
		C380.089,490,490,380.085,490,245z M263.846,380.696c11.096,0.548,21.781,1.361,31.996,2.43
		c-11.076,17.053-22.316,31.807-31.996,43.387V380.696z M263.846,341.985v-81.591h80.86c-4.208,31.012-14.804,60.245-27.914,86.267
		C300.44,344.49,282.714,342.841,263.846,341.985z M263.846,222.039v-80.36c19.587-0.4,39.945-1.888,60.783-4.753
		c11.631,24.771,20.063,53.417,21.66,85.113H263.846z M263.846,103.073v-51.29c11.357,11.26,26.119,27.703,40.158,48.699
		C290.369,101.855,276.898,102.812,263.846,103.073z M226.154,102.4c-16.318-0.805-31.757-2.205-46.078-4.046
		c16.965-24.888,34.774-43.291,46.078-53.774V102.4z M226.154,141.225v80.815h-89.986c1.658-32.662,10.587-62.206,22.834-87.553
		C179.059,137.612,201.686,140.118,226.154,141.225z M226.154,260.395v81.003c-19.581,0.4-39.939,1.851-60.768,4.712
		c-12.983-25.886-23.46-54.922-27.638-85.716H226.154z M226.154,380.023v55.272c-11.131-12.632-25.648-30.714-39.886-52.708
		C199.809,381.231,213.19,380.283,226.154,380.023z M337.192,388.867c18.508,3.238,34.063,6.762,45.881,9.837
		c-23.907,21.36-52.737,37.222-84.641,45.727C310.604,429.393,324.276,410.714,337.192,388.867z M355.983,353.055
		c12.927-28.029,23.045-59.309,26.832-92.66h68.71c-2.959,39.704-17.194,76.236-39.557,106.571
		C401.518,363.698,382.036,358.199,355.983,353.055z M384.002,222.039c-1.427-34.133-9.499-64.953-20.987-91.989
		c14.881-3.301,29.866-7.43,44.872-12.453c23.245,29.466,38.694,65.279,43.062,104.441H384.002z M345.135,94.558
		c-9.972-16.901-20.681-31.684-30.991-44.13c23.562,8.348,45.226,20.672,64.008,36.41C367.115,89.942,356.102,92.423,345.135,94.558
		z M139.044,91.692c-9.782-1.944-18.654-3.915-26.181-5.776c15.623-12.917,33.172-23.581,52.147-31.524
		C156.319,65.205,147.451,77.777,139.044,91.692z M120.62,127.3c-12.104,27.687-20.691,59.444-22.168,94.739H39.051
		c4.376-39.236,19.87-75.112,43.187-104.609C91.078,120.084,104.137,123.662,120.62,127.3z M99.638,260.395
		c3.796,33.422,13.951,64.76,26.918,92.833c-16.081,3.579-32.278,8.175-48.492,13.78c-22.381-30.344-36.629-66.891-39.589-106.614
		H99.638z M145.061,388.51c12.212,20.697,25.116,38.605,36.803,53.259c-28.391-9.075-54.009-24.2-75.627-43.689
		C119.215,394.221,132.17,391.014,145.061,388.51z"/>
</g>
</svg>
          </button>
          {isLanguageMenuOpen && (
            <ul className="language-menu">
              <li onClick={() => changeLanguage("en")}>
                <img src="/icons/en.svg" alt="EN" className="language-icon" />
              </li>
              <li onClick={() => changeLanguage("ru")}>
                <img src="/icons/ru.svg" alt="RU" className="language-icon" />
              </li>
              <li onClick={() => changeLanguage("tm")}>
                <img src="/icons/tm.svg" alt="TM" className="language-icon" />
              </li>
              <li onClick={() => changeLanguage("tr")}>
                <img src="/icons/tr.svg" alt="TR" className="language-icon" />
              </li>
            </ul>
          )}
        </div>
        </div>
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
