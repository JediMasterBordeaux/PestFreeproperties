import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Button } from 'react-bootstrap';
import { businessInfo } from './content/businessInfo';

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-logo">
              <h1>Pest Free Properties</h1>
              <div className="navbar-tagline">
                <div>Built for Turnovers. Backed by 20+ Years. Powered by Results.</div>
                <div>Trusted by Property Managers & Landlords Across Duval & Nassau.</div>
              </div>
            </Link>
          </div>

          <div className="navbar-links">
            <Link to="/" className="nav-link" onClick={handleClose}>Home</Link>
            <Link to="/services" className="nav-link" onClick={handleClose}>Services</Link>
            <Link to="/pest-id" className="nav-link" onClick={handleClose}>Pest ID</Link>
            <Link to="/service-areas" className="nav-link" onClick={handleClose}>Service Areas</Link>
            <Link to="/contact" className="nav-link" onClick={handleClose}>Contact</Link>
          </div>

          <div className="navbar-contact">
            <a href={`tel:${businessInfo.contact.phone}`} className="contact-phone">
              {businessInfo.contact.phone}
            </a>
          </div>

          <Button 
            variant="outline-primary" 
            className="d-md-none mobile-menu-button"
            onClick={handleShow}
          >
            <span className="hamburger-icon">☰</span>
          </Button>
        </div>
      </nav>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mobile-nav-links">
            <Link to="/" className="nav-link" onClick={handleClose}>Home</Link>
            <Link to="/services" className="nav-link" onClick={handleClose}>Services</Link>
            <Link to="/pest-id" className="nav-link" onClick={handleClose}>Pest ID</Link>
            <Link to="/service-areas" className="nav-link" onClick={handleClose}>Service Areas</Link>
            <Link to="/contact" className="nav-link" onClick={handleClose}>Contact</Link>
            <a href={`tel:${businessInfo.contact.phone}`} className="contact-phone">
              {businessInfo.contact.phone}
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export function OffcanvasTitle() {
  return (
    <Offcanvas.Title>Pest Free Properties</Offcanvas.Title>
  );
} 