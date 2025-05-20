import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Styles/contact_form_styles.scss';

export default function Contact() {
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
            <div className="icon">📧</div>
            <h3>Email Us</h3>
            <p>For service inquiries, please email us</p>
            <small>We typically respond within 24 hours</small>
          </div>

          <div className="info-card">
            <div className="icon">📍</div>
            <h3>Service Areas</h3>
            <p>Duval & Nassau Counties</p>
            <small>Jacksonville, Fernandina Beach, Yulee, Callahan</small>
          </div>
        </section>

        {/* Message Section */}
        <section className="contact-form-section">
          <div className="form-container">
            <h2>Thank You for Your Interest</h2>
            <p>Please email us for all service inquiries. We look forward to helping you with your pest control needs.</p>
          </div>
        </section>

        {/* Additional Information */}
        <section className="additional-info">
          <div className="info-block">
            <h3>Our Credentials</h3>
            <p>Licensed • Insured • Bonded • Double Certified</p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
