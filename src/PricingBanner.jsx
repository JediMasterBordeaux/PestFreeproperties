import React from 'react';
import { businessInfo } from './content/businessInfo';
import { Link } from 'react-router-dom';

export default function PricingBanner() {
  const { services } = businessInfo;

  return (
    <div className="pricing-banner-wrapper">
      <div className="pricing-banner-container">
        <div className="pricing-header">
          <h2>Our Professional Services</h2>
          <p>Specialized pest control solutions for property managers and landlords</p>
        </div>

        <div className="pricing-cards-container">
          {/* General Pest Control Card */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>{services.generalPestControl.name}</h3>
              <div className="price">
                <span className="amount">${services.generalPestControl.startingPrice}</span>
                <span className="period">Starting at</span>
              </div>
            </div>
            <ul className="pricing-features">
              {services.generalPestControl.includes.map((feature, index) => (
                <li key={index}>
                  <svg viewBox="0 0 24 24" className="check-icon">
                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/Services" className="pricing-cta">Learn More</Link>
          </div>

          {/* Bed Bug Treatment Card */}
          <div className="pricing-card featured">
            <div className="pricing-card-header">
              <h3>{services.bedBugTreatment.name}</h3>
              <div className="price">
                <span className="amount">${services.bedBugTreatment.pricePerRoom}</span>
                <span className="period">per room</span>
              </div>
            </div>
            <ul className="pricing-features">
              {services.bedBugTreatment.includes.map((feature, index) => (
                <li key={index}>
                  <svg viewBox="0 0 24 24" className="check-icon">
                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/Services" className="pricing-cta">Learn More</Link>
          </div>

          {/* Termite Treatment Card */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>{services.termiteTreatment.name}</h3>
              <div className="price">
                <span className="amount">${services.termiteTreatment.flatRate}</span>
                <span className="period">Flat rate</span>
              </div>
              <div className="sub-price">
                Optional report: ${services.termiteTreatment.reportCost}
              </div>
            </div>
            <ul className="pricing-features">
              {services.termiteTreatment.includes.map((feature, index) => (
                <li key={index}>
                  <svg viewBox="0 0 24 24" className="check-icon">
                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/Services" className="pricing-cta">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 