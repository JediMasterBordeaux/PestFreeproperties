import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import PestID from './PestID';
import ServiceAreas from './ServiceAreas';
import TermsOfService from './TermsOfService';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pest-id" element={<PestID />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
      </Routes>
    </Router>
  );
}
