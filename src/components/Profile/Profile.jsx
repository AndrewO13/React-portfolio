import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="content-section">
      <div className="profile-section">
        <img src={process.env.PUBLIC_URL + '/images/YoungM.E.jpg'} alt="Andrew" />
      </div>
    </div>
  );
};

export default Profile; 
