import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import NewsDetail from "./components/NewsDetail";
import AdminPanel from "./AdminPanel";
import AboutUs from "./components/AboutUs";
import "./components/styles/GlobalBackground.css"; // Новый стиль для глобального фона
import NewsPage from "./components/NewsPage";
import Contact from "./components/Contact";
import { useTranslation } from "react-i18next";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Считываем язык из параметра URL (например, ?lng=en)
    const queryParams = new URLSearchParams(window.location.search);
    const lng = queryParams.get("lng") || "tm"; // По умолчанию "en"
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <div className="global-background">
      <Router>
        <ScrollToTop /> {/* Обеспечивает прокрутку вверх при смене маршрута */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
