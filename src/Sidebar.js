import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isLoggedIn }) {
  return (
    <aside className="column-left">
      {isLoggedIn && (
        <div className="sidebar-profile">
          <div className="user-avatar-sidebar">A</div>
          <span className="sidebar-username">admin</span>
        </div>
      )}

      <Link to="/" className="nav-item">🏠 Home</Link>
      <Link to="/popular" className="nav-item">🚀 Popular</Link>
      <Link to="/explore" className="nav-item">📈 Explore</Link>

      {isLoggedIn && (
        <>
          <Link to="/community" className="nav-item">👥 Community</Link>
          <Link to="/bookmarks" className="nav-item">🔖 Bookmark</Link>
        </>
      )}

      <div className="resource-header">Resources</div>
      <Link to="/about" className="nav-item">ℹ️ About Us</Link>
      <Link to="/help" className="nav-item">🛠️ Help Center</Link>
    </aside>
  );
}

export default Sidebar;