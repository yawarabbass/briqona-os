import React from "react";

function Topbar() {
  return (
    <header className="topbar">
      <div>
        <div className="topbar-label">BUSINESS OS</div>
        <h1 className="topbar-title">Command Center</h1>
      </div>

      <div className="topbar-actions">
        <button className="icon-button" aria-label="Notifications">
          ◌
        </button>

        <button className="ai-button">
          <span>✦</span>
          BRIQONA AI
        </button>
      </div>
    </header>
  );
}

export default Topbar;
