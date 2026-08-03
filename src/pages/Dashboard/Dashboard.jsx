import React from "react";
import "./Dashboard.css";

function Dashboard() {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  return (
    <div className="dashboard-page">

      {/* Sidebar */}
      <aside
  {mobileSidebarOpen && (
  <button
    type="button"
    className="mobile-sidebar-overlay"
    onClick={() => setMobileSidebarOpen(false)}
    aria-label="Close sidebar"
  />
)}
        <div className="sidebar-content">
          <button
  type="button"
  className="mobile-sidebar-close"
  onClick={() => setMobileSidebarOpen(false)}
  aria-label="Close menu"
>
  ×
</button>
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
    <button
  type="button"
  className="sidebar-item"
  onClick={() => toggleDropdown("workforce")}
>
  <span className="sidebar-icon yellow">♙</span>
  <span>AI Workforce</span>

  <span
    className={`sidebar-arrow ${
      openDropdown === "workforce" ? "arrow-open" : ""
    }`}
  >
    ⌄
  </span>
</button>

{openDropdown === "workforce" && (
  <div className="sidebar-submenu">
    <button type="button">AI Employees</button>
    <button type="button">Teams</button>
    <button type="button">Workforce Tasks</button>
  </div>
)}

  <button className="sidebar-item">
    <span className="sidebar-icon red">◎</span>
    <span>Outcome Center</span>
  </button>
  
  <button
  type="button"
  className="sidebar-item"
  onClick={() => toggleDropdown("industries")}
>
  <span className="sidebar-icon cyan">▦</span>
  <span>Industries Hub</span>

  <span
    className={`sidebar-arrow ${
      openDropdown === "industries" ? "arrow-open" : ""
    }`}
  >
    ⌄
  </span>
</button>

{openDropdown === "industries" && (
  <div className="sidebar-submenu">
    <button type="button">Office</button>
    <button type="button">HR</button>
    <button type="button">Hospital</button>
    <button type="button">Restaurant</button>
    <button type="button">Retail</button>
    <button type="button">Construction</button>
  </div>
)}

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

  <button
    type="button"
    className="mobile-menu-button"
    onClick={() => setMobileSidebarOpen(true)}
    aria-label="Open menu"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

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
