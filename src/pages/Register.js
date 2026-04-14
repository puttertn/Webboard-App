import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Account created! Please log in.");
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* The Back Arrow inside the Registration box */}
        <Link to="/" className="back-arrow">←</Link>
        
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email address" required />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Choose a username" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create password" required />
          </div>
          <button type="submit" className="auth-btn">Register</button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;