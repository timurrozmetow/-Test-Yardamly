import React from "react";
import "./styles/Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-content">
        <div className="navbar-logo1">
          <a href="/">Yardamly Syyahat</a>
          <div className="social">
  
            <p>{t('follow')}</p>
            <div className="icons-follow">
              <a target="_blank" href="https://www.instagram.com/yardamly_syyahat/">
              <img src="./icons/insta.svg" alt="" />
              </a>
              <a target="_blank" href=" https://wa.me/99362565156">
              <img src="./icons/whats.svg" alt="" />
              </a>
              <a target="_blank" href="https://www.tiktok.com/@asgabat.konkurs5?is_from_webapp=1&sender_device=pc">
              <img src="./icons/tiktok.svg" alt="" />
              </a>
              </div>
              </div>
        </div>  

          <div className="footer-section">


            <ul className="footer-links">
              <p className="bootem">{t("Useful")}</p>
              <li><a href="/">{t("home")}</a></li>
              <li><a href="/about">{t("about_us")}</a></li>
              <li><a href="/contact">{t("contact_us")}</a></li>
              <li><a href="/news">{t("newslar")}</a></li>
            </ul>
            <div className="footer-section1">
            <div className="ul-ha">
            <p>
              <img src="./icons/a.webp" alt="addres" />
              {t("company_address")}</p>
</div>
              <div className="ul-ha">
            <p>
            <img src="./icons/t.webp" alt="telephone" />
              <a  href="tel:+99361611191">+99361 611 191</a></p>
              </div>
              <div className="ul-ha">
            <p>
            <img src="./icons/t.webp" alt="telephone" />
              <a href="tel:+99364383843">+99364 383 843</a></p>
</div>
<div className="ul-ha">
            <p>
            <img src="./icons/t.webp" alt="telephone" />
              <a href="tel:+99312754405">+99312 75 44 05</a></p>
</div>
<div className="ul-ha">

            <p>
            <img src="./icons/t.webp" alt="telephone" />
              <a href="tel:+905368597903">+90 536 859 79 03</a></p>
</div>
<div className="ul-ha">

              <p>
              <img src="./icons/m.webp" alt="mail" />
              <a target="_blank" href="mailto:syyahatyardamly@gmail.com">syyahatyardamly@gmail.com</a>
              </p>
</div>
          </div>
          </div>


        </div>
        <div className="back-footer">
        <p className="end-of-end">&copy; {t("res")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
