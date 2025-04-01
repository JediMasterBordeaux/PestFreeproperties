import React from 'react';
import ppsWorkersImg from '../assets/2148848560.jpg';
import phoneImg from '../assets/phone-svgrepo-com.svg';
import greenCheckMarkImg from '../assets/check-mark-button-svgrepo-com (1).svg';
import { HashLink as Link } from 'react-router-hash-link';

export default function AboutUsHomepage() {
  return (
    <>
      <div className="hero-section">
        <img src={ppsWorkersImg} className="hero-image" alt="Pest Control Professional at Work" />
        <div className="hero-text">
          <h2>Built for Turnovers. Backed by 20+ Years. Powered by Results.</h2>
          <h1>Trusted by Property Managers & Landlords Across Duval & Nassau.</h1>
        </div>
      </div>

      <div className="about-us-homepage-content-wrapper">
        <div className="about-us-content-container">
          <div className="header-section">
            <h1>
              Your <span className="trusted-solution-text-about-us">Specialized Solution</span> for Vacant Unit 
              Pest Control
            </h1>
          </div>

          <div className="main-content-grid">
            <div className="content-left">
              <div className="about-us-description-p">
                Dedicated exclusively to property managers and landlords, we specialize in vacant unit pest control 
                and turnover services. With over 20 years of experience in Duval and Nassau counties, we deliver 
                fast, effective treatments without tenant coordination, making property management easier.
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <h3>20+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-card">
                  <h3>2</h3>
                  <p>Counties Served</p>
                </div>
                <div className="stat-card">
                  <h3>100%</h3>
                  <p>Satisfaction</p>
                </div>
                <div className="stat-card">
                  <h3>24/7</h3>
                  <p>Support</p>
                </div>
              </div>
            </div>

            <div className="content-right">
              <div className="action-card">
                <div className="learn-more-call-help-button-container">
                  <div className="learn-more-btn-container">
                    <Link to="/Services">
                      <button>View Services</button>
                    </Link>
                  </div>

                  <div className="phone-icon-container">
                    <img src={phoneImg} alt="Phone Icon" />
                  </div>

                  <div className="call-for-help-container">
                    <p>Schedule Service:</p>
                    <h4 className="call-for-help-phone-num">904-553-7120</h4>
                  </div>
                </div>
              </div>

              <div className="features-grid">
                <div className="feature-card">
                  <img src={greenCheckMarkImg} alt="Checkmark" />
                  <p>Licensed & Double Certified</p>
                </div>
                <div className="feature-card">
                  <img src={greenCheckMarkImg} alt="Checkmark" />
                  <p>20+ Years Experience</p>
                </div>
                <div className="feature-card">
                  <img src={greenCheckMarkImg} alt="Checkmark" />
                  <p>No Tenant Coordination</p>
                </div>
                <div className="feature-card">
                  <img src={greenCheckMarkImg} alt="Checkmark" />
                  <p>Fast Turnaround Times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
