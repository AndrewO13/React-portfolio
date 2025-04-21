import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // Add your signup logic here
    console.log('Signup attempted');
    
    // For demo purposes, we'll just redirect to login
    // In a real app, you would create the account and then log in
    navigate('/login');
  };

  const togglePassword = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="auth-page">
      <button className="back-button" onClick={() => navigate('/')}>
        <img src="https://cdn.prod.website-files.com/5c58d24c0c3ff625822bee4b/6265e3642fe049989c180c39_22-closeBtn.svg" alt="Back" />
      </button>
      
      <div className="auth-container">
        <h1>Create Account</h1>
        <p className="subtitle">Join the community today!</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" placeholder="Enter your full name" required />
          </div>

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
                placeholder="Create a password" 
                required 
              />
              <button 
                type="button" 
                className="toggle-password" 
                onClick={() => togglePassword('password')}
              >
                👁️
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="password-input-container">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                id="confirm-password" 
                placeholder="Confirm your password" 
                required 
              />
              <button 
                type="button" 
                className="toggle-password" 
                onClick={() => togglePassword('confirm')}
              >
                👁️
              </button>
            </div>
          </div>
          
          <button type="submit" className="auth-button">SIGN UP</button>
          
          <div className="terms">
            By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </div>

          <div className="auth-link">
            Already have an account? <a href="/login">LOGIN</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup; 