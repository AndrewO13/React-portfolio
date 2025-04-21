import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempted');
    
    // Call the onLogin function to update authentication state
    if (onLogin) {
      onLogin();
    }
    
    // Redirect to portfolio page
    navigate('/portfolio');
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-page">
      <button className="back-button" onClick={() => navigate('/')}>
        <img src="https://cdn.prod.website-files.com/5c58d24c0c3ff625822bee4b/6265e3642fe049989c180c39_22-closeBtn.svg" alt="Back" />
      </button>
      
      <div className="auth-container">
        <h1>Welcome back!</h1>
        <p className="subtitle">Login and get back to the turf!</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                placeholder="Enter your password" 
                required 
              />
              <button 
                type="button" 
                className="toggle-password" 
                onClick={togglePassword}
              >
                👁️
              </button>
            </div>
          </div>
          
          <div className="forgot-password">
            <a href="#">FORGOT YOUR PASSWORD?</a>
          </div>
          
          <button type="submit" className="auth-button">LOGIN</button>
          
          <div className="auth-link">
            Don't have an account? <a href="/signup">SIGN UP</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 