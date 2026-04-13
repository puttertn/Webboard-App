import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isLoggedIn }) {
  return (
<aside className="column-left">
  <div className="nav-item">🏠 Home</div>
  <div className="nav-item">📈 Explore</div>
  
  {/* The line will appear directly above this div */}
  <div className="resource-header">Resources</div>
  
  <div className="nav-item">ℹ️ About Us</div>
  <div className="nav-item">🛠️ Help Center</div>
</aside>
  );
}

export default Sidebar;