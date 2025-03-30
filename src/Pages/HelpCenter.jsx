import React, { useState } from 'react';
import '../styles/HelpCenter.css';
import ContactUs from '../Components/Contactus';

const HelpCenter = () => {
  // State for FAQ accordion
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Toggle FAQ question
  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  // FAQ data structure
  const faqCategories = [
    {
      category: "School ERP Solutions",
      questions: [
        {
          question: "How do I set up the student attendance module?",
          answer: "To set up the student attendance module, navigate to the Admin Dashboard > Configuration > Attendance Settings. From there, you can customize attendance types, scheduling, and automated notifications. We recommend setting up attendance periods that match your school's schedule for optimal tracking."
        },
        {
          question: "Can parents access their child's academic performance online?",
          answer: "Yes, parents can access their child's academic performance through the Parent Portal. Each parent receives unique login credentials that provide access to their child's grades, attendance records, assignment completion status, and teacher comments. The portal also allows parents to communicate directly with teachers and receive notifications about important school events."
        },
        {
          question: "How do I generate report cards at the end of a term?",
          answer: "To generate report cards, go to the Academics section > Reports > Report Cards. Select the academic term, class or section, and the template you wish to use. You can preview individual student report cards before finalizing them. The system allows for batch generation and digital distribution to parents, or you can print them in various formats."
        }
      ]
    },
    {
      category: "Business ERP Systems",
      questions: [
        {
          question: "How can I integrate our existing accounting software with your ERP?",
          answer: "Our Business ERP system offers several integration options for accounting software. You can use our built-in API connectors for popular accounting platforms like QuickBooks, Xero, and Sage. For custom integrations, our technical team can develop a specialized connector. The process typically takes 2-3 days and ensures seamless data flow between systems without manual data entry."
        },
        {
          question: "What inventory management features are available?",
          answer: "Our inventory management module includes real-time tracking, barcode scanning capabilities, automated reordering, batch tracking, multiple warehouse management, and detailed reporting. You can set up custom alerts for low stock items, track inventory costs with various methods (FIFO, LIFO, weighted average), and generate inventory forecasts based on historical data."
        },
        {
          question: "How secure is the employee data in the HR module?",
          answer: "We implement multiple security measures to protect HR data, including role-based access controls, data encryption at rest and in transit, regular security audits, and compliance with GDPR, HIPAA, and other data protection regulations. All sensitive employee information is compartmentalized with strict access permissions, and our system maintains detailed logs of who accessed what information and when."
        }
      ]
    },
    {
      category: "Healthcare Solutions",
      questions: [
        {
          question: "Is your healthcare ERP HIPAA compliant?",
          answer: "Yes, our healthcare solutions are fully HIPAA compliant. We implement all required technical safeguards including encryption, access controls, audit controls, and integrity controls. Our system includes features for secure authentication, automatic logout, emergency access procedures, and comprehensive audit trails. We also provide HIPAA compliance documentation and Business Associate Agreements (BAA) for our healthcare clients."
        },
        {
          question: "How does the patient scheduling system work?",
          answer: "Our patient scheduling system allows for multi-provider and multi-location appointment booking. It features customizable appointment types, duration settings, recurring appointment options, and waitlist management. Patients can book appointments online through a patient portal, receive automated reminders via SMS or email, and providers can view their schedules across different devices. The system also handles insurance verification prior to appointments."
        },
        {
          question: "Can your system integrate with medical devices and lab equipment?",
          answer: "Yes, our healthcare ERP can integrate with a wide range of medical devices and laboratory equipment through HL7 and FHIR standards. We support connections to vital signs monitors, EKG machines, laboratory analyzers, radiology equipment, and more. The integration allows for direct data transfer into patient records, eliminating manual entry and reducing errors. Custom integrations can also be developed for specialized equipment."
        }
      ]
    },
    {
      category: "Website Development",
      questions: [
        {
          question: "What is your website development process?",
          answer: "Our website development process follows these key stages: 1) Discovery and planning where we gather requirements and create a project roadmap; 2) Design phase with wireframes and visual mockups; 3) Development stage where we build the site with responsive design principles; 4) Content integration; 5) Testing across devices and browsers; 6) Launch with SEO optimization; and 7) Post-launch support and maintenance. The entire process typically takes 4-8 weeks depending on project complexity."
        },
        {
          question: "Do you provide website hosting and maintenance?",
          answer: "Yes, we offer comprehensive hosting and maintenance packages. Our hosting services include secure server infrastructure, daily backups, SSL certificates, and content delivery network (CDN) integration for optimal performance. Our maintenance packages cover regular updates, security patches, performance monitoring, content updates, and technical support. We offer different tiers of service based on your needs and budget."
        },
        {
          question: "Can you integrate e-commerce functionality into my website?",
          answer: "Absolutely! We can integrate full e-commerce functionality using platforms like WooCommerce, Shopify, or custom solutions depending on your needs. Our e-commerce implementations include product catalog management, secure payment processing, inventory tracking, shipping integrations, tax calculations, customer accounts, and detailed analytics. We can also set up features like discount codes, abandoned cart recovery, and product recommendations."
        }
      ]
    },
    {
      category: "Custom Software",
      questions: [
        {
          question: "How long does it take to develop custom software?",
          answer: "The timeline for custom software development varies based on complexity, features, and scope. Typically, small to medium-sized projects take 3-6 months from requirements gathering to deployment. Larger enterprise solutions may take 6-12 months or more. We follow an agile development methodology with bi-weekly sprints, allowing you to see progress throughout the development cycle and provide feedback that shapes the final product."
        },
        {
          question: "What technologies do you use for custom software development?",
          answer: "We work with a range of modern technologies depending on project requirements. For backend development, we commonly use Java, Python, .NET, Node.js, and PHP. Frontend technologies include React, Angular, Vue.js, and native mobile development for iOS and Android. Our database solutions include SQL databases (PostgreSQL, MySQL, SQL Server) and NoSQL options (MongoDB, Firebase). We select the technology stack based on your specific needs, scalability requirements, and long-term maintenance considerations."
        },
        {
          question: "Do you provide documentation and training for custom software?",
          answer: "Yes, comprehensive documentation and training are integral parts of our custom software delivery. We provide technical documentation for system administrators and developers, including architecture diagrams, API documentation, and deployment guides. For end-users, we create user manuals with step-by-step instructions and video tutorials. Our training packages include on-site or virtual sessions, train-the-trainer programs, and ongoing support resources to ensure your team can effectively use and manage the software."
        }
      ]
    }
  ];

  // Popular topics data
  const popularTopics = [
    {
      title: "Getting Started",
      links: [
        "Account setup and configuration",
        "First-time user guide",
        "System requirements",
        "Data migration services"
      ]
    },
    {
      title: "Billing & Subscriptions",
      links: [
        "Understanding your invoice",
        "Payment methods",
        "Subscription management",
        "Upgrade options"
      ]
    },
    {
      title: "Security & Privacy",
      links: [
        "Data protection policies",
        "Two-factor authentication",
        "User access controls",
        "Backup and recovery"
      ]
    },
    {
      title: "Integrations",
      links: [
        "Available API connections",
        "Third-party app integrations",
        "Data synchronization",
        "Custom integration services"
      ]
    }
  ];

  return (
    <div className="hc-container">
      {/* Header Section */}
      <div className="hc-header">
        <div className="hc-inner-container">
          <div className="hc-header-content">
            <h1 className="hc-title">Help Centre</h1>
            <p className="hc-subtitle">Find answers to your questions about our ERP solutions, website development, and custom software services</p>
            <div className="hc-search-box">
              <input type="text" placeholder="Type your questions here..." className="hc-search-input" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="hc-inner-container">
        <div className="hc-categories">
          <div className="hc-cards-grid">
            <div className="hc-card">
              <div className="hc-card-content">
                <h3 className="hc-card-title">School ERP Solutions</h3>
                <p className="hc-card-description">Access guides and FAQs about our school management systems, student portals, and educational tools.</p>
                <a href="#" className="hc-card-link">View resources →</a>
              </div>
            </div>
            
            <div className="hc-card">
              <div className="hc-card-content">
                <h3 className="hc-card-title">Business ERP Systems</h3>
                <p className="hc-card-description">Learn about our enterprise solutions for businesses, including accounting, HR, and inventory management.</p>
                <a href="#" className="hc-card-link">View resources →</a>
              </div>
            </div>
            
            <div className="hc-card">
              <div className="hc-card-content">
                <h3 className="hc-card-title">Healthcare Solutions</h3>
                <p className="hc-card-description">Discover resources for our healthcare management systems, patient portals, and medical record solutions.</p>
                <a href="#" className="hc-card-link">View resources →</a>
              </div>
            </div>
            
            <div className="hc-card">
              <div className="hc-card-content">
                <h3 className="hc-card-title">Website Development</h3>
                <p className="hc-card-description">Get information about our web development services, maintenance, and hosting solutions.</p>
                <a href="#" className="hc-card-link">View resources →</a>
              </div>
            </div>
            
            <div className="hc-card">
              <div className="hc-card-content">
                <h3 className="hc-card-title">Custom Software</h3>
                <p className="hc-card-description">Find answers about our custom software development process, support, and implementation.</p>
                <a href="#" className="hc-card-link">View resources →</a>
              </div>
            </div>
            
            <div className="hc-card">
              <div className="hc-card-content">
                <h3 className="hc-card-title">Technical Support</h3>
                <p className="hc-card-description">Access troubleshooting guides, contact information, and resources for technical issues.</p>
                <a href="#" className="hc-card-link">View resources →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="hc-faq-section">
        <div className="hc-inner-container">
          <h2 className="hc-section-title">Category Wise FAQ's</h2>
          
          <div className="hc-faq-container">
            {faqCategories.map((category, categoryIndex) => (
              <div className="hc-faq-category" key={categoryIndex}>
                <h2 className="hc-category-title">{category.category}</h2>
                
                {category.questions.map((faq, questionIndex) => {
                  const index = categoryIndex * 100 + questionIndex;
                  return (
                    <div className="hc-faq-item" key={questionIndex}>
                      <div 
                        className={`hc-faq-question ${activeQuestion === index ? 'hc-active' : ''}`}
                        onClick={() => toggleQuestion(index)}
                      >
                        {faq.question}
                      </div>
                      <div className={`hc-faq-answer ${activeQuestion === index ? 'hc-show' : ''}`}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Popular Topics Section */}
      <div className="hc-popular-topics">
        <div className="hc-inner-container">
          <h2 className="hc-section-title">Popular Help Topics</h2>
          
          <div className="hc-topics-grid">
            {popularTopics.map((topic, index) => (
              <div className="hc-topic-item" key={index}>
                <h3 className="hc-topic-title">{topic.title}</h3>
                <ul className="hc-topic-list">
                  {topic.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="hc-topic-list-item">
                      <a href="#" className="hc-topic-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactUs/>
    </div>
  );
};

export default HelpCenter;