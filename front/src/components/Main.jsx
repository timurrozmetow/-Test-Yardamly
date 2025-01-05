import React from 'react'
import HeroSection from './HeroSection'
import TravelSection from './TravelSection'
import WhoWeAre from './WhoWeAre'
import Slider from './Slider'
import TravelDestinations from './TravelDestinations'
import News from './News'
import PhotoGallery from './PhotoGallery'
import ContactForm from './ContactForm'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FAQ from './FAQ'


export default function Main() {
  return (
    <>
         <ToastContainer position="top-right" autoClose={5000} />

          <HeroSection />
          <Slider />
          <WhoWeAre />
      {/* <TravelSection /> */}
      {/* <TravelDestinations /> */}
      <News />
      <PhotoGallery />
      <ContactForm />
      <FAQ />
    </>
  )
}
