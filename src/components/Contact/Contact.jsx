import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="content-section">
      <div className="contact-section">
        <img src={process.env.PUBLIC_URL + '/images/contact.jpg'} alt="Contact" />
        <div className="contact-info">
          <h2>Contact Me</h2>
          <p>Email: example@email.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Location: City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact; 