import React from 'react';
import Navbar from './Navbar';
import servicesHeaderBackgroundImg from '../assets/person-disinfecting-dangerous-area-while-wearing-protective-suit.jpg';
import { Link } from 'react-router-dom';
import rightArrow from '../assets/arrowright-svgrepo-com.svg';
import InsectCards from './InsectCards';
import AntImg from '../assets/pexels-ekamelev-1104974.jpg';
import bedBugImg from '../assets/pexels-pixabay-35804.jpg';
import cockroachImg from '../assets/pexels-ekamelev-7898268.jpg';
import rodentsImg from '../assets/pexels-skitterphoto-3773.jpg';
import mosquitoImg from '../assets/pexels-ekamelev-1685610.jpg';
import fleaImg from '../assets/171.jpg';
import spiderImg from '../assets/pexels-ekamelev-995466.jpg';
import goldMedal from '../assets/medal.png';
import Footer from './Footer';
import { businessInfo } from './content/businessInfo';
import { FadeInSection } from './components/FadeInSection';

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function Services() {
  const location = useLocation();
  const antSection = useRef(null);
  const bedBugSection = useRef(null);
  const cockroachSection = useRef(null);
  const rodentsSection = useRef(null);
  const mosquitoSection = useRef(null);
  const fleaSection = useRef(null);
  const spiderSection = useRef(null);

  const { services } = businessInfo;

  useEffect(() => {
    const hash = location.hash;
    console.log('Current hash:', hash);
    if (hash === '#ant-section') {
      antSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#bed-bug-section') {
      bedBugSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#cockroaches-section') {
      cockroachSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#rodents-section') {
      rodentsSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#mosquito-section') {
      mosquitoSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#flea-section') {
      fleaSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#spider-section') {
      spiderSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="services-tab-content-wrapper">
        <div className="services-header-wrapper">
          <div className="contact-hero-content">
            <h1>Our Services</h1>
            <p>Professional Pest Control for Property Managers & Landlords</p>
          </div>
        </div>

        <div className="main-content-wrapper">
          <FadeInSection>
            <div className="title-cards-container">
              <h1>
                Your <span className="trusted-source-text-styles">Trusted Source</span> for Professional Pest Control
              </h1>
              <h1>
                <span className="trusted-source-text-styles">{businessInfo.taglines[2]}</span>
              </h1>
            </div>
          </FadeInSection>

          {/* Pricing Section */}
          <FadeInSection>
            <div className="pricing-section">
              <h2>Our Service <span className="trusted-source-text-styles">Packages</span> & Pricing</h2>
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
                  <button onClick={() => document.getElementById('ant-section').scrollIntoView({ behavior: 'smooth' })} className="pricing-button">View Details</button>
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
                  <button onClick={() => document.getElementById('bed-bug-section').scrollIntoView({ behavior: 'smooth' })} className="pricing-button">View Details</button>
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
                  <button onClick={() => document.getElementById('termite-section').scrollIntoView({ behavior: 'smooth' })} className="pricing-button">View Details</button>
                </div>
              </div>
            </div>
          </FadeInSection>

          <InsectCards />

          <div className="service-container-cards-wrapper">
            <div className="service-container" id="ant-section" ref={antSection}>
              <img src={AntImg} alt="Ant Control Service"></img>

              <div className="service-content-container">
                <h1>Ant Service Plan</h1>

                <p>
                  An ant service plan offers a comprehensive approach to control and prevent ant infestations in your home
                  or business. This plan includes regular inspections, targeted treatments, and proactive measures to ensure
                  a pest-free environment.
                </p>

                <h3 className="features-header-text">Features Of The Plan</h3>

                <ul>
                  <li>
                    <span className="li-header-text">Regular Inspections: </span>Technicians conduct thorough inspections to
                    identify ant colonies and entry points, assessing the extent of the infestation.
                  </li>
                  <li>
                    <span className="li-header-text">Targeted Treatments: </span>The plan includes the application of safe
                    and effective treatments specifically designed to eliminate ant colonies and prevent future
                    infestations.
                  </li>
                  <li>
                    <span className="li-header-text">Preventative Measures: </span> Recommendations and implementations of
                    strategies to seal entry points, reduce attractants, and maintain a barrier to keep ants from returning.
                  </li>
                </ul>
              </div>
            </div>

            <div className="service-container" id="bed-bug-section" ref={bedBugSection}>
              <img src={bedBugImg} alt="Bed Bug Control Service"></img>

              <div className="service-content-container">
                <h1>Bed Bug Service Plan</h1>

                <p>
                  A bed bug service plan provides a thorough strategy to eliminate and prevent bed bug infestations in
                  residential or commercial settings. This plan includes detailed inspections, customized treatments, and
                  ongoing monitoring to ensure effective control and long-term protection.
                </p>

                <h3 className="features-header-text">Features Of The Plan</h3>

                <ul>
                  <li>
                    <span className="li-header-text">Detailed Inspections: </span> Technicians perform comprehensive
                    inspections of all potential hiding spots to accurately assess the severity and spread of the
                    infestation.
                  </li>
                  <li>
                    <span className="li-header-text">Customized Treatments: </span>The plan includes the application of
                    targeted treatments using safe and effective methods tailored to eradicate bed bugs at all life stages.
                  </li>
                  <li>
                    <span className="li-header-text">Ongoing Monitoring: </span> Continuous monitoring and follow-up visits
                    are scheduled to ensure that the bed bugs are completely eradicated and to prevent future infestations
                    through proactive measures.
                  </li>
                </ul>
              </div>
            </div>

            <div className="service-container" id="rodents-section" ref={rodentsSection}>
              <img src={rodentsImg} alt="Rodent Control Service"></img>

              <div className="service-content-container">
                <h1>Rodents Service Plan</h1>

                <p>
                  Our rodent pest control plan provides a comprehensive approach to eliminate and prevent rodent
                  infestations in your home or business. It includes thorough inspections, strategic baiting and trapping,
                  and preventative measures to seal entry points and deter future rodent activity. This plan ensures a safe
                  and rodent-free environment, protecting your property and health.
                </p>

                <h3 className="features-header-text">Features Of The Plan</h3>

                <ul>
                  <li>
                    <span className="li-header-text">Detailed Site Inspections: </span> Expert technicians conduct thorough
                    inspections to identify rodent entry points, nesting sites, and signs of infestation, tailoring the plan
                    to address specific problem areas.
                  </li>
                  <li>
                    <span className="li-header-text">Custom Treatment Solutions: </span>The plan employs a range of methods
                    such as traps, bait stations, and exclusion techniques, specifically designed to eliminate rodents and
                    block their access to your property.
                  </li>
                  <li>
                    <span className="li-header-text">Regular Monitoring and Maintenance: </span> Continuous follow-up visits
                    and monitoring ensure the treatment's effectiveness, with proactive adjustments made to maintain a
                    rodent-free environment and prevent re-infestation.
                  </li>
                </ul>
              </div>
            </div>

            <div className="service-container" id="mosquito-section" ref={mosquitoSection}>
              <img src={mosquitoImg} alt="Mosquito Control Service"></img>

              <div className="service-content-container">
                <h1>Mosquitos Service Plan</h1>

                <p>
                  A mosquito service plan offers a comprehensive solution to eliminate mosquito populations and prevent
                  their return, ensuring a comfortable and safe environment. This plan includes thorough site inspections,
                  targeted treatments, and continuous monitoring for effective and lasting mosquito control.
                </p>

                <h3 className="features-header-text">Features Of The Plan</h3>

                <ul>
                  <li>
                    <span className="li-header-text">Detailed Site Inspections: </span> Professional technicians carry out
                    thorough inspections to identify mosquito breeding sites, potential entry points, and areas of high
                    activity, allowing for a customized treatment plan tailored to the specific needs of the property.
                  </li>
                  <li>
                    <span className="li-header-text">Targeted Treatment Applications: </span>The plan employs a combination
                    of larvicides, adulticides, and biological controls to effectively target mosquito populations at
                    various life stages, ensuring thorough eradication.
                  </li>
                  <li>
                    <span className="li-header-text">Ongoing Monitoring and Prevention: </span>Regular follow-up visits and
                    continuous monitoring ensure the treatment remains effective, with proactive measures taken to prevent
                    re-infestation and maintain a mosquito-free environment.
                  </li>
                </ul>
              </div>
            </div>

            <div className="service-container" id="flea-section" ref={fleaSection}>
              <img src={fleaImg} alt="Flea Control Service"></img>

              <div className="service-content-container">
                <h1>Fleas Service Plan</h1>

                <p>
                  A flea service plan offers a comprehensive approach to eliminate flea infestations and prevent future
                  occurrences in homes and businesses. This plan includes meticulous inspections, targeted treatments, and
                  ongoing monitoring to ensure effective and lasting control.
                </p>

                <h3 className="features-header-text">Features Of The Plan</h3>

                <ul>
                  <li>
                    <span className="li-header-text">Thorough Property Assessments: </span> Professional technicians conduct
                    detailed inspections to identify flea hotspots, potential entry points, and the extent of the
                    infestation, ensuring a customized treatment plan.
                  </li>
                  <li>
                    <span className="li-header-text">Specialized Treatment Methods: </span>The plan utilizes a combination
                    of safe and effective treatments, including insect growth regulators (IGRs), insecticides, and
                    environmental modifications to disrupt the flea lifecycle and eradicate the infestation.
                  </li>
                  <li>
                    <span className="li-header-text">Ongoing Surveillance and Support: </span>Regular follow-up visits and
                    monitoring ensure the continued effectiveness of the treatment, with proactive steps taken to prevent
                    re-infestation and maintain a flea-free environment.
                  </li>
                </ul>
              </div>
            </div>

            <div className="service-container" id="spider-section" ref={spiderSection}>
              <img src={spiderImg} alt="Spider Control Service"></img>

              <div className="service-content-container">
                <h1>Spider Service Plan</h1>

                <p>
                  A spider service plan provides a comprehensive approach to eliminate spider infestations and prevent
                  future occurrences, ensuring a safe and comfortable living environment. This plan includes meticulous
                  inspections, precise treatments, and continuous monitoring to ensure effective and lasting spider control.
                </p>

                <h3 className="features-header-text">Features Of The Plan</h3>

                <ul>
                  <li>
                    <span className="li-header-text">Comprehensive Inspections: </span> Expert technicians perform thorough
                    inspections to locate spider nests, webs, and potential entry points, allowing for an accurate
                    assessment of the infestation and the development of a tailored treatment plan.
                  </li>
                  <li>
                    <span className="li-header-text">Specialized Treatments: </span> The plan includes the application of
                    eco-friendly insecticides and strategic placement of traps to target spiders directly and eliminate
                    their food sources, reducing spider populations effectively.
                  </li>
                  <li>
                    <span className="li-header-text">Regular Monitoring and Prevention: </span>Ongoing follow-up visits and
                    continuous monitoring ensure the treatment remains effective, with preventative measures implemented to
                    reduce the risk of future spider infestations, maintaining a spider-free environment.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
