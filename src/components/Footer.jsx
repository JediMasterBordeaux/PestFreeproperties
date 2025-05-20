import React from 'react';
import { businessInfo } from '../content/businessInfo';

export default function Footer() {
  const { company } = businessInfo;
  
  return (
    <div className="footer-wrapper">
      <div className="footer-content-container">
        <div className="footer-company-info">
          <h3>{company.name}</h3>
        </div>

        <div className="footer-credentials">
          <h3>Credentials</h3>
          {company.credentials.map((credential, index) => (
            <p key={index}>{credential}</p>
          ))}
          <p>{company.experience} of Experience</p>
        </div>

        <div className="footer-service-areas">
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