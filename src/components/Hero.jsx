import React from 'react';
import { businessInfo } from '../content/businessInfo';

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>{businessInfo.taglines[0]}</h1>
        <p className="hero-subtitle">Professional pest control services for property managers and landlords</p>
        <div className="hero-highlights">
          {businessInfo.companyHighlights.slice(0, 4).map((highlight, index) => (
            <div key={index} className="highlight-item">
              <span className="highlight-icon">✓</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
        <div className="hero-cta">
          <a href="#contact" className="cta-button">Get Started</a>
          <a href="#services" className="cta-button secondary">Learn More</a>
        </div>
      </div>
    </div>
  );
} 