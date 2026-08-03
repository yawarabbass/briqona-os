import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  /* =========================================================
     SECTION 01 — SIDEBAR START
     Mobile sidebar:
     ☰ = Open
     ❌ = Close
     ========================================================= */

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState({
    workforce: false,
    industries: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
  };

  const sidebarItems = [
    {
      icon: "⌂",
      label: "Dashboard",
      active: true,
    },
    {
      icon: "✦",
      label: "AI Command Center",
      badge: "New",
    },
    {
      icon: "♙",
      label: "AI Workforce",
      dropdown: "workforce",
    },
    {
      icon: "◎",
      label: "Outcome Center",
    },
    {
      icon: "▦",
      label: "Industries Hub",
      dropdown: "industries",
    },
    {
      icon: "♟",
      label: "CRM",
    },
    {
      icon: "$",
      label: "Finance",
    },
    {
      icon: "♙",
      label: "HR",
    },
    {
      icon: "▣",
      label: "Inventory",
    },
    {
      icon: "☑",
      label: "Projects & Tasks",
    },
    {
      icon: "▤",
      label: "Documents",
    },
    {
      icon: "ϟ",
      label: "Automation",
    },
    {
      icon: "▥",
      label: "Analytics",
    },
    {
      icon: "▣",
      label: "Communication",
    },
    {
      icon: "◉",
      label: "Support / Helpdesk",
    },
    {
      icon: "⌘",
      label: "Integrations",
    },
    {
      icon: "⚙",
      label: "Settings",
    },
  ];

  /* =========================================================
     SECTION 01 — SIDEBAR END
     ========================================================= */


  /* =========================================================
     SECTION 02 — DASHBOARD SHELL START

     NEXT STEP WILL BE PASTED HERE:
     Header
     ========================================================= */

  return (
    <div className="dashboard-page">

      {/* =====================================================
          MOBILE MENU BUTTON
          SECTION 01 — SIDEBAR START
          ===================================================== */}

      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setMobileSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        ☰
      </button>

      {/* Mobile dark overlay */}
      {mobileSidebarOpen && (
        <button
          type="button"
          className="sidebar-overlay"
          onClick={closeMobileSidebar}
          aria-label="Close sidebar"
        />
      )}

      {/* =====================================================
          SIDEBAR
          SECTION 01 — SIDEBAR START
          ===================================================== */}

      <aside
        className={`dashboard-sidebar ${
          mobileSidebarOpen ? "mobile-sidebar-open" : ""
        }`}
      >

        {/* Sidebar Header */}
        <div className="sidebar-brand">

          <div className="sidebar-brand-logo">
            <span>◇</span>
          </div>

          <div className="sidebar-brand-text">
            <strong>BRIQONA OS</strong>
            <small>All-in-One Business Operating System</small>
          </div>

          {/* Mobile Close Button */}
          <button
            type="button"
            className="mobile-sidebar-close"
            onClick={closeMobileSidebar}
            aria-label="Close sidebar"
          >
            ❌
          </button>

        </div>


        {/* Sidebar Navigation */}
        <nav className="sidebar-navigation">

          {sidebarItems.map((item, index) => {

            const hasDropdown = Boolean(item.dropdown);

            return (
              <React.Fragment key={`${item.label}-${index}`}>

                <button
                  type="button"
                  className={`sidebar-nav-item ${
                    item.active ? "active" : ""
                  }`}
                  onClick={() => {
                    if (hasDropdown) {
                      toggleMenu(item.dropdown);
                    }

                    if (window.innerWidth <= 900) {
                      if (!hasDropdown) {
                        closeMobileSidebar();
                      }
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

                  {hasDropdown && (
                    <span
                      className={`sidebar-dropdown-arrow ${
                        openMenu[item.dropdown] ? "open" : ""
                      }`}
                    >
                      ˅
                    </span>
                  )}

                </button>


                {/* AI Workforce Dropdown */}
                {item.dropdown === "workforce" &&
                  openMenu.workforce && (
                    <div className="sidebar-submenu">

                      <button type="button" className="sidebar-submenu-item">
                        AI Employees
                      </button>

                      <button type="button" className="sidebar-submenu-item">
                        Workforce Overview
                      </button>

                      <button type="button" className="sidebar-submenu-item">
                        AI Tasks
                      </button>

                    </div>
                  )}


                {/* Industries Dropdown */}
                {item.dropdown === "industries" &&
                  openMenu.industries && (
                    <div className="sidebar-submenu">

                      <button type="button" className="sidebar-submenu-item">
                        Office
                      </button>

                      <button type="button" className="sidebar-submenu-item">
                        HR
                      </button>

                      <button type="button" className="sidebar-submenu-item">
                        Hospital
                      </button>

                      <button type="button" className="sidebar-submenu-item">
                        Restaurant
                      </button>

                      <button type="button" className="sidebar-submenu-item">
                        Retail
                      </button>

                      <button type="button" className="sidebar-submenu-item">
                        Construction
                      </button>

                    </div>
                  )}

              </React.Fragment>
            );
          })}

        </nav>


        {/* ===================================================
            CURRENT PLAN CARD
            =================================================== */}

        <div className="sidebar-plan-card">

          <button
            type="button"
            className="sidebar-plan-close"
            aria-label="Close plan card"
          >
            ×
          </button>

          <div className="sidebar-plan-icon">
            ◇
          </div>

          <div className="sidebar-plan-small">
            Current Plan
          </div>

          <div className="sidebar-plan-name">
            Growth
          </div>

          <div className="sidebar-plan-price">
            <strong>$15</strong> / month
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
          SECTION 02 — MAIN AREA START

          NEXT STEP:
          Header code will be inserted HERE.

          DO NOT DELETE THIS COMMENT.
          ===================================================== */}

      <div className="dashboard-main">

        {/* SECTION 02 HEADER WILL START HERE */}


        {/* ===================================================
            SECTION 03 WILL START HERE
            HERO / WELCOME
            =================================================== */}


        {/* ===================================================
            SECTION 04 WILL START HERE
            KPI CARDS
            =================================================== */}


        {/* ===================================================
            SECTION 05 WILL START HERE
            QUICK ACTIONS
            =================================================== */}


        {/* ===================================================
            SECTION 06 WILL START HERE
            AI COMMAND CENTER + AI MISSIONS
            =================================================== */}


        {/* ===================================================
            SECTION 07 WILL START HERE
            RECENT ACTIVITIES + NOTIFICATIONS
            =================================================== */}


        {/* ===================================================
            SECTION 08 WILL START HERE
            TOP CUSTOMERS + AI INSIGHTS
            =================================================== */}


        {/* ===================================================
            SECTION 09 WILL START HERE
            PACKAGE & ACCESS + INDUSTRIES HUB
            =================================================== */}


        {/* ===================================================
            SECTION 10 WILL START HERE
            FOOTER
            =================================================== */}

      </div>

      {/* =====================================================
          SECTION 02 — MAIN AREA END
          ===================================================== */}

    </div>
  );
}

export default Dashboard;
