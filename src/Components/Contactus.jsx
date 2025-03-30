import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="erp-contact-container">
      <div className="erp-text-content">
        <h1 className="erp-heading">Get in <span className="erp-highlight">touch</span> today!</h1>
        <p className="erp-description">Have questions about our ERP solutions? Our team of experts is ready to help you transform your business operations with customized enterprise solutions.</p>
        <div className="erp-feature-list">
          <div className="erp-feature-item">
            <div className="erp-check-icon">✓</div>
            <div className="erp-feature-text">Free consultation and business assessment</div>
          </div>
          <div className="erp-feature-item">
            <div className="erp-check-icon">✓</div>
            <div className="erp-feature-text">24/7 dedicated customer support</div>
          </div>
          <div className="erp-feature-item">
            <div className="erp-check-icon">✓</div>
            <div className="erp-feature-text">Flexible implementation and training options</div>
          </div>
        </div>
        <a href="#" className="erp-contact-button">Contact an expert</a>
      </div>
      <div className="erp-image-content">
        <img 
          src="https://img.freepik.com/free-photo/system-administrator-data-center-managing-servers_482257-115989.jpg?t=st=1742627402~exp=1742631002~hmac=e2f2467bdb4a1cbbb2146ec918ed41c1447ba6815802140568d6ef01d71e5434&w=1380" 
          alt="IT professional on phone" 
          className="erp-image-circle-1"
        />
        <img 
          src="https://img.freepik.com/free-photo/happy-co-workers-close-window_1098-3172.jpg?t=st=1742627444~exp=1742631044~hmac=30af7b62c1eb8806b4b418d09316d256b0618a0006c2f2bfcd54d85a963f4527&w=996" 
          alt="Business team using ERP software" 
          className="erp-image-circle-2"
        />
        <div className="erp-decoration-circle-1"></div>
        <div className="erp-decoration-circle-2"></div>
      </div>
    </div>
  );
};

export default ContactUs;