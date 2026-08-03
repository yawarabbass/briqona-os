import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="dashboard-page">

      {/* =========================================================
          SECTION 01 — SIDEBAR
          START
          ========================================================= */}

      {/* Mobile Hamburger */}
      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setMobileSidebarOpen(true)}
        aria-label="Open navigation"
      >
        ☰
      </button>

      {/* Mobile Overlay */}
      {mobileSidebarOpen && (
        <button
          type="button"
          className="sidebar-overlay"
          onClick={() => setMobileSidebarOpen(false)}
          aria-label="Close navigation overlay"
        />
      )}

      <aside
        className={`dashboard-sidebar ${
          mobileSidebarOpen ? "mobile-sidebar-open" : ""
        }`}
      >

        {/* Sidebar Brand */}
        <div className="sidebar-brand">

          <div className="brand-mark">
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
            aria-label="Close navigation"
          >
            ❌
          </button>

        </div>

        <div className="sidebar-divider" />

        {/* Navigation */}
        <nav className="sidebar-navigation">

          <button className="sidebar-item active">
            <span className="sidebar-icon">⌂</span>
            <span className="sidebar-label">Dashboard</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon purple">✦</span>
            <span className="sidebar-label">AI Command Center</span>
            <span className="sidebar-badge">New</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon yellow">♙</span>
            <span className="sidebar-label">AI Workforce</span>
            <span className="sidebar-arrow">⌄</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon red">◎</span>
            <span className="sidebar-label">Outcome Center</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon cyan">▦</span>
            <span className="sidebar-label">Industries Hub</span>
            <span className="sidebar-arrow">⌄</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon cyan">♟</span>
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
            <span className="sidebar-icon red">◉</span>
            <span className="sidebar-label">Support / Helpdesk</span>
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon blue">✣</span>
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

          <div className="plan-title">CURRENT PLAN</div>

          <div className="plan-main">

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

          <button
            type="button"
            className="upgrade-plan-button"
          >
            <span>Upgrade Plan</span>
            <span>→</span>
          </button>

        </div>

      </aside>

      {/* =========================================================
          SECTION 01 — SIDEBAR
          END

          NEXT SECTION:
          SECTION 02 — HEADER
          YAHAN SE START HOGA
          ========================================================= */}


      {/* =========================================================
          SECTION 02 — HEADER
          START
          ========================================================= */}

      <main className="dashboard-main">

        <div className="section-placeholder">
          SECTION 02 — HEADER
          <span>Next section will be added here.</span>
        </div>

        {/* =======================================================
            SECTION 02 — HEADER
            END

            NEXT SECTION:
            SECTION 03 — HERO / OVERVIEW
            ======================================================= */}

      </main>

    </div>
  );
}

export default Dashboard;
