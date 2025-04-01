import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { businessInfo } from './content/businessInfo';
import rightArrow from '../assets/arrowright-svgrepo-com.svg';
import goldMedal from '../assets/medal.png';
import heroBackground from '../assets/person-disinfecting-dangerous-area-while-wearing-protective-suit.jpg';
import AntImg from '../assets/pexels-ekamelev-1104974.jpg';
import bedBugImg from '../assets/pexels-pixabay-35804.jpg';
import cockroachImg from '../assets/pexels-ekamelev-7898268.jpg';

export default function HomePage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="hero-content">
          <h1>Your <span className="trusted-source-text-styles">Trusted Source</span> for Professional Pest Control</h1>
          <p className="hero-subtitle">Specialized pest control solutions for property managers and landlords</p>
          <div className="hero-buttons">
            <Link to="/services" className="primary-button">View Our Services</Link>
            <Link to="/contact" className="secondary-button">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="expertise-wrapper">
        <div className="expertise-container">
          <div className="expertise-header-container">
            <h5>Our Expertise</h5>
            <h1>{businessInfo.taglines[3]}</h1>
            <span className="exceptional-results-text">
              <h1>{businessInfo.taglines[4]}</h1>
            </span>
            <p className="description-text-expertise-header">
              Pest Free Properties is Jacksonville's trusted pest control partner, serving property managers throughout Duval and Nassau Counties. Our specialized focus on vacant unit treatments and turnover services has made us the go-to choice for property managers in the Jacksonville metropolitan area. With over 20 years of experience in Northeast Florida, we've perfected our approach to handle the unique pest challenges of our region, from termites in Jacksonville's historic homes to bed bugs in Nassau County's rental properties. Our double-certified technicians, familiar with local building codes and pest patterns, deliver quick, effective results using the latest industry methods. We understand the demands of Jacksonville's property management market and offer flexible scheduling, detailed reporting, and competitive pricing tailored to our local market. Whether you're managing properties in Jacksonville's urban core or Nassau County's suburban communities, we provide reliable pest control solutions that protect your investments and maintain property value.
            </p>
          </div>

          <div className="stats-container">
            <div className="customers-served-container">
              <img src={goldMedal} alt="Gold Medal" />
              <h3>Experience</h3>
              <h3>20+ Years</h3>
            </div>

            <div className="five-star-review-container">
              <img src={goldMedal} alt="Gold Medal" />
              <h3>Service Areas</h3>
              <h3>2 Counties</h3>
            </div>

            <div className="years-operating-container">
              <img src={goldMedal} alt="Gold Medal" />
              <h3>Certifications</h3>
              <h3>Double Certified</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Services Section */}
      <div className="featured-services-section">
        <h2>Our <span className="trusted-source-text-styles">Featured Services</span></h2>
        <div className="featured-services-grid">
          <div className="featured-service-card">
            <img src={AntImg} alt="Ant Control" />
            <h3>Ant Control</h3>
            <p>Comprehensive ant control solutions for your property</p>
            <Link to="/services#ant-section" className="learn-more-link">
              Learn More <img src={rightArrow} alt="Arrow" />
            </Link>
          </div>
          <div className="featured-service-card">
            <img src={bedBugImg} alt="Bed Bug Control" />
            <h3>Bed Bug Control</h3>
            <p>Effective bed bug elimination and prevention</p>
            <Link to="/services#bed-bug-section" className="learn-more-link">
              Learn More <img src={rightArrow} alt="Arrow" />
            </Link>
          </div>
          <div className="featured-service-card">
            <img src={cockroachImg} alt="Cockroach Control" />
            <h3>Cockroach Control</h3>
            <p>Professional cockroach eradication services</p>
            <Link to="/services#cockroaches-section" className="learn-more-link">
              Learn More <img src={rightArrow} alt="Arrow" />
            </Link>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section">
        <h2>Our <span className="trusted-source-text-styles">Services</span> & Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>General Household Pest Control</h3>
            <div className="price">$450</div>
            <div className="sub-price">starting at</div>
            <ul>
              <li>Roaches, ants, spiders, rodents</li>
              <li>Interior + exterior treatment</li>
              <li>Entry-point sealing</li>
              <li>14-day pest-free guarantee</li>
            </ul>
            <Link to="/services" className="pricing-button">View Details</Link>
          </div>
          <div className="pricing-card featured">
            <div className="featured-badge">Most Common</div>
            <h3>Bed Bug Eradication</h3>
            <div className="price">$300</div>
            <div className="sub-price">per room</div>
            <ul>
              <li>Chemical treatment (mattress & furniture safe)</li>
              <li>Full unit inspection included</li>
              <li>Follow-up available as needed</li>
            </ul>
            <Link to="/services" className="pricing-button">View Details</Link>
          </div>
          <div className="pricing-card">
            <h3>Termite Treatment</h3>
            <div className="price">$600</div>
            <div className="sub-price">flat rate</div>
            <ul>
              <li>Direct liquid treatment (no bait systems)</li>
              <li>Crawlspace, slab, and perimeter covered</li>
              <li>6-month retreatment guarantee</li>
              <li>Contracts available for long-term protection</li>
              <li>Optional termite report: $125</li>
            </ul>
            <Link to="/services" className="pricing-button">View Details</Link>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Protect Your Property?</h2>
          <p>Contact us today to schedule your service</p>
          <Link to="/contact" className="primary-button">Schedule Service</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
