import React from 'react';
import { businessInfo } from './content/businessInfo';

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-header">
        <h1>About Pest Free Properties</h1>
        <p>{businessInfo.companyOverview}</p>
      </div>

      <div className="experience-section">
        <h2>Our Experience</h2>
        <p>{businessInfo.experience}</p>
      </div>

      <div className="specialties-section">
        <h2>Our Specialties</h2>
        <ul>
          {businessInfo.specialties.map((specialty, index) => (
            <li key={index}>{specialty}</li>
          ))}
        </ul>
      </div>

      <div className="target-market">
        <h2>Who We Serve</h2>
        <p>{businessInfo.targetMarket}</p>
      </div>

      <div className="credentials-section">
        <h2>Our Credentials</h2>
        <ul>
          {businessInfo.credentials.map((credential, index) => (
            <li key={index}>{credential}</li>
          ))}
        </ul>
      </div>

      <div className="service-areas">
        <h2>Areas We Serve</h2>
        <ul>
          {businessInfo.serviceAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      <div className="key-features">
        <h2>Why Choose Us</h2>
        <ul>
          {businessInfo.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 