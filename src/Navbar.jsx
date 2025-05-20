import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import { businessInfo } from './content/businessInfo';
import './Styles/navbar_styles.scss';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/services', text: 'Services' },
    { to: '/pest-id', text: 'Pest ID' },
    { to: '/service-areas', text: 'Service Areas' },
    { to: '/contact', text: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo" onClick={handleClose}>
            <h1>Pest Free Properties</h1>
            <div className="navbar-tagline">
              <div>Built for Turnovers. Backed by 20+ Years.</div>
              <div>Trusted by Property Managers & Landlords</div>
            </div>
          </Link>
        </div>

        {!isMobile && (
          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link"
                onClick={handleClose}
              >
                {link.text}
              </Link>
            ))}
          </div>
        )}

        {isMobile && (
          <button
            className="mobile-menu-button"
            onClick={handleShow}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        )}
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link"
                onClick={handleClose}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}

export function OffcanvasTitle() {
  return (
    <Offcanvas.Title>Pest Free Properties</Offcanvas.Title>
  );
} 