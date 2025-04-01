import React from 'react';
import houseIcon from '../assets/house-svgrepo-com.svg';
import buildingIcon from '../assets/building-small-svgrepo-com.svg';

export default function ServiceTypes() {
  return (
    <section className="service-types">
      <div className="service-types-container">
        <div className="service-type residential">
          <div className="service-icon">
            <img src={houseIcon} alt="Residential Icon" />
          </div>
          <div className="service-content">
            <span className="service-label">Property Management</span>
            <h2>Residential Services</h2>
            <p>
              Specialized pest control solutions for residential property managers and landlords. 
              We focus on vacant unit treatments and turnover services, ensuring your properties 
              are pest-free and ready for new tenants.
            </p>
          </div>
        </div>

        <div className="service-type commercial">
          <div className="service-icon">
            <img src={buildingIcon} alt="Commercial Icon" />
          </div>
          <div className="service-content">
            <span className="service-label">Business</span>
            <h2>Commercial Services</h2>
            <p>
              Expert pest control solutions for commercial property managers. We handle multi-unit 
              properties, office buildings, and retail spaces with efficient, discreet service 
              focused on vacant unit treatments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 