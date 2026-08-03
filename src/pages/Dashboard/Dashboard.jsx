import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  /* =========================================================
     SECTION 01 — SIDEBAR LOGIC START
     ========================================================= */

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown((current) =>
      current === name ? null : name
    );
  };

  const closeSidebar = () => {
    setMobileSidebarOpen(false);
  };

  /* =========================================================
     SECTION 01 — SIDEBAR LOGIC END
     ========================================================= */


  /* =========================================================
     SECTION 01 — SIDEBAR DATA START
     ========================================================= */

  const sidebarItems = [
    { label: "Dashboard", icon: "▦", active: true },
    { label: "AI Command Center", icon: "✦", badge: "NEW" },
    { label: "AI Workforce", icon: "♙", dropdown: "workforce" },
    { label: "Outcome Center", icon: "◎" },
    { label: "Industries Hub", icon: "▦", dropdown: "industries" },
    { label: "CRM", icon: "♙" },
    { label: "Finance", icon: "$" },
    { label: "HR", icon: "♙" },
    { label: "Inventory", icon: "▣" },
    { label: "Projects & Tasks", icon: "☑" },
    { label: "Documents", icon: "▤" },
    { label: "Automation", icon: "ϟ" },
    { label: "Analytics", icon: "▥" },
    { label: "Communication", icon: "▣" },
    { label: "Support / Helpdesk", icon: "◉" },
    { label: "Integrations", icon: "⌘" },
    { label: "Settings", icon: "⚙" },
  ];

  /* =========================================================
     SECTION 01 — SIDEBAR DATA END
     ========================================================= */


  return (
    <div className="dashboard-page">

      {/* =====================================================
          SECTION 01 — MOBILE OPEN BUTTON START
          ===================================================== */}

      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setMobileSidebarOpen(true)}
        aria-label="Open navigation"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* =====================================================
          SECTION 01 — MOBILE OPEN BUTTON END
          ===================================================== */}


      {/* =====================================================
          SECTION 01 — MOBILE OVERLAY START
          ===================================================== */}

      {mobileSidebarOpen && (
        <button
          type="button"
          className="sidebar-overlay"
          onClick={closeSidebar}
          aria-label="Close navigation"
        />
      )}

      {/* =====================================================
          SECTION 01 — MOBILE OVERLAY END
          ===================================================== */}


      {/* =====================================================
          SECTION 01 — SIDEBAR START
          ===================================================== */}

      <aside
        className={`dashboard-sidebar ${
          mobileSidebarOpen ? "sidebar-mobile-open" : ""
        }`}
      >

        {/* -----------------------------------------------------
            SIDEBAR BRAND
            ----------------------------------------------------- */}

        <div className="sidebar-brand">

          <div className="sidebar-brand-mark">
            <span className="brand-mark-shape">B</span>
          </div>

          <div className="sidebar-brand-copy">
            <div className="sidebar-brand-name">
              BRIQONA
            </div>

            <div className="sidebar-brand-subtitle">
              BUSINESS OPERATING SYSTEM
            </div>
          </div>

          {/* Mobile close button */}
          <button
            type="button"
            className="mobile-sidebar-close"
            onClick={closeSidebar}
            aria-label="Close sidebar"
          >
            <span>×</span>
          </button>

        </div>


        {/* -----------------------------------------------------
            SIDEBAR NAVIGATION
            ----------------------------------------------------- */}

        <nav className="sidebar-navigation">

          {sidebarItems.map((item) => (
            <React.Fragment key={item.label}>

              <button
                type="button"
                className={`sidebar-nav-item ${
                  item.active ? "sidebar-nav-active" : ""
                }`}
                onClick={() => {
                  if (item.dropdown) {
                    toggleDropdown(item.dropdown);
                  }
                }}
              >

                <span className="sidebar-nav-icon">
                  {item.icon}
                </span>

                <span className="sidebar-nav-label">
                  {item.label}
                </span>

                {item.badge && (
                  <span className="sidebar-nav-badge">
                    {item.badge}
                  </span>
                )}

                {item.dropdown && (
                  <span
                    className={`sidebar-nav-chevron ${
                      openDropdown === item.dropdown
                        ? "chevron-open"
                        : ""
                    }`}
                  >
                    ›
                  </span>
                )}

              </button>


              {/* -------------------------------------------------
                  AI WORKFORCE DROPDOWN
                  ------------------------------------------------- */}

              {item.dropdown === "workforce" &&
                openDropdown === "workforce" && (
                  <div className="sidebar-submenu">

                    <button type="button">
                      AI Employees
                    </button>

                    <button type="button">
                      Workforce Overview
                    </button>

                    <button type="button">
                      AI Tasks
                    </button>

                  </div>
                )}


              {/* -------------------------------------------------
                  INDUSTRIES DROPDOWN
                  ------------------------------------------------- */}

              {item.dropdown === "industries" &&
                openDropdown === "industries" && (
                  <div className="sidebar-submenu">

                    <button type="button">
                      Office
                    </button>

                    <button type="button">
                      HR
                    </button>

                    <button type="button">
                      Hospital
                    </button>

                    <button type="button">
                      Restaurant
                    </button>

                    <button type="button">
                      Retail
                    </button>

                    <button type="button">
                      Construction
                    </button>

                    <button type="button">
                      Real Estate
                    </button>

                    <button type="button">
                      Education
                    </button>

                  </div>
                )}

            </React.Fragment>
          ))}

        </nav>


        {/* -----------------------------------------------------
            CURRENT PLAN
            ----------------------------------------------------- */}

        <div className="sidebar-plan-card">

          <button
            type="button"
            className="sidebar-plan-close"
            aria-label="Hide plan card"
          >
            ×
          </button>

          <div className="sidebar-plan-label">
            CURRENT PLAN
          </div>

          <div className="sidebar-plan-title">
            Growth
          </div>

          <div className="sidebar-plan-price">
            <strong>$15</strong>
            <span>/ month</span>
          </div>

          <div className="sidebar-plan-progress">
            <span></span>
          </div>

          <div className="sidebar-plan-access">
            <span>Access</span>
            <strong>38 / 60</strong>
          </div>

          <button
            type="button"
            className="sidebar-upgrade-button"
          >
            Upgrade Plan
            <span>→</span>
          </button>

        </div>

      </aside>

      {/* =====================================================
          SECTION 01 — SIDEBAR END
          ===================================================== */}


      {/* =====================================================
          SECTION 02 — HEADER WILL START HERE
          DO NOT DELETE
          ===================================================== */}

      <main className="dashboard-main">

        {/* SECTION 02 — HEADER START HERE */}


        {/* SECTION 03 — HERO START HERE */}


        {/* SECTION 04 — KPI START HERE */}


        {/* SECTION 05 — QUICK ACTIONS START HERE */}


        {/* SECTION 06 — AI CENTER START HERE */}


        {/* SECTION 07 — ACTIVITIES START HERE */}


        {/* SECTION 08 — CUSTOMERS / INSIGHTS START HERE */}


        {/* SECTION 09 — RIGHT PANELS START HERE */}


        {/* SECTION 10 — FOOTER START HERE */}

      </main>

    </div>
  );
}

export default Dashboard;
