import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [activeIndustry, setActiveIndustry] = useState("Office");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [showMoreActions, setShowMoreActions] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [toast, setToast] = useState("");

  const notify = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2800);
  };

  const handleMenu = (menu) => {
    setActiveMenu(menu);
    notify(`${menu} workspace selected`);
  };

  const handleQuickAction = (action) => {
    notify(`${action} opened`);
  };

  const handleAiAction = (action) => {
    setAiInput(action);
    notify(`AI Copilot: ${action}`);
  };

  const industries = [
    { name: "Office", icon: "▣", color: "green" },
    { name: "HR", icon: "♙", color: "blue" },
    { name: "Hospital", icon: "▥", color: "cyan" },
    { name: "Restaurant", icon: "♧", color: "pink" },
    { name: "Retail", icon: "🛒", color: "purple" },
    { name: "Construction", icon: "⌁", color: "orange" },
    { name: "Real Estate", icon: "⌂", color: "violet" },
    { name: "Education", icon: "◇", color: "cyan" },
    { name: "Manufacturing", icon: "▤", color: "green" },
    { name: "Professional Services", icon: "♧", color: "purple" },
    { name: "More", icon: "•••", color: "gray" },
  ];

  const sidebarItems = [
    { name: "Dashboard", icon: "⌂" },
    { name: "AI Command Center", icon: "✦", badge: "New" },
    { name: "AI Workforce", icon: "♙", dropdown: true },
    { name: "Outcome Center", icon: "◎" },
    { name: "Industries Hub", icon: "▦", dropdown: true },
    { name: "CRM", icon: "♟" },
    { name: "Finance", icon: "$" },
    { name: "HR", icon: "♙" },
    { name: "Inventory", icon: "▣" },
    { name: "Projects & Tasks", icon: "☑" },
    { name: "Documents", icon: "▤" },
    { name: "Automation", icon: "ϟ" },
    { name: "Analytics", icon: "▥" },
    { name: "Communication", icon: "▣" },
    { name: "Support / Helpdesk", icon: "◉" },
    { name: "Integrations", icon: "⌘" },
    { name: "Settings", icon: "⚙" },
  ];

  const quickActions = [
    {
      title: "New Invoice",
      icon: "$",
      color: "green",
    },
    {
      title: "New Lead",
      icon: "♙",
      color: "blue",
    },
    {
      title: "New Expense",
      icon: "▤",
      color: "orange",
    },
    {
      title: "New Task",
      icon: "☑",
      color: "purple",
    },
    {
      title: "Add Employee",
      icon: "♙",
      color: "cyan",
    },
    {
      title: "Add Customer",
      icon: "♙",
      color: "pink",
    },
  ];

  const missions = [
    {
      title: "Recover overdue payments",
      status: "In Progress",
      progress: 65,
      color: "green",
    },
    {
      title: "Increase this month sales",
      status: "In Progress",
      progress: 40,
      color: "purple",
    },
    {
      title: "Reduce expenses",
      status: "Planned",
      progress: 20,
      color: "orange",
    },
  ];

  const activities = [
    {
      icon: "▤",
      text: "Invoice #INV-2026-1256 created",
      time: "2 min ago",
      color: "cyan",
    },
    {
      icon: "$",
      text: "Payment received from Ahmed Co.",
      time: "18 min ago",
      color: "green",
    },
    {
      icon: "♙",
      text: "New lead from Website",
      time: "45 min ago",
      color: "purple",
    },
    {
      icon: "✓",
      text: 'Task "Follow up with client"',
      time: "1 hour ago",
      color: "green",
    },
    {
      icon: "▤",
      text: "Expense $250 added",
      time: "2 hours ago",
      color: "orange",
    },
  ];

  const notifications = [
    {
      icon: "◉",
      text: "Overdue invoice from Ali Traders",
      time: "2 min ago",
      color: "red",
    },
    {
      icon: "⚠",
      text: "Low stock alert for 3 products",
      time: "25 min ago",
      color: "orange",
    },
    {
      icon: "♙",
      text: "Leave request from Sara Khan",
      time: "1 hour ago",
      color: "cyan",
    },
    {
      icon: "▣",
      text: "System backup completed",
      time: "2 hours ago",
      color: "green",
    },
  ];

  const customers = [
    {
      initial: "A",
      name: "Ahmed Corporation",
      amount: "$5,780",
      color: "blue",
    },
    {
      initial: "G",
      name: "Global Solutions",
      amount: "$4,230",
      color: "green",
    },
    {
      initial: "T",
      name: "TechNova LLC",
      amount: "$3,620",
      color: "purple",
    },
    {
      initial: "A",
      name: "Al-Barkat Traders",
      amount: "$2,890",
      color: "cyan",
    },
    {
      initial: "F",
      name: "Future Enterprises",
      amount: "$2,450",
      color: "red",
    },
  ];

  return (
    <div className="briqona-dashboard">

      {/* =========================================================
          SIDEBAR
      ========================================================= */}

      <aside className="dashboard-sidebar">

        <div className="sidebar-brand">
          <div className="briqona-logo-mark">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="brand-text">
            <strong>BRIQONA</strong>
            <span>OS</span>
            <small>All-in-One Business Operating System</small>
          </div>
        </div>

        <nav className="sidebar-navigation">

          {sidebarItems.map((item) => (
            <button
              key={item.name}
              className={`sidebar-item ${
                activeMenu === item.name ? "active" : ""
              }`}
              onClick={() => handleMenu(item.name)}
            >
              <span className={`sidebar-icon ${item.name === "AI Command Center" ? "ai-icon" : ""}`}>
                {item.icon}
              </span>

              <span className="sidebar-item-label">
                {item.name}
              </span>

              {item.badge && (
                <span className="sidebar-new-badge">
                  {item.badge}
                </span>
              )}

              {item.dropdown && (
                <span className="sidebar-chevron">
                  ⌄
                </span>
              )}
            </button>
          ))}

        </nav>

        <div className="sidebar-plan-card">

          <button
            className="plan-close"
            onClick={() => notify("Plan card hidden")}
          >
            ×
          </button>

          <div className="plan-diamond">
            ◇
          </div>

          <div className="plan-label">
            Current Plan
          </div>

          <h3>
            Growth
          </h3>

          <div className="plan-price">
            <strong>$15</strong>
            <span>/ month</span>
          </div>

          <button
            className="upgrade-plan-button"
            onClick={() => notify("Upgrade Plan opened")}
          >
            <span>Upgrade Plan</span>
            <span>→</span>
          </button>

        </div>

      </aside>


      {/* =========================================================
          MAIN AREA
      ========================================================= */}

      <main className="dashboard-main">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <header className="dashboard-header">

          <div
            className={`dashboard-search ${
              showSearch ? "search-open" : ""
            }`}
          >

            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Ask Briqona AI or type a command..."
              onFocus={() => setShowSearch(true)}
            />

            <span className="search-shortcut">
              ⌘ K
            </span>

          </div>

          <button
            className="header-ai-button copilot"
            onClick={() => notify("AI Copilot opened")}
          >
            <span>✦</span>
            AI Copilot
          </button>

          <button
            className="header-ai-button mission"
            onClick={() => notify("AI Mission Center opened")}
          >
            <span>✦</span>
            AI Mission Center
          </button>

          <div className="header-spacer"></div>

          <div className="header-action-wrapper">

            <button
              className="header-icon-button"
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
            >
              ♧
              <span className="notification-count red">
                5
              </span>
            </button>

            {showNotifications && (
              <div className="header-popup notification-popup">

                <div className="popup-header">
                  <strong>Notifications</strong>
                  <button
                    onClick={() => setShowNotifications(false)}
                  >
                    ×
                  </button>
                </div>

                <div className="popup-item">
                  <span className="popup-dot red"></span>
                  <div>
                    <strong>5 notifications</strong>
                    <small>Need your attention</small>
                  </div>
                </div>

                <button
                  className="popup-link"
                  onClick={() => handleMenu("Notifications")}
                >
                  View all notifications →
                </button>

              </div>
            )}

          </div>


          <div className="header-action-wrapper">

            <button
              className="header-icon-button"
              onClick={() =>
                setShowMessages(!showMessages)
              }
            >
              ▢
              <span className="notification-count blue">
                3
              </span>
            </button>

            {showMessages && (
              <div className="header-popup message-popup">

                <div className="popup-header">
                  <strong>Messages</strong>
                  <button
                    onClick={() => setShowMessages(false)}
                  >
                    ×
                  </button>
                </div>

                <div className="popup-item">
                  <span className="popup-avatar">
                    A
                  </span>

                  <div>
                    <strong>3 new messages</strong>
                    <small>Business communication</small>
                  </div>
                </div>

                <button
                  className="popup-link"
                  onClick={() => handleMenu("Communication")}
                >
                  Open communication →
                </button>

              </div>
            )}

          </div>


          <div className="profile-wrapper">

            <button
              className="profile-button"
              onClick={() =>
                setShowProfile(!showProfile)
              }
            >

              <div className="profile-name">
                <strong>Ali Raza</strong>
                <span>Owner</span>
              </div>

              <div className="profile-avatar">
                AR
              </div>

              <span className="profile-chevron">
                ⌄
              </span>

            </button>

            {showProfile && (
              <div className="profile-menu">

                <button
                  onClick={() => notify("Profile opened")}
                >
                  My Profile
                </button>

                <button
                  onClick={() => handleMenu("Settings")}
                >
                  Account Settings
                </button>

                <button
                  onClick={() => notify("Logout action")}
                >
                  Logout
                </button>

              </div>
            )}

          </div>

        </header>


        {/* =======================================================
            DASHBOARD CONTENT
        ======================================================= */}

        <div className="dashboard-content">


          {/* =====================================================
              HERO
          ===================================================== */}

          <section className="dashboard-hero">

            <div className="hero-content">

              <h1>
                Good morning, Ali Raza! 👋
              </h1>

              <p>
                Here's what's happening with your business today.
              </p>

              <div className="business-pulse">

                <span>
                  AI Business Pulse
                </span>

                <strong>
                  Excellent
                </strong>

                <b>
                  87
                </b>

                <small>
                  /100
                </small>

              </div>

            </div>


            <div className="hero-controls">

              <button
                className="date-filter"
                onClick={() => notify("Date filter opened")}
              >
                <span>▣</span>
                This Month
                <span>⌄</span>
              </button>

              <button
                className="customize-button"
                onClick={() =>
                  setShowCustomize(!showCustomize)
                }
              >
                ✣
                Customize
              </button>

            </div>


            {showCustomize && (
              <div className="customize-panel">

                <strong>
                  Customize Dashboard
                </strong>

                <label>
                  <input type="checkbox" defaultChecked />
                  Business Pulse
                </label>

                <label>
                  <input type="checkbox" defaultChecked />
                  AI Insights
                </label>

                <label>
                  <input type="checkbox" defaultChecked />
                  Recent Activities
                </label>

                <label>
                  <input type="checkbox" defaultChecked />
                  Top Customers
                </label>

              </div>
            )}


            <div className="hero-visual">

              <div className="wave wave-one"></div>
              <div className="wave wave-two"></div>
              <div className="wave wave-three"></div>

              <div className="wave-particle particle-one"></div>
              <div className="wave-particle particle-two"></div>
              <div className="wave-particle particle-three"></div>

            </div>


            <div className="hero-stat-grid">

              <div className="hero-stat revenue-stat">

                <span>Total Revenue</span>

                <strong>
                  $24,780
                </strong>

                <small>
                  ▲ 12.6% vs last month
                </small>

                <div className="mini-chart green-chart">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

              </div>


              <div className="hero-stat profit-stat">

                <span>Total Profit</span>

                <strong>
                  $8,430
                </strong>

                <small>
                  ▲ 8.3% vs last month
                </small>

                <div className="mini-chart purple-chart">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

              </div>


              <div className="hero-stat expense-stat">

                <span>Total Expenses</span>

                <strong>
                  $6,350
                </strong>

                <small className="negative">
                  ▼ -3.4% vs last month
                </small>

                <div className="mini-chart orange-chart">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

              </div>


              <div className="hero-stat invoice-stat">

                <span>Open Invoices</span>

                <strong>
                  23
                </strong>

                <small className="negative">
                  $14,560 overdue
                </small>

                <div className="mini-chart blue-chart">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

              </div>

            </div>

          </section>


          {/* =====================================================
              QUICK ACTIONS
          ===================================================== */}

          <section className="dashboard-panel quick-actions-panel">

            <div className="panel-title">
              <h2>
                Quick Actions
              </h2>
            </div>

            <div className="quick-actions">

              {quickActions.map((action) => (
                <button
                  key={action.title}
                  className={`quick-action ${action.color}`}
                  onClick={() =>
                    handleQuickAction(action.title)
                  }
                >

                  <span className="quick-action-icon">
                    {action.icon}
                  </span>

                  <span>
                    + {action.title}
                  </span>

                </button>
              ))}


              <button
                className="quick-action more-action"
                onClick={() =>
                  setShowMoreActions(!showMoreActions)
                }
              >

                <span className="quick-action-icon">
                  ▦
                </span>

                <span>
                  More Actions
                </span>

              </button>

            </div>


            {showMoreActions && (
              <div className="more-actions-menu">

                <button onClick={() => notify("Create quote opened")}>
                  + New Quote
                </button>

                <button onClick={() => notify("New project opened")}>
                  + New Project
                </button>

                <button onClick={() => notify("New document opened")}>
                  + New Document
                </button>

                <button onClick={() => notify("Report builder opened")}>
                  + New Report
                </button>

              </div>
            )}

          </section>


          {/* =====================================================
              MAIN GRID
          ===================================================== */}

          <div className="dashboard-main-grid">


            {/* ===================================================
                LEFT COLUMN
            =================================================== */}

            <div className="dashboard-left-column">


              {/* ===============================================
                  AI COMMAND CENTER
              =============================================== */}

              <section className="dashboard-panel ai-command-panel">

                <div className="panel-heading">

                  <div>

                    <h2>
                      <span className="heading-icon">
                        ✦
                      </span>

                      AI Command Center
                    </h2>

                    <p>
                      Ask anything. Briqona AI is ready to help.
                    </p>

                  </div>

                </div>


                <div className="ai-input-wrapper">

                  <input
                    value={aiInput}
                    onChange={(e) =>
                      setAiInput(e.target.value)
                    }
                    placeholder="e.g. Show me sales trend, top customers, overdue invoices..."
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        notify(
                          aiInput
                            ? `AI analysing: ${aiInput}`
                            : "Ask Briqona AI anything"
                        );
                      }
                    }}
                  />

                  <button
                    className="ai-mic-button"
                    onClick={() =>
                      notify("Voice assistant activated")
                    }
                  >
                    ♫
                  </button>

                  <button
                    className="ai-send-button"
                    onClick={() =>
                      notify(
                        aiInput
                          ? `AI analysing: ${aiInput}`
                          : "Ask Briqona AI anything"
                      )
                    }
                  >
                    ↗
                  </button>

                </div>


                <div className="ai-shortcuts">

                  <button
                    onClick={() =>
                      handleAiAction("Sales Summary")
                    }
                  >
                    Sales Summary
                  </button>

                  <button
                    onClick={() =>
                      handleAiAction("Overdue Invoices")
                    }
                  >
                    Overdue Invoices
                  </button>

                  <button
                    onClick={() =>
                      handleAiAction("Cash Flow")
                    }
                  >
                    Cash Flow
                  </button>

                  <button
                    onClick={() =>
                      handleAiAction("Inventory Alert")
                    }
                  >
                    Inventory Alert
                  </button>

                  <button
                    onClick={() =>
                      handleAiAction("HR Report")
                    }
                  >
                    HR Report
                  </button>

                </div>

                <div className="ai-orb orb-one"></div>
                <div className="ai-orb orb-two"></div>

              </section>


              {/* ===============================================
                  BOTTOM GRID
              =============================================== */}

              <div className="bottom-dashboard-grid">


                {/* =============================================
                    RECENT ACTIVITIES
                ============================================= */}

                <section className="dashboard-panel list-panel">

                  <div className="panel-header-row">

                    <h2>
                      Recent Activities
                    </h2>

                    <button
                      onClick={() =>
                        handleMenu("Recent Activities")
                      }
                    >
                      View All
                    </button>

                  </div>


                  <div className="activity-list">

                    {activities.map((item, index) => (
                      <button
                        className="activity-item"
                        key={index}
                        onClick={() =>
                          notify(item.text)
                        }
                      >

                        <span
                          className={`activity-icon ${item.color}`}
                        >
                          {item.icon}
                        </span>

                        <span className="activity-text">
                          {item.text}
                        </span>

                        <small>
                          {item.time}
                        </small>

                      </button>
                    ))}

                  </div>

                </section>


                {/* =============================================
                    NOTIFICATIONS
                ============================================= */}

                <section className="dashboard-panel list-panel">

                  <div className="panel-header-row">

                    <h2>
                      Notifications
                    </h2>

                    <button
                      onClick={() =>
                        handleMenu("Notifications")
                      }
                    >
                      View All
                    </button>

                  </div>


                  <div className="activity-list">

                    {notifications.map((item, index) => (
                      <button
                        className="activity-item"
                        key={index}
                        onClick={() =>
                          notify(item.text)
                        }
                      >

                        <span
                          className={`activity-icon ${item.color}`}
                        >
                          {item.icon}
                        </span>

                        <span className="activity-text">
                          {item.text}
                        </span>

                        <small>
                          {item.time}
                        </small>

                      </button>
                    ))}

                  </div>

                </section>


                {/* =============================================
                    TOP CUSTOMERS
                ============================================= */}

                <section className="dashboard-panel customers-panel">

                  <div className="panel-header-row">

                    <h2>
                      Top Customers
                    </h2>

                    <button
                      onClick={() =>
                        handleMenu("CRM")
                      }
                    >
                      View All
                    </button>

                  </div>


                  <div className="customer-list">

                    {customers.map((customer, index) => (
                      <button
                        className="customer-row"
                        key={index}
                        onClick={() =>
                          notify(
                            `${customer.name} customer profile`
                          )
                        }
                      >

                        <span
                          className={`customer-avatar ${customer.color}`}
                        >
                          {customer.initial}
                        </span>

                        <span className="customer-name">
                          {customer.name}
                        </span>

                        <strong>
                          {customer.amount}
                        </strong>

                      </button>
                    ))}

                  </div>

                </section>


                {/* =============================================
                    AI INSIGHTS
                ============================================= */}

                <section className="dashboard-panel ai-insights-panel">

                  <div className="panel-header-row">

                    <h2>
                      <span className="heading-icon">
                        ✦
                      </span>

                      AI Insights
                    </h2>

                    <span className="new-tag">
                      New
                    </span>

                  </div>


                  <div className="insight-content">

                    <p>
                      Your sales are up
                      <strong> 12.6%</strong>
                      {" "}this month.
                    </p>

                    <p>
                      Focus on recovering
                      <strong> $14,560</strong>
                      {" "}in overdue invoices to improve cash flow.
                    </p>

                  </div>


                  <button
                    className="insight-button"
                    onClick={() =>
                      notify("AI Business Analyst opened")
                    }
                  >
                    View All Insights →
                  </button>


                  <div className="ai-brain">
                    ✦
                  </div>

                </section>

              </div>

            </div>


            {/* ===================================================
                RIGHT COLUMN
            =================================================== */}

            <aside className="dashboard-right-column">


              {/* =================================================
                  PACKAGE ACCESS
              ================================================= */}

              <section className="dashboard-panel package-panel">

                <div className="panel-header-row">

                  <h2>
                    Package & Access
                  </h2>

                </div>

                <div className="package-title">

                  <span className="package-icon">
                    ◇
                  </span>

                  <strong>
                    Growth Plan
                  </strong>

                  <span className="package-price">
                    $15
                    <small>
                      / month
                    </small>
                  </span>

                </div>


                <div className="access-row">

                  <span>
                    Access
                  </span>

                  <strong>
                    <b>38</b> / 60 Features
                  </strong>

                </div>


                <button
                  className="upgrade-button"
                  onClick={() =>
                    notify("Upgrade to Pro opened")
                  }
                >
                  🚀
                  Upgrade to Pro
                </button>


                <button
                  className="all-features-button"
                  onClick={() =>
                    handleMenu("Features")
                  }
                >
                  View All Features →
                </button>

              </section>


              {/* =================================================
                  INDUSTRIES HUB
              ================================================= */}

              <section className="dashboard-panel industries-panel">

                <div className="panel-header-row">

                  <h2>
                    Industries Hub
                  </h2>

                  <button
                    onClick={() =>
                      handleMenu("Industries Hub")
                    }
                  >
                    Manage
                  </button>

                </div>


                <div className="industry-grid">

                  {industries.map((industry) => (
                    <button
                      key={industry.name}
                      className={`industry-card ${
                        activeIndustry === industry.name
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveIndustry(industry.name);
                        notify(
                          `${industry.name} industry selected`
                        );
                      }}
                    >

                      <span
                        className={`industry-icon ${industry.color}`}
                      >
                        {industry.icon}
                      </span>

                      <span>
                        {industry.name}
                      </span>

                    </button>
                  ))}

                </div>

              </section>

            </aside>

          </div>


          {/* =====================================================
              ACTIVE MENU STATE
          ===================================================== */}

          {activeMenu !== "Dashboard" && (
            <div className="dashboard-active-state">

              <span>
                Active workspace:
              </span>

              <strong>
                {activeMenu}
              </strong>

              <button
                onClick={() =>
                  setActiveMenu("Dashboard")
                }
              >
                ← Back to Dashboard
              </button>

            </div>
          )}

        </div>


        {/* =======================================================
            FOOTER
        ======================================================= */}

        <footer className="dashboard-footer">

          <span>
            © 2026 Briqona OS. All rights reserved.
          </span>

          <span>
            Version 1.0.0
          </span>

          <div className="footer-links">

            <button
              onClick={() => notify("Privacy Policy opened")}
            >
              Privacy Policy
            </button>

            <button
              onClick={() => notify("Terms of Service opened")}
            >
              Terms of Service
            </button>

            <button
              onClick={() => notify("Support opened")}
            >
              Support
            </button>

          </div>

        </footer>

      </main>


      {/* =========================================================
          TOAST
      ========================================================= */}

      {toast && (
        <div className="dashboard-toast">
          <span>✓</span>
          {toast}
        </div>
      )}

    </div>
  );
}

export default Dashboard;
