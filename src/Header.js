import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation(); // This tells us which page we are on

  // Define which paths should have a "Minimal" header
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <header className="navbar">
      <Link to="/" className="logo-text">Webboard</Link>

      {/* Only show Search and Button if NOT on Login/Register pages */}
      {!isAuthPage && (
        <>
          <div style={{ 
            background: '#F0F2F5', 
            borderRadius: '20px', 
            padding: '0 15px', 
            display: 'flex', 
            alignItems: 'center', 
            width: '400px', 
            height: '40px' 
          }}>
            <span style={{ color: '#878a8c' }}>🔍</span>
            <input 
              type="text" 
              style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', paddingLeft: '10px' }} 
              placeholder="Search Webboard" 
            />
          </div>

          <button 
            className="login-btn" 
            style={{ 
              background: '#FF4500', 
              color: 'white', 
              border: 'none', 
              padding: '8px 20px', 
              borderRadius: '20px', 
              fontWeight: '700', 
              height: '40px',
              cursor: 'pointer' 
            }} 
            onClick={() => isLoggedIn ? setIsLoggedIn(false) : navigate('/login')}
          >
            {isLoggedIn ? 'Log Out' : 'Log In'}
          </button>
        </>
      )}
    </header>
  );
}

export default Header;