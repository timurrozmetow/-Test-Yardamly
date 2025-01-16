import React from 'react'
import HeroSection from './HeroSection'
import Slider from './Slider'
import News from './News'
import PhotoGallery from './PhotoGallery'
import ContactForm from './ContactForm'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FAQ from './FAQ'
import AboutSection from './AboutSection'


export default function Main() {
  return (
    <>
         <ToastContainer position="top-right" autoClose={5000} />

          <HeroSection />
          <AboutSection />
          <Slider />
          
      <News />
      <PhotoGallery />
      <ContactForm />
      <FAQ />
    </>
  )
}
