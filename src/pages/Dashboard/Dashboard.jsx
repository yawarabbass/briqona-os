import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [workforceOpen, setWorkforceOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
  };

  return (
    <div className="dashboard-page">

      {/* =========================================================
          SECTION 01 — SIDEBAR START
          ========================================================= */}

      {/* MOBILE HAMBURGER */}
      <button
        className="mobile-menu-button"
        type="button"
        onClick={() => setMobileSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        ☰
      </button>

      {/* MOBILE OVERLAY */}
      {mobileSidebarOpen && (
        <button
          className="sidebar-overlay"
          type="button"
          aria-label="Close sidebar"
          onClick={closeMobileSidebar}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`dashboard-sidebar ${
          mobileSidebarOpen ? "mobile-sidebar-open" : ""
        }`}
      >

        {/* MOBILE CLOSE BUTTON */}
        <button
          className="mobile-sidebar-close"
          type="button"
          onClick={closeMobileSidebar}
          aria-label="Close sidebar"
        >
          ❌
        </button>

        {/* BRAND */}
        <div className="sidebar-brand">

          <div className="brand-logo">
            <span className="brand-logo-inner">◆</span>
          </div>

          <div className="brand-text">
            <div className="brand-name">BRIQONA OS</div>
            <div className="brand-tagline">
              All-in-One Business Operating System
            </div>
          </div>

        </div>

        {/* MENU */}
        <nav className="sidebar-navigation">

          {/* Dashboard */}
          <button
            type="button"
            className="sidebar-item active"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon">⌂</span>
            <span className="sidebar-label">Dashboard</span>
          </button>

          {/* AI Command Center */}
          <button
            type="button"
            className="sidebar-item"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon purple">✦</span>
            <span className="sidebar-label">AI Command Center</span>
            <span className="sidebar-new">New</span>
          </button>

          {/* AI Workforce */}
          <button
            type="button"
            className="sidebar-item"
            onClick={() => setWorkforceOpen(!workforceOpen)}
          >
            <span className="sidebar-icon yellow">♙</span>
            <span className="sidebar-label">AI Workforce</span>
            <span
              className={`sidebar-arrow ${
                workforceOpen ? "arrow-open" : ""
              }`}
            >
              ⌄
            </span>
          </button>

          {workforceOpen && (
            <div className="sidebar-submenu">
              <button type="button" onClick={closeMobileSidebar}>
                AI Employees
              </button>
              <button type="button" onClick={closeMobileSidebar}>
                Workforce Planning
              </button>
              <button type="button" onClick={closeMobileSidebar}>
                Performance
              </button>
            </div>
          )}

          {/* Outcome Center */}
          <button
            type="button"
            className="sidebar-item"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon red">◎</span>
            <span className="sidebar-label">Outcome Center</span>
          </button>

          {/* Industries Hub */}
          <button
            type="button"
            className="sidebar-item"
            onClick={() => setIndustriesOpen(!industriesOpen)}
          >
            <span className="sidebar-icon cyan">▦</span>
            <span className="sidebar-label">Industries Hub</span>
            <span
              className={`sidebar-arrow ${
                industriesOpen ? "arrow-open" : ""
              }`}
            >
              ⌄
            </span>
          </button>

          {industriesOpen && (
            <div className="sidebar-submenu">
              <button type="button" onClick={closeMobileSidebar}>
                Office
              </button>
              <button type="button" onClick={closeMobileSidebar}>
                HR
              </button>
              <button type="button" onClick={closeMobileSidebar}>
                Hospital
              </button>
              <button type="button" onClick={closeMobileSidebar}>
                Restaurant
              </button>
              <button type="button" onClick={closeMobileSidebar}>
                Retail
              </button>
              <button type="button" onClick={closeMobileSidebar}>
                Construction
              </button>
            </div>
          )}

          {/* CRM */}
          <button
            type="button"
            className="sidebar-item"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon cyan">♟</span>
            <span className="sidebar-label">CRM</span>
          </button>

          {/* Finance */}
          <button
            type="button"
            className="sidebar-item"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon green">$</span>
            <span className="sidebar-label">Finance</span>
          </button>

          {/* HR */}
          <button
            type="button"
            className="sidebar-item"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon blue">♙</span>
            <span className="sidebar-label">HR</span>
          </button>

          {/* Inventory */}
          <button
            type="button"
            className="sidebar-item"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon orange">▣</span>
            <span className="sidebar-label">Inventory</span>
          </button>

          {/* Projects */}
          <button
            type="button"
            className="sidebar-item"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon purple">☑</span>
            <span className="sidebar-label">Projects & Tasks</span>
          </button>

          {/* Documents */}
          <button
            type="button"
            className="sidebar-item"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon cyan">▤</span>
            <span className="sidebar-label">Documents</span>
          </button>

          {/* Automation */}
          <button
            type="button"
            className="sidebar-item"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon yellow">ϟ</span>
            <span className="sidebar-label">Automation</span>
          </button>

          {/* Analytics */}
          <button
            type="button"
            className="sidebar-item"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon green">▥</span>
            <span className="sidebar-label">Analytics</span>
          </button>

          {/* Communication */}
          <button
            type="button"
            className="sidebar-item"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon cyan">▣</span>
            <span className="sidebar-label">Communication</span>
          </button>

          {/* Support */}
          <button
            type="button"
            className="sidebar-item"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon red">●</span>
            <span className="sidebar-label">Support / Helpdesk</span>
          </button>

          {/* Integrations */}
          <button
            type="button"
            className="sidebar-item"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon blue">✣</span>
            <span className="sidebar-label">Integrations</span>
          </button>

          {/* Settings */}
          <button
            type="button"
            className="sidebar-item"
            onClick={closeMobileSidebar}
          >
            <span className="sidebar-icon gray">⚙</span>
            <span className="sidebar-label">Settings</span>
          </button>

        </nav>

        {/* CURRENT PLAN */}
        <div className="current-plan-card">

          <button
            type="button"
            className="plan-close"
            aria-label="Close plan card"
          >
            ×
          </button>

          <div className="plan-small-title">
            CURRENT PLAN
          </div>

          <div className="plan-row">

            <div className="plan-diamond">
              ◇
            </div>

            <div>
              <div className="plan-label">
                Current Plan
              </div>

              <div className="plan-name">
                Growth
              </div>
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
            Upgrade Plan
            <span>→</span>
          </button>

        </div>

      </aside>

      {/* =========================================================
          SECTION 01 — SIDEBAR END
          ========================================================= */}


      {/* =========================================================
          NEXT SECTION LOCATION
          SECTION 02 — HEADER WILL BE ADDED HERE
          ========================================================= */}

      <main className="dashboard-main">

        <div className="next-section-placeholder">
          <span>SECTION 02 — HEADER</span>
          <small>
            Next section will be added here.
          </small>
        </div>

      </main>

    </div>
  );
}

export default Dashboard;
