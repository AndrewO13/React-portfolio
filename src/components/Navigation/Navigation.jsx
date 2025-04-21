import React from 'react';
import './Navigation.css';

const Navigation = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'profile', label: 'Profile picture' },
    { id: 'details', label: 'Personal details' },
    { id: 'hobby', label: 'Hobby' },
    { id: 'results', label: 'Results 1:1' },
    { id: 'links', label: 'Links & Contact' },
    { id: 'career', label: 'Career Goals' }
  ];

  return (
    <div className="nav-buttons">
      {sections.map(section => (
        <button
          key={section.id}
          className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
          onMouseEnter={() => onSectionChange(section.id)}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
};

export default Navigation; 