import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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






function App() {
  return (
    <>
        <div className="global-background">

     <Navbar />

     <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
      <Footer />
      </div>
    </>
  );
}

export default App;
