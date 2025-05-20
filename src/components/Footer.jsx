import React from 'react';
import { businessInfo } from '../content/businessInfo';

export default function Footer() {
  const { company } = businessInfo;
  
  return (
    <div className="footer-wrapper">
      <div className="footer-content-container">
        <div className="footer-contact-info">
          <h3>About Us</h3>
          <p>Professional Pest Control Solutions</p>
          <p>For Property Managers & Landlords</p>
        </div>

        <div className="footer-hours">
          <h3>Credentials</h3>
          {company.credentials.map((credential, index) => (
            <p key={index}>{credential}</p>
          ))}
          <p>{company.experience} of Experience</p>
        </div>

        <div className="footer-social">
          <h3>Service Areas</h3>
          {company.regions.map((region, index) => (
            <p key={index}>{region}</p>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
      </div>
    </div>
  );
} 