import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { businessInfo } from './content/businessInfo';

export default function ServiceAreas() {
  return (
    <div className="service-areas-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="service-areas-hero">
        <div className="hero-content">
          <h1>Service Areas</h1>
          <p>Professional Pest Control Solutions for Property Managers & Landlords</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="service-areas-container">
        {/* Service Areas Information */}
        <section className="service-areas-section">
          <div className="info-card">
            <div className="icon">📍</div>
            <h3>Service Areas</h3>
            <p>Duval & Nassau Counties</p>
            <small>Jacksonville, Fernandina Beach, Yulee, Callahan</small>
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
