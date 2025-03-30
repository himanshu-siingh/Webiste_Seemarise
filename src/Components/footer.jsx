import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top-bar">
        <div className="footer-social-text">
          Stay connected with Seemarise:
        </div>
        <div className="footer-social-icons">
          <a href="#" className="footer-social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="footer-social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="footer-social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="footer-social-icon"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="footer-social-icon"><i className="fab fa-github"></i></a>
        </div>
      </div>
      
      <div className="footer-content">
        {/* About Seemarise */}
        <div className="footer-column">
          <h5 className="footer-heading">SEEMARISE</h5>
          <p className="footer-text">
            Seemarise is dedicated to delivering exceptional services and innovative solutions to help your business grow.
          </p>
        </div>
        
        {/* Services */}
        <div className="footer-column">
          <h5 className="footer-heading">SERVICES</h5>
          <ul className="footer-list">
            <li className="footer-list-item"><a href="#" className="footer-link">Web Development</a></li>
            <li className="footer-list-item"><a href="#" className="footer-link">Consulting</a></li>
            <li className="footer-list-item"><a href="#" className="footer-link">Marketing</a></li>
            <li className="footer-list-item"><a href="#" className="footer-link">Brand Strategy</a></li>
          </ul>
        </div>
        
        {/* Useful Links */}
        <div className="footer-column">
          <h5 className="footer-heading">USEFUL LINKS</h5>
          <ul className="footer-list">
            <li className="footer-list-item"><a href="#" className="footer-link">Home</a></li>
            <li className="footer-list-item"><a href="#" className="footer-link">About Company</a></li>
            <li className="footer-list-item"><a href="#" className="footer-link">Help Centre</a></li>
            <li className="footer-list-item"><a href="#" className="footer-link">Privacy Policy</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="footer-column">
          <h5 className="footer-heading">CONTACT</h5>
          <ul className="footer-list">
            <li className="footer-list-item footer-contact-item">
              <i className="fas fa-home footer-icon"></i> 123 Business St, New York, NY 10012, US
            </li>
            <li className="footer-list-item footer-contact-item">
              <i className="fas fa-envelope footer-icon"></i> contact@seemarise.com
            </li>
            <li className="footer-list-item footer-contact-item">
              <i className="fas fa-phone footer-icon"></i> +1 234 567 890
            </li>
            <li className="footer-list-item footer-contact-item">
              <i className="fas fa-print footer-icon"></i> +1 234 567 891
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-copyright">
        © {new Date().getFullYear()} Seemarise. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
