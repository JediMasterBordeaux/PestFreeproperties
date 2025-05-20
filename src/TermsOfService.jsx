import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { businessInfo } from './content/businessInfo';

export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <>
      <Navbar />
      <div className="terms-wrapper">
        <div className="terms-container">
          <h1>Terms of Service</h1>
          <p className="effective-date">Effective Date: {currentDate}</p>
          <p className="company-info">
            Company Name: {businessInfo.company.name}<br />
            Service Area: {businessInfo.company.regions.join(' & ')}<br />
            Contact: {businessInfo.contact.phone} • {businessInfo.contact.email}
          </p>

          <section>
            <h2>1. Service Eligibility</h2>
            <p>We provide pest control services exclusively for:</p>
            <ul>
              <li>Property Managers</li>
              <li>Landlords</li>
              <li>Real Estate Professionals</li>
              <li>Vacant Residential and Commercial Properties</li>
            </ul>
            <p className="note">Note: We do not coordinate with tenants or provide tenant-facing services.</p>
          </section>

          <section>
            <h2>2. Scope of Services</h2>
            <p>Pest Free Properties offers the following services:</p>
            <ul>
              <li>General Household Pest Control</li>
              <li>Bed Bug Eradication</li>
              <li>Termite Treatment & Termite Contracts</li>
            </ul>
            <p>Service descriptions and pricing are outlined clearly on our website and marketing materials. All treatments are for vacant units only unless otherwise pre-approved in writing.</p>
          </section>

          <section>
            <h2>3. Scheduling & Access</h2>
            <p>Clients are responsible for providing safe, timely access to the property. Missed appointments without prior notice may result in a service charge.</p>
          </section>

          <section>
            <h2>4. Payment Terms</h2>
            <p>We accept the following forms of payment:</p>
            <ul>
              {businessInfo.paymentMethods.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
            <p>Payment is due at the time of service unless otherwise agreed in writing.<br />
            Receipts and documentation will be provided for each job.</p>
          </section>

          <section>
            <h2>5. Guarantees</h2>
            <p>We stand by the quality of our work:</p>
            <ul>
              <li>General Pest Control Guarantee: 14-day pest-free guarantee.</li>
              <li>Termite Treatment Guarantee: 6-month retreatment guarantee.</li>
              <li>Bed Bug Services: Follow-up treatment available if reinfestation occurs (pricing may apply).</li>
            </ul>
            <p>Guarantees do not apply if units become reoccupied, disturbed, or altered without our knowledge.</p>
          </section>

          <section>
            <h2>6. Termite Contracts</h2>
            <p>Clients may opt into annual or multi-year termite protection contracts, which include:</p>
            <ul>
              <li>Annual inspections</li>
              <li>Retreatments as needed</li>
              <li>Optional termite reporting for real estate or legal purposes</li>
            </ul>
            <p>Separate agreement documents apply for termite contract holders.</p>
          </section>

          <section>
            <h2>7. Liability & Limitations</h2>
            <p>We are fully licensed, bonded, insured, and certified. However, Pest Free Properties is not liable for:</p>
            <ul>
              <li>Pre-existing damage</li>
              <li>Access-related delays</li>
              <li>Tenant behavior</li>
              <li>Misuse of treated areas post-service</li>
            </ul>
          </section>

          <section>
            <h2>8. Cancellations</h2>
            <p>Cancellations must be made at least 24 hours in advance to avoid a $50 cancellation fee.</p>
          </section>

          <section>
            <h2>9. Changes to Terms</h2>
            <p>We reserve the right to update these Terms of Service at any time. The most recent version will always be available upon request or published on our website.</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
} 