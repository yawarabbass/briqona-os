import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
  };

  const menuItems = [
    { icon: "⌂", label: "Dashboard" },
    { icon: "✦", label: "AI Command Center", badge: "New" },
    { icon: "♙", label: "AI Workforce", dropdown: "workforce" },
    { icon: "◎", label: "Outcome Center" },
    { icon: "▦", label: "Industries Hub", dropdown: "industries" },
    { icon: "♟", label: "CRM" },
    { icon: "$", label: "Finance" },
    { icon: "♙", label: "HR" },
    { icon: "▣", label: "Inventory" },
    { icon: "☑", label: "Projects & Tasks" },
    { icon: "▤", label: "Documents" },
    { icon: "ϟ", label: "Automation" },
    { icon: "▥", label: "Analytics" },
    { icon: "▣", label: "Communication" },
    { icon: "◉", label: "Support / Helpdesk" },
    { icon: "⌘", label: "Integrations" },
    { icon: "⚙", label: "Settings" },
  ];

  const workforceItems = [
    "AI Employees",
    "Teams",
    "Workforce Tasks",
  ];

  const industryItems = [
    "Office",
    "HR",
    "Hospital",
    "Restaurant",
    "Retail",
    "Construction",
  ];

  const quickActions = [
    ["$", "New Invoice"],
    ["♙", "New Lead"],
    ["▤", "New Expense"],
    ["☑", "New Task"],
    ["♙", "Add Employee"],
    ["♙", "Add Customer"],
    ["▦", "More Actions"],
  ];

  const activities = [
    ["▤", "Invoice #INV-2026-1256 created", "2 min ago"],
    ["$", "Payment received from Ahmed Co.", "18 min ago"],
    ["♙", "New lead from Website", "45 min ago"],
    ["✓", 'Task "Follow up with client"', "1 hour ago"],
    ["▤", "Expense $250 added", "2 hours ago"],
  ];

  const notifications = [
    ["●", "Overdue invoice from Al Traders", "2 min ago"],
    ["▲", "Low stock alert for 3 products", "25 min ago"],
    ["♙", "Leave request from Sara Khan", "1 hour ago"],
    ["▣", "System backup completed", "2 hours ago"],
  ];

  const customers = [
    ["A", "Ahmed Corporation", "$5,780"],
    ["G", "Global Solutions", "$4,230"],
    ["T", "TechNova LLC", "$3,620"],
    ["A", "Al-Barakat Traders", "$2,890"],
    ["F", "Future Enterprises", "$2,450"],
  ];

  const missions = [
    ["◎", "Recover overdue payments", "In Progress", "65%"],
    ["◎", "Increase this month sales", "In Progress", "40%"],
    ["▣", "Reduce expenses", "Planned", "20%"],
  ];

  return (
    <div className="dashboard-page">

      {/* =====================================================
          MOBILE SIDEBAR OVERLAY
          ===================================================== */}

      {mobileSidebarOpen && (
        <button
          type="button"
          className="mobile-sidebar-overlay"
          onClick={closeMobileSidebar}
          aria-label="Close sidebar"
        />
      )}

      {/* =====================================================
          SIDEBAR
          ===================================================== */}

      <aside
        className={`dashboard-sidebar ${
          mobileSidebarOpen ? "mobile-sidebar-open" : ""
        }`}
      >

        <div className="sidebar-content">

          <div className="sidebar-brand">

            <div className="sidebar-logo">
              <span>◆</span>
            </div>

            <div className="sidebar-brand-text">
              <strong>BRIQONA OS</strong>
              <small>
                All-in-One Business Operating System
              </small>
            </div>

            <button
              type="button"
              className="mobile-sidebar-close"
              onClick={closeMobileSidebar}
              aria-label="Close menu"
            >
              ×
            </button>

          </div>

          <nav className="sidebar-nav">

            {menuItems.map((item, index) => (
              <React.Fragment key={item.label}>

                <button
                  type="button"
                  className={`sidebar-item ${
                    index === 0 ? "active" : ""
                  }`}
                  onClick={() => {
                    if (item.dropdown) {
                      toggleMenu(item.dropdown);
                    } else {
                      closeMobileSidebar();
                    }
                  }}
                >

                  <span className="sidebar-icon">
                    {item.icon}
                  </span>

                  <span>{item.label}</span>

                  {item.badge && (
                    <span className="sidebar-badge">
                      {item.badge}
                    </span>
                  )}

                  {item.dropdown && (
                    <span
                      className={`sidebar-arrow ${
                        openMenu === item.dropdown
                          ? "arrow-open"
                          : ""
                      }`}
                    >
                      ⌄
                    </span>
                  )}

                </button>

                {item.dropdown === "workforce" &&
                  openMenu === "workforce" && (
                    <div className="sidebar-submenu">

                      {workforceItems.map((subItem) => (
                        <button
                          type="button"
                          key={subItem}
                          onClick={closeMobileSidebar}
                        >
                          {subItem}
                        </button>
                      ))}

                    </div>
                  )}

                {item.dropdown === "industries" &&
                  openMenu === "industries" && (
                    <div className="sidebar-submenu">

                      {industryItems.map((subItem) => (
                        <button
                          type="button"
                          key={subItem}
                          onClick={closeMobileSidebar}
                        >
                          {subItem}
                        </button>
                      ))}

                    </div>
                  )}

              </React.Fragment>
            ))}

          </nav>

          {/* Current Plan */}

          <div className="sidebar-plan">

            <button
              type="button"
              className="plan-close"
              aria-label="Close plan"
            >
              ×
            </button>

            <div className="plan-icon">
              ◇
            </div>

            <div className="plan-label">
              Current Plan
            </div>

            <div className="plan-name">
              Growth
            </div>

            <div className="plan-price">
              <strong>$15</strong> / month
            </div>

            <button
              type="button"
              className="upgrade-button"
            >
              <span>Upgrade Plan</span>
              <span>→</span>
            </button>

          </div>

        </div>

      </aside>

      {/* =====================================================
          MAIN AREA
          ===================================================== */}

      <div className="dashboard-main">

        {/* ===================================================
            HEADER

            NEXT STEP LOCATION:
            Header ka final approved design isi section mein
            continue hoga.
            =================================================== */}

        <header className="dashboard-header">

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() =>
              setMobileSidebarOpen(true)
            }
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="dashboard-search">

            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Ask Briqona AI or type a command..."
            />

            <span className="search-shortcut">
              ⌘ K
            </span>

          </div>

          <button
            type="button"
            className="header-ai-button"
          >
            ✦ AI Copilot
          </button>

          <button
            type="button"
            className="header-mission-button"
          >
            ✦ AI Mission Center
          </button>

          <button
            type="button"
            className="header-icon-button"
          >
            ♧
            <span className="notification-count red">
              5
            </span>
          </button>

          <button
            type="button"
            className="header-icon-button"
          >
            ▢
            <span className="notification-count blue">
              3
            </span>
          </button>

          <button
            type="button"
            className="profile-button"
          >

            <span className="profile-details">
              <strong>Ali Raza</strong>
              <small>Owner</small>
            </span>

            <span className="profile-avatar">
              AR
            </span>

            <span className="profile-arrow">
              ˅
            </span>

          </button>

        </header>

        {/* ===================================================
            MAIN CONTENT
            =================================================== */}

        <main className="dashboard-content">

          {/* HERO */}

          <section className="dashboard-hero">

            <div className="hero-heading">

              <h1>
                Good morning, Ali Raza! 👋
              </h1>

              <p>
                Here's what's happening with your business today.
              </p>

            </div>

            <div className="hero-wave">
              <span className="wave-line wave-one"></span>
              <span className="wave-line wave-two"></span>
              <span className="wave-line wave-three"></span>
              <span className="wave-glow"></span>
            </div>

            <div className="business-pulse">

              <span className="pulse-star">
                ✦
              </span>

              <span className="pulse-title">
                AI Business Pulse
              </span>

              <span className="pulse-status">
                Excellent
              </span>

              <strong>
                87 <small>/100</small>
              </strong>

            </div>

          </section>

          {/* FILTERS */}

          <div className="dashboard-filters">

            <button type="button">
              ▣ &nbsp; This Month &nbsp;⌄
            </button>

            <button type="button">
              ✣ &nbsp; Customize
            </button>

          </div>

          {/* STATS */}

          <section className="stats-grid">

            <div className="stat-card revenue">
              <span>Total Revenue</span>
              <strong>$24,780</strong>
              <small>▲ 12.6% vs last month</small>
              <div className="mini-chart">
                ╱╲╱╲╱╲╱╲╱╲
              </div>
            </div>

            <div className="stat-card profit">
              <span>Total Profit</span>
              <strong>$8,430</strong>
              <small>▲ 8.3% vs last month</small>
              <div className="mini-chart">
                ╱╲╱╲╱╲╱╲╱╲
              </div>
            </div>

            <div className="stat-card expenses">
              <span>Total Expenses</span>
              <strong>$6,350</strong>
              <small>▼ -3.4% vs last month</small>
              <div className="mini-chart">
                ╱╲╱╲╱╲╱╲╱╲
              </div>
            </div>

            <div className="stat-card invoices">
              <span>Open Invoices</span>
              <strong>23</strong>
              <small>▼ $14,560 overdue</small>
              <div className="mini-chart">
                ╱╲╱╲╱╲╱╲╱╲
              </div>
            </div>

          </section>

          {/* QUICK ACTIONS */}

          <section className="dashboard-panel quick-actions-panel">

            <div className="panel-title">
              <h2>Quick Actions</h2>
            </div>

            <div className="quick-actions-grid">

              {quickActions.map(([icon, label]) => (
                <button
                  type="button"
                  className="quick-action"
                  key={label}
                >

                  <span className="quick-action-icon">
                    {icon}
                  </span>

                  <span>
                    + {label}
                  </span>

                </button>
              ))}

            </div>

          </section>

          {/* AI SECTION */}

          <section className="ai-grid">

            <div className="dashboard-panel ai-command-panel">

              <div className="panel-heading">

                <div>
                  <h2>
                    ✦ &nbsp;AI Command Center
                  </h2>

                  <p>
                    Ask anything. Briqona AI is ready to help.
                  </p>
                </div>

              </div>

              <div className="ai-command-input">

                <input
                  type="text"
                  placeholder="e.g. Show me sales trend, top customers, overdue invoices..."
                />

                <button type="button">
                  ♫
                </button>

                <button type="button">
                  ➤
                </button>

              </div>

              <div className="ai-shortcuts">

                <button type="button">
                  Sales Summary
                </button>

                <button type="button">
                  Overdue Invoices
                </button>

                <button type="button">
                  Cash Flow
                </button>

                <button type="button">
                  Inventory Alert
                </button>

                <button type="button">
                  HR Report
                </button>

              </div>

              <div className="ai-glow-circle"></div>

            </div>

            <div className="dashboard-panel ai-missions-panel">

              <div className="panel-heading-row">

                <h2>
                  ✦ AI Missions
                </h2>

                <span className="beta-badge">
                  Beta
                </span>

                <button
                  type="button"
                  className="view-all"
                >
                  View All
                </button>

              </div>

              <div className="missions-list">

                {missions.map(
                  ([icon, title, status, progress], index) => (
                    <div
                      className="mission-item"
                      key={title}
                    >

                      <div
                        className={`mission-icon mission-${index}`}
                      >
                        {icon}
                      </div>

                      <div className="mission-info">

                        <div className="mission-top">
                          <span>{title}</span>
                          <small>{status}</small>
                        </div>

                        <div className="mission-progress-row">

                          <div className="mission-progress">
                            <span
                              style={{
                                width: progress,
                              }}
                            ></span>
                          </div>

                          <strong>
                            {progress}
                          </strong>

                        </div>

                      </div>

                    </div>
                  )
                )}

              </div>

            </div>

          </section>

          {/* LOWER GRID */}

          <section className="lower-dashboard-grid">

            {/* Recent Activities */}

            <div className="dashboard-panel list-panel">

              <div className="panel-heading-row">

                <h2>
                  Recent Activities
                </h2>

                <button
                  type="button"
                  className="view-all"
                >
                  View All
                </button>

              </div>

              <div className="activity-list">

                {activities.map(
                  ([icon, text, time]) => (
                    <div
                      className="activity-item"
                      key={text}
                    >

                      <span className="activity-icon">
                        {icon}
                      </span>

                      <span className="activity-text">
                        {text}
                      </span>

                      <small>
                        {time}
                      </small>

                    </div>
                  )
                )}

              </div>

            </div>

            {/* Notifications */}

            <div className="dashboard-panel list-panel">

              <div className="panel-heading-row">

                <h2>
                  Notifications
                </h2>

                <button
                  type="button"
                  className="view-all"
                >
                  View All
                </button>

              </div>

              <div className="notification-list">

                {notifications.map(
                  ([icon, text, time]) => (
                    <div
                      className="notification-item"
                      key={text}
                    >

                      <span className="notification-icon">
                        {icon}
                      </span>

                      <div>
                        <span>{text}</span>
                        <small>{time}</small>
                      </div>

                    </div>
                  )
                )}

              </div>

            </div>

            {/* Customers */}

            <div className="dashboard-panel list-panel">

              <div className="panel-heading-row">

                <h2>
                  Top Customers
                </h2>

                <button
                  type="button"
                  className="view-all"
                >
                  View All
                </button>

              </div>

              <div className="customer-list">

                {customers.map(
                  ([initial, name, amount]) => (
                    <div
                      className="customer-item"
                      key={name}
                    >

                      <span className="customer-avatar">
                        {initial}
                      </span>

                      <span className="customer-name">
                        {name}
                      </span>

                      <strong>
                        {amount}
                      </strong>

                    </div>
                  )
                )}

              </div>

            </div>

            {/* AI Insights */}

            <div className="dashboard-panel insights-panel">

              <div className="panel-heading-row">

                <h2>
                  ✦ AI Insights
                </h2>

                <span className="new-badge">
                  New
                </span>

              </div>

              <div className="insight-content">

                <p>
                  Your sales are up{" "}
                  <strong>12.6%</strong>{" "}
                  this month.
                </p>

                <p>
                  Focus on recovering{" "}
                  <strong>$14,560</strong>{" "}
                  in overdue invoices to improve cash flow.
                </p>

                <button type="button">
                  View All Insights →
                </button>

              </div>

              <div className="insight-glow"></div>

            </div>

          </section>

          {/* BOTTOM */}

          <section className="bottom-dashboard-grid">

            {/* Package */}

            <div className="dashboard-panel package-panel">

              <div className="panel-heading-row">

                <h2>
                  Package & Access
                </h2>

              </div>

              <div className="package-name">

                <span className="package-icon">
                  ◇
                </span>

                <strong>
                  Growth Plan
                </strong>

                <span>
                  <b>$15</b> / month
                </span>

              </div>

              <div className="access-row">

                <span>
                  Access
                </span>

                <strong>
                  38 / 60 Features
                </strong>

              </div>

              <button
                type="button"
                className="pro-button"
              >
                🚀 Upgrade to Pro
              </button>

              <button
                type="button"
                className="features-button"
              >
                View All Features →
              </button>

            </div>

            {/* Industries */}

            <div className="dashboard-panel industries-panel">

              <div className="panel-heading-row">

                <h2>
                  Industries Hub
                </h2>

                <button
                  type="button"
                  className="view-all"
                >
                  Manage
                </button>

              </div>

              <div className="industry-grid">

                {[
                  ["▥", "Office"],
                  ["♙", "HR"],
                  ["▥", "Hospital"],
                  ["♧", "Restaurant"],
                  ["🛒", "Retail"],
                  ["⚖", "Construction"],
                  ["⌂", "Real Estate"],
                  ["🎓", "Education"],
                  ["▥", "Manufacturing"],
                  ["♧", "Professional Services"],
                  ["•••", "More"],
                ].map(([icon, label], index) => (
                  <button
                    type="button"
                    key={label}
                    className={
                      index === 0
                        ? "industry-active"
                        : ""
                    }
                  >

                    <span>
                      {icon}
                    </span>

                    <small>
                      {label}
                    </small>

                  </button>
                ))}

              </div>

            </div>

          </section>

        </main>

        {/* ===================================================
            FOOTER
            =================================================== */}

        <footer className="dashboard-footer">

          <span>
            © 2026 Briqona OS. All rights reserved.
          </span>

          <span>
            Version 1.0.0
          </span>

          <div className="footer-links">

            <button type="button">
              Privacy Policy
            </button>

            <button type="button">
              Terms of Service
            </button>

            <button type="button">
              Support
            </button>

          </div>

        </footer>

      </div>
    </div>
  );
}

export default Dashboard;
