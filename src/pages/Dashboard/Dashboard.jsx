import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-content">
          <div className="sidebar-brand">
  <div className="sidebar-logo">
    <span>◆</span>
  </div>

  <div className="sidebar-brand-text">
    <strong>BRIQONA OS</strong>
    <small>All-in-One Business Operating System</small>
  </div>
</div>

<nav className="sidebar-nav">

  <button className="sidebar-item active">
    <span className="sidebar-icon">⌂</span>
    <span>Dashboard</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon purple">✦</span>
    <span>AI Command Center</span>
    <span className="sidebar-badge">New</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon yellow">♙</span>
    <span>AI Workforce</span>
    <span className="sidebar-arrow">⌄</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon red">◎</span>
    <span>Outcome Center</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon cyan">▦</span>
    <span>Industries Hub</span>
    <span className="sidebar-arrow">⌄</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon cyan">♟</span>
    <span>CRM</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon green">$</span>
    <span>Finance</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon blue">♙</span>
    <span>HR</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon orange">▣</span>
    <span>Inventory</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon purple">☑</span>
    <span>Projects &amp; Tasks</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon cyan">▤</span>
    <span>Documents</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon yellow">ϟ</span>
    <span>Automation</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon green">▥</span>
    <span>Analytics</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon cyan">▣</span>
    <span>Communication</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon red">◉</span>
    <span>Support / Helpdesk</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon blue">⌘</span>
    <span>Integrations</span>
  </button>

  <button className="sidebar-item">
    <span className="sidebar-icon gray">⚙</span>
    <span>Settings</span>
  </button>

</nav>

<div className="sidebar-plan">

  <button className="plan-close" type="button">
    ×
  </button>

  <div className="plan-icon">◇</div>

  <div className="plan-label">Current Plan</div>

  <div className="plan-name">Growth</div>

  <div className="plan-price">
    <strong>$15</strong> / month
  </div>

  <button className="upgrade-button" type="button">
    <span>Upgrade Plan</span>
    <span>→</span>
  </button>

</div>
        </div>
      </aside>

      {/* Main Area */}
      <div className="dashboard-main">

        {/* Header */}
        <header className="dashboard-header">
          {/* Header will be built in Step 3 */}
        </header>

        {/* Dashboard Content */}
        <main className="dashboard-content">

          {/* Dashboard sections will be added one-by-one */}

        </main>

        {/* Footer */}
        <footer className="dashboard-footer">
          <span>© 2026 Briqona OS. All rights reserved.</span>
          <span>Version 1.0.0</span>

          <div>
            <button type="button">Privacy Policy</button>
            <button type="button">Terms of Service</button>
            <button type="button">Support</button>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default Dashboard;
