import React, { useState } from 'react';
import { businessInfo } from './content/businessInfo';
import Navbar from './Navbar';
import Footer from './Footer';
import './Styles/contact_form_styles.scss';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Pest Control',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-page">
        <Navbar />
        <div className="success-message">
          <h2>Thank You!</h2>
          <p>Your message has been sent successfully. We'll get back to you soon!</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="contact-page">
      <Navbar />
      
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Professional Pest Control Services for Property Managers & Landlords</p>
        </div>
      </section>

      <section className="contact-info">
        <div className="info-container">
          <div className="info-card">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3>Email Us</h3>
            <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
            <p>We'll respond within 24 hours</p>
          </div>

          <div className="info-card">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443c-.354-.424-.851-.533-1.299-.662-.229-.066-.466-.133-.677-.236l-.021-.012c-.213-.103-.45-.219-.673-.319-.679-.304-1.445-.648-2.334-.958-.877-.307-1.664-.639-2.373-.974-.708-.332-1.261-.66-1.672-.942-.204-.139-.371-.264-.485-.363-.114-.1-.157-.143-.157-.143l-.167-.147-.062-.053-.042-.038L6.419 8.5l-.025-.021c-.167-.134-.399-.099-.518.086-.119.186-.066.434.12.567 0 0 .037.03.105.089.072.061.182.149.327.255.291.213.724.474 1.266.741.543.269 1.189.542 1.903.784.891.311 1.724.681 2.43.997.213.095.418.197.613.291.189.091.368.178.507.294.115.09.172.167.18.178l.016.018c.006.007.01.013.01.013.087.144.289.186.433.099.144-.087.189-.276.102-.42z"/>
              </svg>
            </div>
            <h3>Call Us</h3>
            <a href={`tel:${businessInfo.phone}`}>{businessInfo.phone}</a>
            <p>{businessInfo.hours}</p>
          </div>

          <div className="info-card">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <h3>Visit Us</h3>
            <p>{businessInfo.address}</p>
            <p>Serving {businessInfo.serviceAreas.join(' & ')}</p>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <div className="form-container">
          <h2>Send Us a Message</h2>
          <p>Let us know how we can help with your pest control needs</p>
          
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="General Pest Control">General Pest Control</option>
                  <option value="Termite Control">Termite Control</option>
                  <option value="Rodent Control">Rodent Control</option>
                  <option value="Bed Bug Control">Bed Bug Control</option>
                  <option value="Mosquito Control">Mosquito Control</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your pest control needs..."
                rows="4"
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
} 