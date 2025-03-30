import React, { useState } from 'react';
import '../styles/ContactPage.css';
import MapSection from '../Components/Map';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form Submitted:', formData);
    // Add your form submission handler here
    // Could be an API call, form validation, etc.
  };

  return (
    <div className="contact-page">
      <div className="hero">
        <h1>Contact Us</h1>
      </div>

      <div className="container">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                className='inut'
                value={formData.firstName}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                className='inut'
                name="lastName" 
                value={formData.lastName}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                className='inut'
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className='inut'
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">What do you have in mind</label>
              <textarea 
                id="message" 
                className='inut'
                name="message" 
                placeholder="Please enter query..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We're here to help and answer any question you might have. We look forward to hearing from you!</p>

          <div className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <span>+1 (258) 325-8567</span>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <span>hello@workik.com</span>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <span>102 Street, Y Cross 485656</span>
          </div>

          <div className="social-icons">
            <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.961 0 3.204 1.153 3.204 1.153l-.854 1.07s-.845-.617-2.35-.617c-1.742 0-2.125 1.29-2.125 2.477s.383 2.477 2.125 2.477c1.505 0 2.35-.617 2.35-.617l.854 1.07s-1.243 1.153-3.204 1.153z"></path>
            </svg>
            <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
            <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </div>
        </div>

        {/* Map Section */}
        <MapSection />

        {/* Support Info Cards */}
        <div className="support-info">
          <div className="support-card">
            <div className="support-icon">📞</div>
            <h3>Customer Support</h3>
            <p>Our dedicated support team is available Monday through Friday, 9AM-5PM.</p>
          </div>
          
          <div className="support-card">
            <div className="support-icon">💼</div>
            <h3>Business Inquiries</h3>
            <p>For partnership opportunities and business development, contact our team directly.</p>
          </div>
          
          <div className="support-card">
            <div className="support-icon">🛠️</div>
            <h3>Technical Support</h3>
            <p>Need technical assistance? Our engineers are ready to help troubleshoot any issues.</p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with our latest news, products, and offers.</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              className='inut'
              placeholder="Your email address" 
              required 
            />
            <button type="submit" className="submit-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;