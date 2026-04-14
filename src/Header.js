import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotis, setShowNotis] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <header className="navbar">
      <Link to="/" className="logo-text">Webboard</Link>

      {!isAuthPage && (
        <>
          <div className="search-container-header">
            <span>🔍</span>
            <input type="text" className="search-input-header" placeholder="Search Webboard" />
          </div>

          <div className="header-actions">
            {isLoggedIn ? (
              <>
                {/* Notification Icon */}
                <div className="icon-wrapper" onClick={() => { setShowNotis(!showNotis); setShowAccount(false); }}>
                  <span className="header-icon">🔔</span>
                  <span className="icon-badge">4</span>
                  {showNotis && (
                    <div className="header-dropdown">
                      <p className="dropdown-title">Notifications</p>
                      <div className="dropdown-item">Someone liked your post</div>
                      <div className="dropdown-item">New comment on "Hybrid UI"</div>
                    </div>
                  )}
                </div>

                {/* Account Icon */}
                <div className="icon-wrapper" onClick={() => { setShowAccount(!showAccount); setShowNotis(false); }}>
                  <div className="user-avatar-small">A</div>
                  {showAccount && (
                    <div className="header-dropdown">
                      <div className="dropdown-item">⚙️ Settings</div>
                      <div className="dropdown-item">👤 Profile</div>
                      <div className="dropdown-divider"></div>
                      <div className="dropdown-item logout-text" onClick={() => setIsLoggedIn(false)}>
                        🚪 Log Out
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
<button 
  className="login-btn-header" 
  onClick={() => navigate('/login')}
>
  Log In
</button>            )}
          </div>
        </>
      )}
    </header>
  );
}

export default Header;