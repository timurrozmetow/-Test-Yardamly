import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/ContactForm.css";

const GoogleMap = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.837196533536!2d58.404174575263404!3d37.96929340093213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7001ffb35ad5b5%3A0xb2c255bf7c8425f!2zw51hcmRhbWx5IFN5w71haGF0!5e1!3m2!1sru!2s!4v1736828680840!5m2!1sru!2s"
    style={{ width: "100%", height: "100%", border: "0" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data.message || "Something went wrong."}`);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-map">
          <GoogleMap />
        </div>
        <div className="contact-form-container">
          <h1 className="contact-header">Have questions?</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
          <ToastContainer position="top-right" autoClose={5000} />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
