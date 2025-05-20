import React from 'react';
import { Link } from 'react-router-dom';
import { businessInfo } from './content/businessInfo';

const Footer = () => {
  return (
    <div className="footer-content-wrapper">
      <div className="footer-company-info">
        <h3>Pest Free Properties</h3>
      </div>

      <div className="footer-services">
        <h3>Our Services</h3>
        <ul>
          <li>General Household Pest Control</li>
          <li>Bed Bug Eradication</li>
          <li>Termite Treatment</li>
        </ul>
      </div>

      <div className="footer-credentials">
        <h3>Credentials</h3>
        <ul>
          <li>Licensed</li>
          <li>Insured</li>
          <li>Bonded</li>
          <li>Double Certified</li>
        </ul>
        <p>20+ Years of Experience</p>
      </div>

      <div className="footer-welcome-to-container">
        <h5>Welcome to <span className="footer-pps-text">Pest Free Properties</span></h5>
      </div>

      <div className="footer-links-container">
        <h5>Quick Links</h5>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/pest-id">Pest ID</Link>
        <Link to="/service-areas">Service Areas</Link>
      </div>
    </div>
  );
};

export default Footer;
