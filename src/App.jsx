import './index.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { initGA, pageview } from './utils/analytics';

import HomePage from './HomePage';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import PestID from './PestID';
import ServiceAreas from './ServiceAreas';
import TermsOfService from './TermsOfService';

// Analytics wrapper component
function AnalyticsWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4
    initGA();
  }, []);

  useEffect(() => {
    // Track page views
    pageview(location.pathname);
  }, [location]);

  return children;
}

export default function App() {
  return (
    <Router>
      <AnalyticsWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pest-id" element={<PestID />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
        </Routes>
      </AnalyticsWrapper>
    </Router>
  );
}
