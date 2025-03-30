import React from 'react';
import '../styles/WhatWeOffer.css';

const WhatWeOffer = () => {
  return (
    <div className="offercontainer">
      {/* Section Heading */}
      <div className="section-heading">
        <h2 className="heading">What We Offer</h2>
        <p className="subheading">
          Comprehensive ERP solutions tailored for your industry needs. 
          Our enterprise resource planning systems streamline operations, 
          enhance productivity, and drive growth across various sectors.
        </p>
      </div>

      {/* Two Column Feature Grid */}
      <div className="two-column-grid">
        {/* Healthcare ERP Card */}
        <div className="productivity-card">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            {/* Enhanced Healthcare Icon */}
            <rect x="10" y="20" width="40" height="30" rx="2" stroke="#777" strokeWidth="2" />
            <path d="M20 20V14C20 12.8954 20.8954 12 22 12H38C39.1046 12 40 12.8954 40 14V20" stroke="#777" strokeWidth="2" />
            <path d="M25 30H35" stroke="#777" strokeWidth="2" strokeLinecap="round" />
            <path d="M30 25V35" stroke="#777" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 40H42" stroke="#777" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 45H42" stroke="#777" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h3 className="card-title">Healthcare ERP</h3>
          <p className="card-text">
            Streamline patient management, billing, and medical records with our
            comprehensive healthcare ERP solution. Designed to improve operational
            efficiency and enhance patient care quality.
          </p>
          <button className="button">Learn more</button>
        </div>

        {/* Educational Institutions ERP Card */}
        <div className="image-card">
          <img
            src="https://img.freepik.com/free-photo/businesswoman-discussing-with-disabled-woman_482257-2402.jpg?t=st=1742474281~exp=1742477881~hmac=15846b8f08517666dee2c1e68973d7b7bc7007484ee888e4330b3f4bdb46ab19&w=996"
            alt="Person working on educational software"
            className="card-image"
          />
          <div className="image-overlay">
            <h3 className="white-title">School Management System</h3>
            <p className="white-text">
              Comprehensive ERP solution for educational institutions. Manage student
              records, attendance, grades, schedules, and communication with parents
              through a single integrated platform.
            </p>
            <a href="#" className="link-button">
              Learn more
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Three Column Feature Grid */}
      <div className="three-column-grid">
        {/* Manufacturing ERP Card */}
        <div className="small-image-card">
          <img
            src="https://img.freepik.com/free-photo/futuristic-technology-concept_23-2151908114.jpg?t=st=1742474416~exp=1742478016~hmac=05f183dcc9e9d7bd84fd52b7961ebf7085b245166c138f0debc468b3da2887df&w=1060"
            alt="Manufacturing operations"
            className="card-image"
          />
          <div className="image-overlay">
            <h3 className="white-title">Manufacturing ERP</h3>
            <p className="white-text">
              Optimize production processes, inventory management, and supply chain
              operations with our specialized manufacturing ERP solution.
            </p>
            <a href="#" className="video-button">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="play-icon"
              >
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                <path d="M10 8L16 12L10 16V8Z" fill="white" />
              </svg>
              Watch demo
            </a>
          </div>
        </div>

        {/* Retail ERP Card */}
        <div className="small-image-card">
          <img
            src="https://img.freepik.com/free-photo/close-up-people-with-tablet_23-2149196087.jpg?t=st=1742474465~exp=1742478065~hmac=8b6ce34a6f2259097160f4b795fe6246cd98b815b310edc588e860569a127332&w=996"
            alt="Retail business operations"
            className="card-image"
          />
          <div className="image-overlay">
            <h3 className="white-title">Retail Management</h3>
            <p className="white-text">
              Comprehensive retail ERP with point-of-sale integration, inventory
              tracking, customer relationship management, and sales analytics.
            </p>
            <a href="#" className="link-button">
              Learn more
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Corporate ERP Card - With Better SVG */}
        <div className="green-card">
          <div className="green-card-content">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              style={{ marginBottom: '15px' }}
            >
              {/* Enhanced Corporate Icon */}
              <rect x="10" y="18" width="15" height="30" stroke="white" strokeWidth="2" />
              <rect x="25" y="18" width="25" height="30" stroke="white" strokeWidth="2" />
              <rect x="14" y="22" width="7" height="5" stroke="white" strokeWidth="2" />
              <rect x="14" y="31" width="7" height="5" stroke="white" strokeWidth="2" />
              <rect x="14" y="40" width="7" height="5" stroke="white" strokeWidth="2" />
              <rect x="30" y="22" width="7" height="5" stroke="white" strokeWidth="2" />
              <rect x="30" y="31" width="7" height="5" stroke="white" strokeWidth="2" />
              <rect x="30" y="40" width="7" height="5" stroke="white" strokeWidth="2" />
              <rect x="40" y="22" width="7" height="5" stroke="white" strokeWidth="2" />
              <rect x="40" y="31" width="7" height="5" stroke="white" strokeWidth="2" />
              <rect x="40" y="40" width="7" height="5" stroke="white" strokeWidth="2" />
              <rect x="20" y="12" width="20" height="6" stroke="white" strokeWidth="2" />
            </svg>
            <h3 className="white-title">Corporate Solutions</h3>
            <p className="white-text">
              Enterprise-grade ERP system for large corporations. Integrate finance,
              HR, operations, and customer management in one powerful platform.
            </p>
            <a href="#" className="link-button">
              Learn more
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
