import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup'; // For smooth number animations
import '../styles/About.css';

const About = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation when the stats section is in view
    const statsSection = document.querySelector('.stats-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnimation(true);
            observer.disconnect(); // Stop observing after animation starts
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  return (
    <div className="app-container">
      {/* About Us Section */}
      <section className="about-section">
        <div className="container about-container">
          <div className="about-image">
            <img src="https://img.freepik.com/free-photo/man-working-night_1098-12798.jpg?t=st=1742636118~exp=1742639718~hmac=30a4ea96b1eecfa785f9615e19d6e4fa586f2722ee61369c60817f8d999fd131&w=996" alt="IT professionals working on solutions" />
          </div>
          
          <div className="about-content">
            <h2>About Us</h2>
            <p>Discover a comprehensive range of professional ERP solutions tailored to meet your needs with unmatched quality and reliability. We specialize in custom software development for healthcare, educational institutions, and businesses of all sizes.</p>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="stats-section">
        <div className="scontainer">
          <div className="stats-heading">
            <h2>Impressive Stats and Achievements You Can Trust</h2>
          </div>
          
          <div className="stats-container">
            <div className="stat-box">
              <div className="stat-number">
                {startAnimation && <CountUp start={0} end={12} duration={2} />}+
              </div>
              <div className="stat-label">Years of Experience</div>
            </div>
            
            <div className="stat-box">
              <div className="stat-number">
                {startAnimation && <CountUp start={0} end={700} duration={2} />}+
              </div>
              <div className="stat-label">Projects Completed</div>
            </div>
            
            <div className="stat-box">
              <div className="stat-number">
                {startAnimation && <CountUp start={0} end={5} duration={2} />}/5
              </div>
              <div className="stat-label">Client Satisfaction Rating</div>
            </div>
            
            <div className="stat-box">
              <div className="stat-number">
                {startAnimation && <CountUp start={0} end={100} duration={2} />}+
              </div>
              <div className="stat-label">Industry Coverage Sectors</div>
            </div>
          </div>
          
          <div className="vision-commitment">
            <div className="vision-box">
              <h3>Our Vision for Your Success</h3>
              <p>To be the most trusted and innovative ERP solutions provider, empowering businesses through transformative technology.</p>
            </div>
            
            <div className="commitment-box">
              <h3>Our Commitment to Customers</h3>
              <p>We pledge to deliver tailored solutions that drive efficiency, growth, and long-term success for every organization we serve.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-heading">
            <h2>Quality Solutions for All Your Technology Needs</h2>
          </div>
          
          <div className="service-image">
            <img src="https://img.freepik.com/free-photo/team-developers-doing-brainstorming-optimizing-code_482257-112972.jpg?t=st=1742636907~exp=1742640507~hmac=2edc72b6bf4e6c8aaa7050fae9a92d8990aedd732af0df0b9834097e293b0f04&w=1380" alt="Software development team working together" />
          </div>
          
          <div className="service-description">
            <p>At TechSolve, we pride ourselves on delivering comprehensive ERP solutions tailored to your specific industry needs. We understand that every organization has unique requirements, which is why our expert team works closely with you to identify the perfect solution. Our proven development methodology ensures timely delivery and seamless integration, allowing you to focus on what matters most—growing your business. From healthcare management systems to educational institution platforms and custom business applications, we've got you covered every step of the way.</p>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-container">
            <div className="why-choose-content">
              <h2>We're the Best Choice for Your Software Needs</h2>
              <p>At TechSolve, we understand that your business is your livelihood, and we're committed to keeping it at its peak. Here's why we're the best choice for all your ERP solution requirements:</p>
            </div>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">1</div>
                <div className="feature-content">
                  <h3>Experienced Developers</h3>
                  <p>Our team is made up of expert and certified developers with extensive experience across various industries.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">2</div>
                <div className="feature-content">
                  <h3>Quality Workmanship</h3>
                  <p>We maintain the highest standards of quality in every line of code, ensuring your solutions are reliable, efficient, and future-proof.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">3</div>
                <div className="feature-content">
                  <h3>Fully Supported</h3>
                  <p>For your peace of mind, our services are fully supported, protecting you and your projects throughout their lifecycle.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-heading">
            <h2>We take pride in the positive impact we've had on our customers.</h2>
          </div>
          
          <div className="testimonials-grid">
            <Testimonial 
              text="I cannot thank the developers at TechSolve for a fantastic job implementing our healthcare ERP system. They impressed me with their exceptional service. From start to finish, the experience was smooth."
              author="Jonathan Lewis"
              position="Hospital Administrator"
              imageSrc="https://img.freepik.com/free-photo/man-talking-with-female-sales-person-car-show-room_1303-17083.jpg?t=st=1742637874~exp=1742641474~hmac=012b22628611f1c42eebf79f9f9695c2415afee5ae0ec6ad884fe00acf49a096&w=996"
            />
            
            <Testimonial 
              text="Our university received a flawless solution before starting the new academic year. The team at TechSolve went beyond our expectations with their exceptional work. There were no hidden fees or unexpected costs, and the pricing was very reasonable."
              author="Laurie Caroline"
              position="University Director"
              imageSrc="https://img.freepik.com/free-photo/man-talking-with-female-sales-person-car-show-room_1303-17083.jpg?t=st=1742637874~exp=1742641474~hmac=012b22628611f1c42eebf79f9f9695c2415afee5ae0ec6ad884fe00acf49a096&w=996"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="scontainer">
          <div className="cta-container">
            <div className="cta-content">
              <h2>Get Your Free Demo Today!</h2>
              <p>Our talented IT and development teams are experienced in the difference our solutions can make.</p>
              <a href="#" className="cta-button">Book Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Testimonial Component
const Testimonial = ({ text, author, position, imageSrc }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">★★★★★</div>
      <div className="testimonial-text">
        <p>{text}</p>
      </div>
      <div className="testimonial-author">
        <div className="author-photo">
          <img src={imageSrc} alt={author} />
        </div>
        <div className="author-info">
          <h4>{author}</h4>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default About;