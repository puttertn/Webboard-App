import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Simulating user login status (Change to true to see the logged-in sidebar)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-wrapper">
      <header className="navbar">
        <div className="nav-left">
          <span className="logo-text">Webboard</span>
        </div>
        <div className="nav-center">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input type="text" className="search-bar" placeholder="Search Webboard" />
          </div>
        </div>
        <div className="nav-right">
          {/* Button to toggle state for testing purposes */}
          <button 
            className="login-btn" 
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? 'Log Out' : 'Log In'}
          </button>
        </div>
      </header>

      <div className="grid-container">
        {/* --- DYNAMIC SIDEBAR --- */}
        <aside className="column-left">
          <nav className="side-nav">
            
            {/* 1. Profile (Only for Logged In) */}
            {isLoggedIn && (
              <div className="nav-item"><span>👤</span> Profile</div>
            )}

            {/* 2. Home (Always visible) */}
            <div className="nav-item active"><span>🏠</span> Home</div>

            {/* 3. Explore (Always visible) */}
            <div className="nav-item"><span>📈</span> Explore</div>

            {/* 4. Logged-in Specific Features */}
            {isLoggedIn && (
              <>
                <div className="nav-item"><span>👥</span> Community</div>
                <div className="nav-item"><span>🔖</span> Bookmark</div>
              </>
            )}

            <div className="sidebar-divider"></div>
            
            <div className="section-header">RESOURCES</div>
            <div className="nav-item"><span>ℹ️</span> About</div>
            <div className="nav-item"><span>🛠️</span> Help</div>
          </nav>
        </aside>

        {/* Center Feed */}
        <main className="column-center">
          <div className="discovery-feed-card">
            <h2 className="feed-title">
              {isLoggedIn ? "Your Personalized Feed" : "Discovery Feed"}
            </h2>
            <div className="placeholder-content">
              {isLoggedIn 
                ? "Welcome back! Here are your communities." 
                : "Log in to see your bookmarks and profile!"}
            </div>
          </div>
        </main>

        {/* Right Panel */}
        <aside className="column-right">
          <div className="static-right-panel">
            <p className="section-label">POPULAR COMMUNITIES</p>
            <div className="community-static-text">r/WebDesign</div>
            <div className="community-static-text">r/ReactJS</div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;