import React from 'react';

function RightPanel() {
  return (
    <aside className="column-right">
      <div style={{ padding: '10px' }}>
        <p style={{ fontSize: '13px', fontWeight: '700', color: '#65676B' }}>POPULAR TOPICS</p>
        <div className="nav-item">#Technology</div>
        <div className="nav-item">#Design</div>
        <div className="nav-item">#Programming</div>
      </div>
    </aside>
  );
}

export default RightPanel;