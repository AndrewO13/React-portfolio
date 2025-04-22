import React from 'react';
import './Hobby.css';

const Hobby = () => {
  return (
    <div className="content-section">
      <h2>Hobby Video</h2>
      <div className="video-container">
        <video controls>
          <source src={process.env.PUBLIC_URL + 'videos/Madhesi.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hobby; 
