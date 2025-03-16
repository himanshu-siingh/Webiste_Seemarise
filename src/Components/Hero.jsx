import React from 'react';
import './Hero.css';
import heroImage from './images/1.jpg'; // Ensure correct path

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container"> {/* New container for text + image */}
        <div className="hero-text">
          <h1>Accelerate your new <br/> Product <span className="highlight">Strategy.</span></h1>
          <p>High-performing software solutions that drive your business forward. Accelerate your software development roadmap through custom engineering solutions.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">How it Works</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
