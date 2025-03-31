import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetailPage.css';
import servicesData from './servicesData.json';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = servicesData.find(item => item.slug === slug);

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service not found</h2>
        <Link to="/services" className="back-link">Back to Services</Link>
      </div>
    );
  }

  const { title, image, detailContent } = service;
  const { intro, sections, cta } = detailContent;

  return (
    <div className="service-detail-page">
      <div className="service-detail-header">
        <h1 className="service-detail-title">{title}</h1>
        <Link to="/services" className="back-to-services">Back to Services</Link>
      </div>

      <div className="service-detail-hero">
        <img src={image} alt={title} className="service-detail-image" />
      </div>

      <div className="service-detail-content">
        <p className="service-intro">{intro}</p>

        <div className="service-sections">
          {sections.map((section, index) => (
            <div className="service-section-detail" key={index}>
              <h2 className="section-title">{section.title}</h2>
              <p className="section-content">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="service-cta">
          <p>{cta}</p>
          <button className="contact-button">Contact Us Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;