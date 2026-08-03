import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="dashboard-page">

      {/* =========================================================
          SECTION 1 START — SIDEBAR
          Next section will be added AFTER this exact marker.
          ========================================================= */}

      {/* Mobile Hamburger */}
      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setMobileSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        ☰
      </button>

      {/* Mobile Overlay */}
      {mobileSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      <aside
        className={`dashboard-sidebar ${
          mobileSidebarOpen ? "mobile-sidebar-open" : ""
        }`}
      >

        {/* Sidebar Header */}
        <div className="sidebar-brand">

          <div className="brand-logo">
            <span>◆</span>
          </div>

          <div className="brand-text">
            <strong>BRIQONA OS</strong>
            <small>All-in-One Business Operating System</small>
          </div>

          {/* Mobile Close */}
          <button
            type="button"
            className="mobile-close-button"
            onClick={() => setMobileSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            ✕
          </button>

        </div>

        <div className="sidebar-divider" />

        {/* Navigation */}
        <nav className="sidebar-navigation">

          <button className="sidebar-item active">
            <span className="sidebar-icon cyan">⌂</span>
            <span className="sidebar-label">Dashboard</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon purple">✦</span>
            <span className="sidebar-label">AI Command Center</span>
            <span className="new-badge">New</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon yellow">♙</span>
            <span className="sidebar-label">AI Workforce</span>
            <span className="dropdown-arrow">⌄</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon red">◎</span>
            <span className="sidebar-label">Outcome Center</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon cyan">▦</span>
            <span className="sidebar-label">Industries Hub</span>
            <span className="dropdown-arrow">⌄</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon teal">♟</span>
            <span className="sidebar-label">CRM</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon green">$</span>
            <span className="sidebar-label">Finance</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon blue">♙</span>
            <span className="sidebar-label">HR</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon orange">▣</span>
            <span className="sidebar-label">Inventory</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon purple">☑</span>
            <span className="sidebar-label">Projects &amp; Tasks</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon cyan">▤</span>
            <span className="sidebar-label">Documents</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon yellow">ϟ</span>
            <span className="sidebar-label">Automation</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon green">▥</span>
            <span className="sidebar-label">Analytics</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon cyan">▣</span>
            <span className="sidebar-label">Communication</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon red">♧</span>
            <span className="sidebar-label">Support / Helpdesk</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon blue">⌘</span>
            <span className="sidebar-label">Integrations</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon gray">⚙</span>
            <span className="sidebar-label">Settings</span>
          </button>

        </nav>

        {/* Current Plan */}
        <div className="current-plan-card">

          <button
            type="button"
            className="plan-close"
            aria-label="Close plan card"
          >
            ×
          </button>

          <div className="plan-heading">Current Plan</div>

          <div className="plan-info">

            <div className="plan-icon">
              ◇
            </div>

            <div>
              <span className="plan-small">Current Plan</span>
              <strong>Growth</strong>
            </div>

          </div>

          <div className="plan-price">
            <strong>$15</strong>
            <span>/ month</span>
          </div>

          <button type="button" className="upgrade-button">
            <span>Upgrade Plan</span>
            <span className="upgrade-arrow">→</span>
          </button>

        </div>

      </aside>

      {/* =========================================================
          SECTION 1 END — SIDEBAR

          NEXT STEP:
          SECTION 2 — HEADER
          will be added BELOW this line.
          ========================================================= */}

    </div>
  );
}

export default Dashboard;
