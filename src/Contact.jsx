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
    propertyType: 'residential',
    service: 'General Pest Control',
    message: '',
    numUnits: '1'
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
    <div className="contact-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Pest Free Properties</h1>
          <p>Professional Pest Control Solutions for Property Managers & Landlords</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="contact-container">
        {/* Contact Information Cards */}
        <section className="contact-info-section">
          <div className="info-card">
            <div className="icon">📞</div>
            <h3>Call Us</h3>
            <p>{businessInfo.contact.phone}</p>
            <small>Monday - Friday: 8:00 AM - 6:00 PM</small>
          </div>

          <div className="info-card">
            <div className="icon">📧</div>
            <h3>Email Us</h3>
            <p>{businessInfo.contact.email}</p>
            <small>We typically respond within 24 hours</small>
          </div>

          <div className="info-card">
            <div className="icon">📍</div>
            <h3>Service Areas</h3>
            <p>Duval & Nassau Counties</p>
            <small>Jacksonville, Fernandina Beach, Yulee, Callahan</small>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section">
          {submitted ? (
            <div className="success-message">
              <h2>Thank you for contacting us!</h2>
              <p>We'll get back to you within 24 hours to discuss your pest control needs.</p>
            </div>
          ) : (
            <div className="form-container">
              <h2>Request Service</h2>
              <p>Please fill out the form below and we'll get back to you promptly.</p>
              
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
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
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(904) 555-0123"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="propertyType">Property Type *</label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Needed *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="General Pest Control">General Pest Control</option>
                      <option value="Termite Control">Termite Control</option>
                      <option value="Bed Bug Treatment">Bed Bug Treatment</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="numUnits">Number of Units</label>
                    <input
                      type="number"
                      id="numUnits"
                      name="numUnits"
                      value={formData.numUnits}
                      onChange={handleChange}
                      min="1"
                      placeholder="1"
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide any additional details about your pest control needs..."
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Submit Request
                </button>
              </form>
            </div>
          )}
        </section>

        {/* Additional Information */}
        <section className="additional-info">
          <div className="info-block">
            <h3>Payment Methods</h3>
            <p>We accept: {businessInfo.paymentMethods.join(', ')}</p>
          </div>
          
          <div className="info-block">
            <h3>Our Credentials</h3>
            <p>{businessInfo.credentials.join(' • ')}</p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
