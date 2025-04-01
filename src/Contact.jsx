import React, { useState } from 'react';
import { businessInfo } from './content/businessInfo';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Pest Control',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    window.location.href = `mailto:brad@pestfreeproperties.com?subject=New Contact Form Submission&body=Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0AMessage: ${formData.message}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <div className="contact-page-wrapper">
        <div className="contact-hero">
          <div className="contact-hero-content">
            <h1>Get in Touch</h1>
            <p>Professional Pest Control for Property Managers & Landlords</p>
          </div>
        </div>

        <div className="contact-info-cards">
          <div className="info-card">
            <div className="info-card-icon phone-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.564-.772c.54-.266.969-.837.969-1.441v-3.167c0-.595-.42-1.156-.947-1.443l-3.482-1.878c-.526-.287-1.389-.285-1.915 0l-1.99 1.075c-1.012.545-2.07-.122-2.366-1.176-.508-1.793-1.339-4.321-1.339-6.612 0-2.291.831-4.819 1.339-6.612.296-1.054 1.354-1.721 2.366-1.176l1.99 1.075c.526.285 1.389.287 1.915 0l3.482-1.878c.527-.287.947-.848.947-1.443V1.73c0-.604-.429-1.175-.969-1.441l-1.564-.772c-.413-.19-.857-.284-1.317-.284-6.512 0-15.103 17.924-9.31 20.944zm12.986 15.421l-3.482-1.878c-.526-.287-1.389-.285-1.915 0l-1.99 1.075c-1.012.545-2.07-.122-2.366-1.176-.508-1.793-1.339-4.321-1.339-6.612 0-2.291.831-4.819 1.339-6.612.296-1.054 1.354-1.721 2.366-1.176l1.99 1.075c.526.285 1.389.287 1.915 0l3.482-1.878c.527-.287.947-.848.947-1.443V1.73c0-.604-.429-1.175-.969-1.441l-1.564-.772c-.413-.19-.857-.284-1.317-.284-6.512 0-15.103 17.924-9.31 20.944l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.564-.772c.54-.266.969-.837.969-1.441v-3.167c0-.595-.42-1.156-.947-1.443z"/>
              </svg>
            </div>
            <h3>Call Us</h3>
            <a href={`tel:${businessInfo.contact.phone}`} className="info-value">{businessInfo.contact.phone}</a>
            <p>Available Mon-Fri: 8AM-6PM</p>
          </div>

          <div className="info-card">
            <div className="info-card-icon email-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3>Email Us</h3>
            <a href={`mailto:${businessInfo.contact.email}`} className="info-value">{businessInfo.contact.email}</a>
            <p>We'll respond within 24 hours</p>
          </div>

          <div className="info-card">
            <div className="info-card-icon location-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <h3>Service Areas</h3>
            <p className="info-value">Duval & Nassau Counties</p>
            <p>Jacksonville & Surrounding Areas</p>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-container">
            <h2>Send Us a Message</h2>
            <p>Let us know how we can help with your pest control needs</p>
            
            <form onSubmit={handleSubmit}>
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
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="General Pest Control">General Pest Control</option>
                    <option value="Bed Bug Treatment">Bed Bug Treatment</option>
                    <option value="Termite Treatment">Termite Treatment</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="submit-button">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
