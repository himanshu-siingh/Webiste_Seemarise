import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';
import servicesData from './servicesData.json';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="services-header">
        <h2 className="what-we-do">WHAT WE DO</h2>
        <h1 className="services-title">OUR SERVICES</h1>
      </div>

      {servicesData.map((service, index) => (
        <div className={`service-section service-${index + 1}`} key={index}>
          <div className="service-content">
            <div className="service-number">SERVICE 0{index + 1}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <Link to={`/services/${service.slug}`} className="service-link">
              Learn More
            </Link>
          </div>
          <div className="service-image">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      ))}

      <div className="service-features">
        <div className="feature">
          <h3>We Supply</h3>
          <p>WE SUPPLY TO PROJECT BUILDERS, FLOOR DEALERS, INTERIOR DESIGNERS & CONTRACTORS & HOME OWNERS. WE SHIP TO EAST MALAYSIA AND EXPORT TO WORLDWIDE TOO.</p>
        </div>
        
        <div className="feature">
          <h3>We Install</h3>
          <p>BE IT A SINGLE ROOM OR A 50 FLOORED BUILDING OF CONDOMINIUM. OUR CERTIFIED INSTALLERS STRIVE TO PROVIDE QUALITY AND PROMPT HANDOVER.</p>
        </div>
        
        <div className="feature">
          <h3>Project & Site Management</h3>
          <p>WE PROVIDE SITE AND PROJECT RELATED MANAGEMENT OF FLOORING START FROM DESIGN STAGE TILL AFTER HANDOVER MAINTENANCE AND CARE SERVICE. OUR EXTENSIVE PROJECT TEAM ORGANIZATION ENSURES DELIVERY OF QUALITY CRAFTWORK AND SITE PROGRESS.</p>
        </div>
        
        <div className="feature">
          <h3>Consultation & Training</h3>
          <p>NEVER BE BUSY TO SHARE. WE ACKNOWLEDGE IT IS OUR RESPONSIBLE TO PASS ON OUR KNOWLEDGE.</p>
        </div>
      </div>

      <div className="design-build-section">
        <div className="design-content">
          <div className="service-number">SERVICE 02</div>
          <h2 className="design-title">Design & Build</h2>
          <p className="design-description">WITH IN HOUSE DESIGNER AND A CARPENTRY SET IN FABRICATION OF FURNITURE, WE UNDERTAKE INTERIOR AND EXTERIOR RENOVATION AND MAKE-OVER JOB.</p>
          
          <div className="design-icons">
            <div className="icon-box">
              <div className="icon design-icon"></div>
              <span>DESIGN, BUILD & FURNISHING</span>
            </div>
            <div className="icon-box">
              <div className="icon carpentry-icon"></div>
              <span>CARPENTRY FIT OUT</span>
            </div>
            <div className="icon-box">
              <div className="icon timber-icon"></div>
              <span>DIY DECO TIMBER INSTALLATION</span>
            </div>
          </div>
        </div>
        <div className="design-image">
          <img src="/images/design-build.jpg" alt="Design and Build Service" />
        </div>
      </div>

      <div className="trading-section">
        <div className="trading-image">
          <img src="/images/trading-pmp.jpg" alt="Trading and PMP Service" />
        </div>
        <div className="trading-content">
          <div className="service-number">SERVICE 03</div>
          <h2 className="trading-title">Trading & PMP</h2>
          <p className="trading-description">WE ARE SOURCE LOCAL MANUFACTURED PRODUCTS AND SELL OVERSEA AND VICE VERSA. WE UNDERTAKE SITE MANAGEMENT & INSTALLATION WORKS FOR MANUFACTURERS OR PROJECT BULK SUPPLIES.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;