import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import NewsDetail from "./components/NewsDetail";
import News from "./components/News";
import FullGallery from "./components/FullGallery";
import AdminPanel from "./AdminPanel";
import AboutUs from "./components/AboutUs";






function App() {
  return (
    <>
    
     <Navbar />

     <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<FullGallery />} />
        <Route path="/aboutus" element={<AboutUs />} />

      </Routes>
    </Router>
      <Footer />
    </>
  );
}

export default App;
