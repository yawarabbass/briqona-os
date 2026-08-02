import React, { useState } from "react";
import "./Dashboard.css";

const sidebarItems = [
  { icon: "⌂", label: "Dashboard", active: true },
  { icon: "✦", label: "AI Command Center", badge: "New" },
  { icon: "♧", label: "AI Workforce", dropdown: true },
  { icon: "◎", label: "Outcome Center" },
  { icon: "▦", label: "Industries Hub", dropdown: true },
  { icon: "♙", label: "CRM" },
  { icon: "$", label: "Finance" },
  { icon: "♟", label: "HR" },
  { icon: "◆", label: "Inventory" },
  { icon: "✓", label: "Projects & Tasks" },
  { icon: "▤", label: "Documents" },
  { icon: "ϟ", label: "Automation" },
  { icon: "▥", label: "Analytics" },
  { icon: "▣", label: "Communication" },
  { icon: "◉", label: "Support / Helpdesk" },
  { icon: "⌘", label: "Integrations" },
  { icon: "⚙", label: "Settings" },
];

const quickActions = [
  { icon: "$", label: "New Invoice", color: "green" },
  { icon: "♙", label: "New Lead", color: "blue" },
  { icon: "▤", label: "New Expense", color: "orange" },
  { icon: "✓", label: "New Task", color: "purple" },
  { icon: "♟", label: "Add Employee", color: "cyan" },
  { icon: "♙", label: "Add Customer", color: "pink" },
  { icon: "▦", label: "More Actions", color: "neutral" },
];

const industries = [
  { icon: "▥", label: "Office", color: "green", active: true },
  { icon: "♙", label: "HR", color: "blue" },
  { icon: "▥", label: "Hospital", color: "cyan" },
  { icon: "♧", label: "Restaurant", color: "pink" },
  { icon: "▱", label: "Retail", color: "purple" },
  { icon: "⚒", label: "Construction", color: "orange" },
  { icon: "⌂", label: "Real Estate", color: "purple" },
  { icon: "◇", label: "Education", color: "cyan" },
  { icon: "▥", label: "Manufacturing", color: "green" },
  { icon: "♧", label: "Professional Services", color: "purple" },
  { icon: "•••", label: "More", color: "neutral" },
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
    icon: "♧",
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
  { letter: "A", name: "Ahmed Corporation", amount: "$5,780", color: "blue" },
  { letter: "G", name: "Global Solutions", amount: "$4,230", color: "green" },
  { letter: "T", name: "TechNova LLC", amount: "$3,620", color: "yellow" },
  { letter: "A", name: "Al-Barkat Traders", amount: "$2,890", color: "cyan" },
  { letter: "F", name: "Future Enterprises", amount: "$2,450", color: "red" },
];

function Dashboard() {
  const [period, setPeriod] = useState("This Month");
  const [showPeriod, setShowPeriod] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showMoreActions, setShowMoreActions] = useState(false);
  const [command, setCommand] = useState("");

  const handleAction = (label) => {
    console.log(`Action selected: ${label}`);
  };

  const handleCommand = (event) => {
    if (event.key === "Enter") {
      console.log("AI Command:", command);
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        {/* ================= SIDEBAR ================= */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-brand">
            <div className="brand-mark">
              <span className="brand-shape brand-shape-one"></span>
              <span className="brand-shape brand-shape-two"></span>
              <span className="brand-shape brand-shape-three"></span>
            </div>

            <div className="brand-copy">
              <strong>BRIQONA</strong>
              <span>OS</span>
              <small>All-in-One Business Operating System</small>
            </div>
          </div>

          <nav className="sidebar-navigation">
            {sidebarItems.map((item) => (
              <button
                type="button"
                key={item.label}
                className={`sidebar-link ${item.active ? "active" : ""}`}
                onClick={() => handleAction(item.label)}
              >
                <span className="sidebar-icon">{item.icon}</span>

                <span className="sidebar-label">{item.label}</span>

                {item.badge && (
                  <span className="sidebar-badge">{item.badge}</span>
                )}

                {item.dropdown && (
                  <span className="sidebar-chevron">⌄</span>
                )}
              </button>
            ))}
          </nav>

          <div className="sidebar-divider"></div>

          <div className="current-plan-card">
            <button
              type="button"
              className="plan-close"
              onClick={() => handleAction("Close plan")}
            >
              ×
            </button>

            <div className="plan-icon">◇</div>

            <div className="plan-label">Current Plan</div>

            <div className="plan-name">Growth</div>

            <div className="plan-price">
              <strong>$15</strong>
              <span>/ month</span>
            </div>

            <button
              type="button"
              className="plan-button"
              onClick={() => handleAction("Upgrade Plan")}
            >
              <span>Upgrade Plan</span>
              <span>→</span>
            </button>
          </div>
        </aside>

        {/* ================= MAIN AREA ================= */}
        <div className="dashboard-main">
          {/* ================= HEADER ================= */}
          <header className="dashboard-header">
            <div className="command-search">
              <span className="search-icon">⌕</span>

              <input
                type="text"
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                onKeyDown={handleCommand}
                placeholder="Ask Briqona AI or type a command..."
              />

              <span className="keyboard-shortcut">⌘ K</span>
            </div>

            <div className="header-actions">
              <button
                type="button"
                className="header-ai-button copilot"
                onClick={() => handleAction("AI Copilot")}
              >
                <span>✦</span>
                <strong>AI Copilot</strong>
              </button>

              <button
                type="button"
                className="header-ai-button mission"
                onClick={() => handleAction("AI Mission Center")}
              >
                <span>✦</span>
                <strong>AI Mission Center</strong>
              </button>

              <div className="header-icon-wrapper">
                <button
                  type="button"
                  className="header-icon-button"
                  onClick={() =>
                    setShowNotifications(!showNotifications)
                  }
                  aria-label="Notifications"
                >
                  ♧
                  <span className="notification-count red-count">5</span>
                </button>

                {showNotifications && (
                  <div className="header-popover notification-popover">
                    <div className="popover-title">
                      <strong>Notifications</strong>
                      <span>5 new</span>
                    </div>

                    {notifications.slice(0, 3).map((item) => (
                      <div className="popover-item" key={item.text}>
                        <span className={`popover-dot ${item.color}`}>
                          {item.icon}
                        </span>
                        <div>
                          <strong>{item.text}</strong>
                          <small>{item.time}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="header-icon-wrapper">
                <button
                  type="button"
                  className="header-icon-button"
                  onClick={() => setShowMessages(!showMessages)}
                  aria-label="Messages"
                >
                  ▱
                  <span className="notification-count blue-count">3</span>
                </button>

                {showMessages && (
                  <div className="header-popover message-popover">
                    <div className="popover-title">
                      <strong>Messages</strong>
                      <span>3 unread</span>
                    </div>

                    <div className="message-item">
                      <div className="message-avatar">S</div>
                      <div>
                        <strong>Sarah Khan</strong>
                        <small>Can you review the HR report?</small>
                      </div>
                    </div>

                    <div className="message-item">
                      <div className="message-avatar">A</div>
                      <div>
                        <strong>Ahmed Corporation</strong>
                        <small>Payment confirmation received.</small>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="profile-wrapper">
                <button
                  type="button"
                  className="profile-button"
                  onClick={() => setShowProfile(!showProfile)}
                >
                  <div className="profile-text">
                    <strong>Ali Raza</strong>
                    <span>Owner</span>
                  </div>

                  <div className="profile-avatar">AR</div>

                  <span className="profile-chevron">⌄</span>
                </button>

                {showProfile && (
                  <div className="profile-dropdown">
                    <button
                      type="button"
                      onClick={() => handleAction("My Profile")}
                    >
                      My Profile
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAction("Account Settings")}
                    >
                      Account Settings
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAction("Billing")}
                    >
                      Billing & Plan
                    </button>
                    <div className="dropdown-line"></div>
                    <button
                      type="button"
                      onClick={() => handleAction("Logout")}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* ================= CONTENT ================= */}
          <main className="dashboard-content">
            {/* ================= HERO ================= */}
            <section className="dashboard-hero">
              <div className="hero-background-grid"></div>

              <div className="hero-heading">
                <div className="hero-title-block">
                  <h1>Good morning, Ali Raza! 👋</h1>
                  <p>
                    Here's what's happening with your business today.
                  </p>
                </div>

                <div className="hero-controls">
                  <div className="period-dropdown">
                    <button
                      type="button"
                      className="period-button"
                      onClick={() => setShowPeriod(!showPeriod)}
                    >
                      <span>▣</span>
                      <strong>{period}</strong>
                      <span>⌄</span>
                    </button>

                    {showPeriod && (
                      <div className="period-menu">
                        {["Today", "This Week", "This Month", "This Year"].map(
                          (item) => (
                            <button
                              type="button"
                              key={item}
                              onClick={() => {
                                setPeriod(item);
                                setShowPeriod(false);
                              }}
                            >
                              {item}
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    className="customize-button"
                    onClick={() => handleAction("Customize Dashboard")}
                  >
                    ✣
                    <span>Customize</span>
                  </button>
                </div>
              </div>

              <div className="hero-visual">
                <div className="wave wave-one"></div>
                <div className="wave wave-two"></div>
                <div className="wave wave-three"></div>

                <span className="hero-star star-one">✦</span>
                <span className="hero-star star-two">✦</span>
                <span className="hero-star star-three">✦</span>
              </div>

              <div className="business-pulse">
                <span className="pulse-label">AI Business Pulse</span>
                <span className="pulse-status">Excellent</span>
                <strong>87</strong>
                <span>/100</span>
              </div>

              <div className="hero-metrics">
                <MetricCard
                  title="Total Revenue"
                  value="$24,780"
                  change="12.6%"
                  positive
                  icon="↗"
                  graph="revenue"
                />

                <MetricCard
                  title="Total Profit"
                  value="$8,430"
                  change="8.3%"
                  positive
                  icon="↗"
                  graph="profit"
                />

                <MetricCard
                  title="Total Expenses"
                  value="$6,350"
                  change="-3.4%"
                  positive={false}
                  icon="▼"
                  graph="expenses"
                />

                <MetricCard
                  title="Open Invoices"
                  value="23"
                  change="$14,560 overdue"
                  positive={false}
                  icon="↗"
                  graph="invoices"
                  danger
                />
              </div>
            </section>

            {/* ================= QUICK ACTIONS ================= */}
            <section className="quick-actions-section dashboard-panel">
              <div className="section-heading">
                <h2>Quick Actions</h2>
              </div>

              <div className="quick-actions-grid">
                {quickActions.map((action) => (
                  <button
                    type="button"
                    key={action.label}
                    className={`quick-action ${action.color}`}
                    onClick={() => {
                      if (action.label === "More Actions") {
                        setShowMoreActions(!showMoreActions);
                      } else {
                        handleAction(action.label);
                      }
                    }}
                  >
                    <span className="quick-action-icon">
                      {action.icon}
                    </span>

                    <span>
                      {action.label === "More Actions"
                        ? "More Actions"
                        : `+ ${action.label}`}
                    </span>
                  </button>
                ))}
              </div>

              {showMoreActions && (
                <div className="more-actions-menu">
                  <button
                    type="button"
                    onClick={() => handleAction("New Purchase")}
                  >
                    New Purchase
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAction("Create Report")}
                  >
                    Create Report
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAction("Send Message")}
                  >
                    Send Message
                  </button>
                </div>
              )}
            </section>

            {/* ================= AI ROW ================= */}
            <div className="dashboard-grid-two">
              {/* AI COMMAND CENTER */}
              <section className="ai-command-card dashboard-panel">
                <div className="ai-card-glow"></div>

                <div className="panel-heading">
                  <div>
                    <h2>
                      <span className="cyan-icon">✦</span>
                      AI Command Center
                    </h2>
                    <p>Ask anything. Briqona AI is ready to help.</p>
                  </div>
                </div>

                <div className="ai-command-input">
                  <input
                    type="text"
                    placeholder="e.g. Show me sales trend, top customers, overdue invoices..."
                  />

                  <button
                    type="button"
                    className="voice-button"
                    onClick={() => handleAction("Voice Search")}
                  >
                    ◉
                  </button>

                  <button
                    type="button"
                    className="send-ai-button"
                    onClick={() => handleAction("Run AI Command")}
                  >
                    ↗
                  </button>
                </div>

                <div className="ai-shortcuts">
                  {[
                    "Sales Summary",
                    "Overdue Invoices",
                    "Cash Flow",
                    "Inventory Alert",
                    "HR Report",
                  ].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => handleAction(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </section>

              {/* AI MISSIONS */}
              <section className="ai-missions-card dashboard-panel">
                <div className="panel-heading mission-heading">
                  <div>
                    <h2>
                      <span className="green-icon">✦</span>
                      AI Missions
                      <span className="beta-badge">Beta</span>
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAction("View All Missions")}
                  >
                    View All
                  </button>
                </div>

                <MissionItem
                  icon="◎"
                  title="Recover overdue payments"
                  status="In Progress"
                  percentage="65%"
                  width="65%"
                  color="green"
                />

                <MissionItem
                  icon="◎"
                  title="Increase this month sales"
                  status="In Progress"
                  percentage="40%"
                  width="40%"
                  color="purple"
                />

                <MissionItem
                  icon="▤"
                  title="Reduce expenses"
                  status="Planned"
                  percentage="20%"
                  width="20%"
                  color="orange"
                />
              </section>
            </div>

            {/* ================= LOWER CONTENT ================= */}
            <div className="dashboard-lower-grid">
              {/* RECENT ACTIVITIES */}
              <section className="dashboard-panel list-panel">
                <PanelTitle
                  title="Recent Activities"
                  onClick={() => handleAction("View All Activities")}
                />

                <div className="activity-list">
                  {activities.map((item) => (
                    <div className="activity-row" key={item.text}>
                      <div className={`activity-icon ${item.color}`}>
                        {item.icon}
                      </div>

                      <span className="activity-text">{item.text}</span>

                      <span className="activity-time">{item.time}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* NOTIFICATIONS */}
              <section className="dashboard-panel list-panel">
                <PanelTitle
                  title="Notifications"
                  onClick={() => handleAction("View All Notifications")}
                />

                <div className="activity-list">
                  {notifications.map((item) => (
                    <div className="activity-row" key={item.text}>
                      <div className={`activity-icon ${item.color}`}>
                        {item.icon}
                      </div>

                      <span className="activity-text">{item.text}</span>

                      <span className="activity-time">{item.time}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* TOP CUSTOMERS */}
              <section className="dashboard-panel list-panel">
                <PanelTitle
                  title="Top Customers"
                  onClick={() => handleAction("View All Customers")}
                />

                <div className="customer-list">
                  {customers.map((customer) => (
                    <div
                      className="customer-row"
                      key={customer.name}
                    >
                      <span
                        className={`customer-avatar ${customer.color}`}
                      >
                        {customer.letter}
                      </span>

                      <span className="customer-name">
                        {customer.name}
                      </span>

                      <strong className="customer-amount">
                        {customer.amount}
                      </strong>
                    </div>
                  ))}
                </div>
              </section>

              {/* AI INSIGHTS */}
              <section className="dashboard-panel insights-panel">
                <div className="panel-heading">
                  <h2>
                    <span className="cyan-icon">✦</span>
                    AI Insights
                    <span className="new-badge">New</span>
                  </h2>
                </div>

                <div className="insight-content">
                  <p>
                    Your sales are up{" "}
                    <strong>12.6%</strong> this month.
                  </p>

                  <p>
                    Focus on recovering{" "}
                    <strong>$14,560</strong> in overdue invoices to
                    improve cash flow.
                  </p>

                  <button
                    type="button"
                    onClick={() => handleAction("View AI Insights")}
                  >
                    View All Insights →
                  </button>

                  <div className="insight-orb">
                    <span>✦</span>
                  </div>
                </div>
              </section>
            </div>

            {/* ================= RIGHT PACKAGE / INDUSTRIES ================= */}
            <aside className="dashboard-right-column">
              <section className="dashboard-panel package-panel">
                <div className="panel-heading">
                  <h2>Package & Access</h2>
                </div>

                <div className="package-title">
                  <span className="package-icon">◇</span>
                  <strong>Growth Plan</strong>
                  <span className="package-price">
                    <strong>$15</strong> / month
                  </span>
                </div>

                <div className="access-row">
                  <span>Access</span>
                  <strong>
                    <b>38</b> / 60 Features
                  </strong>
                </div>

                <button
                  type="button"
                  className="upgrade-button"
                  onClick={() => handleAction("Upgrade to Pro")}
                >
                  <span>♢</span>
                  Upgrade to Pro
                </button>

                <button
                  type="button"
                  className="features-link"
                  onClick={() => handleAction("View All Features")}
                >
                  View All Features →
                </button>
              </section>

              <section className="dashboard-panel industries-panel">
                <div className="panel-heading">
                  <h2>Industries Hub</h2>

                  <button
                    type="button"
                    onClick={() => handleAction("Manage Industries")}
                  >
                    Manage
                  </button>
                </div>

                <div className="industry-grid">
                  {industries.map((industry) => (
                    <button
                      type="button"
                      key={industry.label}
                      className={`industry-button ${industry.color} ${
                        industry.active ? "active" : ""
                      }`}
                      onClick={() =>
                        handleAction(`Industry: ${industry.label}`)
                      }
                    >
                      <span>{industry.icon}</span>
                      <small>{industry.label}</small>
                    </button>
                  ))}
                </div>
              </section>
            </aside>
          </main>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="dashboard-footer">
        <div>© 2026 Briqona OS. All rights reserved.</div>

        <div>Version 1.0.0</div>

        <div className="footer-links">
          <button
            type="button"
            onClick={() => handleAction("Privacy Policy")}
          >
            Privacy Policy
          </button>

          <button
            type="button"
            onClick={() => handleAction("Terms of Service")}
          >
            Terms of Service
          </button>

          <button
            type="button"
            onClick={() => handleAction("Support")}
          >
            Support
          </button>
        </div>
      </footer>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function MetricCard({
  title,
  value,
  change,
  positive,
  icon,
  graph,
  danger,
}) {
  return (
    <div className="metric-card">
      <div className="metric-top">
        <span>{title}</span>
        <strong className={danger ? "danger-icon" : ""}>{icon}</strong>
      </div>

      <div className="metric-value">{value}</div>

      <div className={`metric-change ${positive ? "positive" : "negative"}`}>
        <strong>{positive ? "▲" : "▼"} {change}</strong>

        {!danger && <span>vs last month</span>}
      </div>

      <div className={`mini-chart ${graph}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

function MissionItem({
  icon,
  title,
  status,
  percentage,
  width,
  color,
}) {
  return (
    <div className="mission-item">
      <div className={`mission-icon ${color}`}>{icon}</div>

      <div className="mission-main">
        <div className="mission-title">
          <strong>{title}</strong>
          <span>{status}</span>
        </div>

        <div className="mission-progress">
          <div
            className={`mission-progress-bar ${color}`}
            style={{ width }}
          ></div>
        </div>
      </div>

      <strong className="mission-percentage">{percentage}</strong>
    </div>
  );
}

function PanelTitle({ title, onClick }) {
  return (
    <div className="panel-heading simple-heading">
      <h2>{title}</h2>

      <button type="button" onClick={onClick}>
        View All
      </button>
    </div>
  );
}

export default Dashboard;
