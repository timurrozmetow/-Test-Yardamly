import React from 'react'
import './styles/Contact.css'
import ContactForm from './ContactForm'
import FAQ from './FAQ'

export default function Contact() {
  return (
  <>
        <section className="news12">
        <h1 className="hero-title1">Who We Are</h1>
        <p className="hero-subtitle1">
          Discover our journey, our passion, and what makes us unique.
        </p>
      </section>

      <section className="values-section1">
        <div className="content">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            At the heart of everything we do is a commitment to excellence,
            innovation, and making a positive impact on the world. Our mission
            is to empower communities and transform lives through our work.
          </p>
        </div>
        <div className="image-background" />
      </section>
  {/* <div className="news12">
  </div> */}
  <ContactForm />
  <FAQ />
  </>
  )
}
