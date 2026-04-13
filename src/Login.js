import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/'); 
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* The Back Arrow inside the box */}
        <Link to="/" className="back-arrow">←</Link>
        
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>
          <button type="submit" className="auth-btn">Log In</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;