import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Standalone component for the service areas content
export function ServiceAreasContent() {
  const location = useLocation();
  const duvalSection = useRef(null);
  const nassauSection = useRef(null);

  useEffect(() => {
    const hash = location.hash;

    if (hash === '#duval-section') {
      duvalSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#nassau-section') {
      nassauSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="service-areas-tab-content-wrapper">
      <div className="service-areas-header-wrapper">
        <div className="service-areas-header-text-container">
          <h1>Service Areas</h1>
        </div>
      </div>

      <div className="service-header-text-container">
        <h1 className="serve-you-header-text">We Are Here To Serve You</h1>
        <h1>Proudly Serving Northeast Florida</h1>
      </div>

      <div className="service-areas-wrapper">
        <div className="service-area-container">
          <div className="service-area-content-container">
            <h1 id="duval-section" ref={duvalSection}>Duval County</h1>

            <p>
              We proudly serve Duval County, FL, providing expert pest control services for property managers and landlords.
              Our specialized team focuses on vacant unit treatments and turnover services throughout Jacksonville and its
              surrounding communities.
            </p>

            <ul>
              <li>Jacksonville</li>
              <li>Jacksonville Beach</li>
              <li>Neptune Beach</li>
              <li>Atlantic Beach</li>
              <li>Baldwin</li>
              <li>San Marco</li>
              <li>Riverside</li>
              <li>Mandarin</li>
              <li>Arlington</li>
              <li>Southside</li>
              <li>Northside</li>
              <li>Westside</li>
              <li>Mayport</li>
              <li>Deerwood</li>
              <li>San Jose</li>
            </ul>
          </div>
        </div>

        <div className="service-area-container">
          <div className="service-area-content-container">
            <h1 id="nassau-section" ref={nassauSection}>Nassau County</h1>

            <p>
              We proudly serve Nassau County, FL, delivering exceptional pest control services for property managers and landlords.
              Our team specializes in vacant unit treatments and turnover services throughout Fernandina Beach and the
              surrounding areas.
            </p>

            <ul>
              <li>Fernandina Beach</li>
              <li>Yulee</li>
              <li>Callahan</li>
              <li>Hilliard</li>
              <li>Amelia Island</li>
              <li>Bryceville</li>
              <li>Nassau Village-Ratliff</li>
              <li>American Beach</li>
              <li>Chester</li>
              <li>Crawford</li>
              <li>Italia</li>
              <li>Kent</li>
              <li>Nassauville</li>
              <li>O'Neil</li>
              <li>Spring Hill</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Full page component with navbar and footer
export default function ServiceAreas() {
  return (
    <>
      <Navbar />
      <ServiceAreasContent />
      <Footer />
    </>
  );
}
