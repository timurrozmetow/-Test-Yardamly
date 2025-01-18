import React from 'react'
import './styles/Contact.css'
import ContactForm from './ContactForm'
import FAQ from './FAQ'
import { useTranslation } from "react-i18next";



export default function Contact() {
  const {t } = useTranslation();

  return (
  <>
        <section className="news12">
        <h1 className="hero-title1">{t('Contact_us')}</h1>
        <p className="hero-subtitle1">
        {t('Contact_us1')}
        </p>
      </section>

      <section className="values-section1">
        <div className="content">
          <h2 className="section-title"> {t('Contact_us2')}</h2>
          <p className="section-text">
          {t('Contact_us3')}

          </p>
        </div>
        <div className="image-background" />
      </section>
  <ContactForm />
  <FAQ />
  </>
  )
}
