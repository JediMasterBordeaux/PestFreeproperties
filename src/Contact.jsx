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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
            <p>We're here to help with all your pest control needs</p>
          </div>
        </div>

        <div className="contact-content">
          {submitted ? (
            <div className="success-message">
              <h2>Thank you for your message!</h2>
              <p>We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div className="form-group">
                <label htmlFor="name">Name:</label>
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
                <label htmlFor="email">Email:</label>
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
                <label htmlFor="phone">Phone:</label>
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
                <label htmlFor="service">Service:</label>
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
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          )}

          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              <strong>Phone:</strong> {businessInfo.phone}
            </p>
            <p>
              <strong>Email:</strong> {businessInfo.email}
            </p>
            <p>
              <strong>Address:</strong> {businessInfo.address}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
