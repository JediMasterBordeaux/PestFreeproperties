import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Services from './Services';
import PestID from './PestID';
import ServiceAreas from './ServiceAreas';
import Navbar from './Navbar';
import Footer from './Footer';
import TermsOfService from './TermsOfService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pest-id" element={<PestID />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
