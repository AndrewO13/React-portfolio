import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Details from './components/Details/Details';
import Results from './components/Results/Results';
import Hobby from './components/Hobby/Hobby';
import Links from './components/Links/Links';
import Career from './components/Career/Career';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <Profile />;
      case 'details':
        return <Details />;
      case 'results':
        return <Results />;
      case 'hobby':
        return <Hobby />;
      case 'links':
        return <Links />;
      case 'career':
        return <Career />;
      default:
        return <Profile />;
    }
  };

  const PortfolioContent = () => (
    <div className="app">
      <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
      <div className="container">
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        <div className="content-area">
          <div className="header-section">
            <h1>Andrew Ogwang</h1>
            <p>Computer Science Student at Uganda Christian University</p>
          </div>
          {renderSection()}
        </div>
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<PortfolioContent />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
