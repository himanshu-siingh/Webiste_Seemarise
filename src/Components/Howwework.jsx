import React from 'react';
import '../styles/HowItWorksSection.css';

const ExactHowItWorks = () => {
  return (
    <section className="ehiw-container">
      <div className="ehiw-image-side">
        <img 
          src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?t=st=1742577737~exp=1742581337~hmac=745d7d9f2a83754ec29ed7b6d1cee26eee647e546168f35b25e948f648829600&w=996" 
          alt="Team collaborating in office meeting" 
          className="ehiw-image"
        />
      </div>
      
      <div className="ehiw-green-side">
        <div className="ehiw-content-box">
          <h2 className="ehiw-heading">How it works</h2>
          <p className="ehiw-paragraph">
          Find out what to expect from start to finish with your 
            ERP implementation. From initial requirements analysis 
            to system deployment, we provide seamless solutions for 
            schools, healthcare facilities, and businesses. Our custom 
            software development approach ensures your specific needs 
            are met with precision.
          </p>
          <button className="ehiw-button">Our Implementation Process</button>
        </div>
      </div>
    </section>
  );
};

export default ExactHowItWorks;