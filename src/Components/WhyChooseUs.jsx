import React, { useEffect } from 'react';
import '../styles/WhyChooseUs.css';

function WhyChooseUsSection() {
  useEffect(() => {
    const iconBoxes = document.querySelectorAll('.icon-box');
    
    const divider = document.querySelector('.why-choose-us-divider');
    const mainTitle = document.querySelector('.why-choose-us-main-title');
    
    if (divider) {
      setTimeout(() => {
        divider.classList.add('animate-slide-in');
      }, 300);
    }
    
    if (mainTitle) {
      setTimeout(() => {
        mainTitle.classList.add('animate-fade-in');
      }, 600);
    }
    
    iconBoxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add('animate-pop-in');
      }, 900 + (index * 200));
    });
    
    iconBoxes.forEach(box => {
      const circle = box.querySelector('.icon-circle');
      if (circle) {
        box.addEventListener('mouseenter', () => {
          circle.classList.add('animate-pulse');
        });
        box.addEventListener('mouseleave', () => {
          circle.classList.remove('animate-pulse');
        });
      }
    });
    
    return () => {
      iconBoxes.forEach(box => {
        const circle = box.querySelector('.icon-circle');
        if (circle) {
          box.removeEventListener('mouseenter', () => {});
          box.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, []);

  return (
    <div className='why-choose-us-container'>
      <div className='why-choose-us-header'>
        <div className='why-choose-us-divider'>
          <span className='divider-segment teal'></span>
          <span className='divider-segment blue-light'></span>
          <span className='divider-segment blue'></span>
          <span className='divider-segment purple'></span>
        </div>
      </div>

      <div className='why-choose-us-main'>
        <h2 className='why-choose-us-main-title'>WHY CHOOSE US</h2>

        <div className='why-choose-us-icons-container'>
          <div className='icon-box'>
            <div className='icon-circle'>
              <i className='fas fa-thumbs-up fa-3x'></i> {/* Font Awesome Thumbs Up Icon */}
            </div>
            <h3 className='icon-title'>Quality</h3>
            <p className='icon-description'>
              Our healthcare ERP solutions are built with the highest quality standards, ensuring seamless integration with existing systems and compliance with all healthcare regulations and data protection laws.
            </p>
          </div>

          <div className='icon-box'>
            <div className='icon-circle'>
              <i className='fas fa-users fa-3x'></i> {/* Font Awesome People Icon */}
            </div>
            <h3 className='icon-title'>Personnel</h3>
            <p className='icon-description'>
              Our team consists of ERP specialists with deep expertise in education systems, enabling schools to optimize administration, student management, and resource allocation with personalized support.
            </p>
          </div>

          <div className='icon-box'>
            <div className='icon-circle'>
              <i className='fas fa-bullseye fa-3x'></i> {/* Font Awesome Target Icon */}
            </div>
            <h3 className='icon-title'>Innovation</h3>
            <p className='icon-description'>
              We continuously evolve our business ERP solutions with cutting-edge technologies, providing companies with innovative tools for inventory management, financial tracking, and business intelligence.
            </p>
          </div>

          <div className='icon-box'>
            <div className='icon-circle'>
              <i className='fas fa-heart fa-3x'></i> {/* Font Awesome Heart Icon */}
            </div>
            <h3 className='icon-title'>Commitment</h3>
            <p className='icon-description'>
              We're committed to long-term partnerships with our clients across healthcare, education, and corporate sectors, providing ongoing support, training, and system optimization to ensure your ERP success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUsSection;
