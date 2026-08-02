import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const go = (path) => {
  window.location.href = path;
};

const menuMain = [
  { label: "Dashboard", icon: "⌂", path: "/dashboard" },
  { label: "AI Command Center", icon: "✦", path: "/ai-command-center", badge: "New" },
  { label: "AI Workforce", icon: "◎", dropdown: true },
  { label: "Outcome Center", icon: "◎", path: "/outcome-center" },
  { label: "Industries Hub", icon: "▦", dropdown: true },
  { label: "CRM", icon: "♙", path: "/customers" },
  { label: "Finance", icon: "$", path: "/finance" },
  { label: "HR", icon: "♟", path: "/hr" },
  { label: "Inventory", icon: "▣", path: "/inventory" },
  { label: "Projects & Tasks", icon: "✓", path: "/projects" },
  { label: "Documents", icon: "▤", path: "/documents" },
  { label: "Automation", icon: "ϟ", path: "/automation" },
  { label: "Analytics", icon: "▥", path: "/analytics" },
  { label: "Communication", icon: "▣", path: "/communication" },
  { label: "Support / Helpdesk", icon: "◉", path: "/support" },
  { label: "Integrations", icon: "⌘", path: "/integrations" },
  { label: "Settings", icon: "⚙", path: "/settings" },
];

const workforceItems = [
  "AI Employees",
  "AI Tasks",
  "Mission Center",
];

const industryItems = [
  "Office",
  "HR",
  "Hospital",
  "Restaurant",
  "Retail",
  "Construction",
  "Real Estate",
  "Education",
  "Manufacturing",
  "Professional Services",
];

const quickActions = [
  { icon: "$", title: "New Invoice", path: "/invoices/new", type: "green" },
  { icon: "♙", title: "New Lead", path: "/customers/new", type: "blue" },
  { icon: "▤", title: "New Expense", path: "/finance", type: "orange" },
  { icon: "✓", title: "New Task", path: "/projects", type: "purple" },
  { icon: "♙", title: "Add Employee", path: "/hr", type: "cyan" },
  { icon: "♙", title: "Add Customer", path: "/customers/new", type: "pink" },
];

const activities = [
  ["▤", "Invoice #INV-2026-1256 created", "2 min ago"],
  ["$", "Payment received from Ahmed Co.", "18 min ago"],
  ["♙", "New lead from Website", "45 min ago"],
  ["✓", 'Task "Follow up with client"', "1 hour ago"],
  ["▤", "Expense $250 added", "2 hours ago"],
];

const notifications = [
  ["!", "Overdue invoice from Ali Traders", "2 min ago", "red"],
  ["△", "Low stock alert for 3 products", "25 min ago", "orange"],
  ["♙", "Leave request from Sara Khan", "1 hour ago", "cyan"],
  ["✓", "System backup completed", "2 hours ago", "green"],
];

const customers = [
  ["A", "Ahmed Corporation", "$5,780", "blue"],
  ["G", "Global Solutions", "$4,230", "green"],
  ["T", "TechNova LLC", "$3,620", "yellow"],
  ["A", "Al-Barkat Traders", "$2,890", "cyan"],
  ["F", "Future Enterprises", "$2,450", "red"],
];

function Sparkline({ type = "blue" }) {
  return (
    <svg className={`sparkline ${type}`} viewBox="0 0 150 55" preserveAspectRatio="none">
      <path
        d="M2 44 C15 38, 18 45, 28 30 S42 35, 52 22 S67 32, 76 17 S92 35, 103 20 S117 28, 127 12 S141 22, 148 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StatCard({ title, value, change, negative, type }) {
  return (
    <div className="stat-card">
      <div className="stat-title">{title}</div>
      <strong>{value}</strong>

      <div className={`stat-change ${negative ? "negative" : ""}`}>
        {negative ? "▼" : "▲"} {change}
      </div>

      <div className="stat-caption">
        {negative ? "vs last month" : "vs last month"}
      </div>

      <Sparkline type={type} />
    </div>
  );
}

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [workforceOpen, setWorkforceOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [periodOpen, setPeriodOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [commandResult, setCommandResult] = useState("");

  useEffect(() => {
    const close = () => {
      setProfileOpen(false);
      setPeriodOpen(false);
    };

    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const handleCommand = (e) => {
    e.preventDefault();

    if (!command.trim()) return;

    setCommandResult(`Briqona AI received: "${command}"`);
    setCommand("");
  };

  const handleMenu = (item) => {
    if (item.label === "AI Workforce") {
      setWorkforceOpen((v) => !v);
      return;
    }

    if (item.label === "Industries Hub") {
      setIndustriesOpen((v) => !v);
      return;
    }

    if (item.path) {
      go(item.path);
      setSidebarOpen(false);
    }
  };

  return (
    <div className="dashboard-page">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <button
          className="dashboard-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        />
      )}

      {/* SIDEBAR */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}>

        <div className="sidebar-top">

          <div className="brand">
            <img
              src="/briqona-logo.png"
              alt="Briqona OS"
              className="brand-logo"
            />

            <div>
              <div className="brand-name">
                BRIQONA <span>OS</span>
              </div>
              <small>All-in-One Business Operating System</small>
            </div>
          </div>

          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            ×
          </button>

        </div>

        <nav className="sidebar-nav">

          {menuMain.map((item) => (
            <React.Fragment key={item.label}>

              <button
                className={`sidebar-item ${
                  item.label === "Dashboard" ? "active" : ""
                }`}
                onClick={() => handleMenu(item)}
              >
                <span className="sidebar-icon">{item.icon}</span>

                <span className="sidebar-label">
                  {item.label}
                </span>

                {item.badge && (
                  <span className="new-badge">{item.badge}</span>
                )}

                {item.dropdown && (
                  <span className="dropdown-arrow">
                    {item.label === "AI Workforce"
                      ? workforceOpen
                        ? "⌃"
                        : "⌄"
                      : industriesOpen
                      ? "⌃"
                      : "⌄"}
                  </span>
                )}
              </button>

              {item.label === "AI Workforce" && workforceOpen && (
                <div className="sidebar-submenu">
                  {workforceItems.map((sub) => (
                    <button
                      key={sub}
                      onClick={() =>
                        go(`/ai-workforce/${sub
                          .toLowerCase()
                          .replaceAll(" ", "-")}`)
                      }
                    >
                      <span>•</span>
                      {sub}
                    </button>
                  ))}
                </div>
              )}

              {item.label === "Industries Hub" && industriesOpen && (
                <div className="sidebar-submenu">
                  {industryItems.slice(0, 6).map((sub) => (
                    <button
                      key={sub}
                      onClick={() =>
                        go(
                          `/industries/${sub
                            .toLowerCase()
                            .replaceAll(" ", "-")}`
                        )
                      }
                    >
                      <span>•</span>
                      {sub}
                    </button>
                  ))}
                </div>
              )}

            </React.Fragment>
          ))}

        </nav>

        {/* PLAN */}
        <div className="current-plan">

          <button className="plan-close">×</button>

          <div className="plan-icon">◇</div>

          <div className="plan-small">Current Plan</div>

          <div className="plan-title">Growth</div>

          <div className="plan-price">
            <strong>$15</strong> / month
          </div>

          <button
            className="upgrade-button"
            onClick={() => go("/pricing")}
          >
            Upgrade Plan
            <span>→</span>
          </button>

        </div>

      </aside>

      {/* MAIN */}
      <main className="dashboard-main">

        {/* TOPBAR */}
        <header className="dashboard-header">

          <button
            className="mobile-menu"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <form
            className="command-search"
            onSubmit={handleCommand}
          >
            <span>⌕</span>

            <input
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="Ask Briqona AI or type a command..."
            />

            <kbd>⌘ K</kbd>
          </form>

          <div className="header-actions">

            <button
              className="header-btn copilot"
              onClick={() => go("/ai-command-center")}
            >
              ✦ AI Copilot
            </button>

            <button
              className="header-btn mission"
              onClick={() => go("/ai-mission-center")}
            >
              ✦ AI Mission Center
            </button>

            <button
              className="header-icon"
              onClick={() => go("/notifications")}
            >
              ♧
              <b>5</b>
            </button>

            <button
              className="header-icon"
              onClick={() => go("/communication")}
            >
              ▢
              <b className="blue">3</b>
            </button>

            <div className="profile-wrapper">

              <button
                className="profile-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setProfileOpen((v) => !v);
                }}
              >
                <div className="profile-info">
                  <strong>Ali Raza</strong>
                  <small>Owner</small>
                </div>

                <div className="profile-avatar">AR</div>

                <span>⌄</span>
              </button>

              {profileOpen && (
                <div className="profile-dropdown">
                  <button onClick={() => go("/profile")}>
                    Profile
                  </button>
                  <button onClick={() => go("/settings")}>
                    Settings
                  </button>
                  <button onClick={() => go("/login")}>
                    Sign out
                  </button>
                </div>
              )}

            </div>

          </div>
        </header>

        {/* CONTENT */}
        <div className="dashboard-content">

          {/* HERO */}
          <section className="hero-dashboard">

            <div className="hero-copy">
              <h1>
                Good morning, Ali Raza! <span>👋</span>
              </h1>

              <p>
                Here's what's happening with your business today.
              </p>

              <div className="business-pulse">
                <span>✦</span>
                <div>
                  <small>AI Business Pulse</small>
                  <strong>Excellent</strong>
                </div>
                <b>87<small>/100</small></b>
              </div>
            </div>

            <div className="hero-visual">
              <div className="wave wave-one" />
              <div className="wave wave-two" />
              <div className="wave wave-three" />
              <div className="wave-point" />
            </div>

            <div className="hero-stats">

              <StatCard
                title="Total Revenue"
                value="$24,780"
                change="12.6%"
                type="blue"
              />

              <StatCard
                title="Total Profit"
                value="$8,430"
                change="8.3%"
                type="purple"
              />

              <StatCard
                title="Total Expenses"
                value="$6,350"
                change="-3.4%"
                negative
                type="orange"
              />

              <StatCard
                title="Open Invoices"
                value="23"
                change="$14,560 overdue"
                negative
                type="blue"
              />

            </div>

          </section>

          {/* QUICK ACTIONS */}
          <section className="quick-section">

            <div className="section-heading">
              <h2>Quick Actions</h2>
            </div>

            <div className="quick-actions">

              {quickActions.map((action) => (
                <button
                  key={action.title}
                  className={`quick-action ${action.type}`}
                  onClick={() => go(action.path)}
                >
                  <span className="quick-action-icon">
                    {action.icon}
                  </span>

                  <span>{action.title}</span>
                </button>
              ))}

              <button
                className="quick-action more"
                onClick={() => go("/actions")}
              >
                <span className="quick-action-icon">▦</span>
                <span>More Actions</span>
              </button>

            </div>

          </section>

          {/* MAIN GRID */}
          <section className="dashboard-grid">

            {/* CENTER */}
            <div className="dashboard-center">

              {/* AI COMMAND */}
              <div className="ai-command-card">

                <div className="ai-command-header">
                  <div className="ai-command-title">
                    <span>✦</span>
                    <div>
                      <h2>AI Command Center</h2>
                      <p>Ask anything. Briqona AI is ready to help.</p>
                    </div>
                  </div>
                </div>

                <form
                  className="ai-input"
                  onSubmit={handleCommand}
                >
                  <input
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    placeholder="e.g. Show me sales trend, top customers, overdue invoices..."
                  />

                  <button type="submit">➤</button>
                </form>

                {commandResult && (
                  <div className="command-result">
                    {commandResult}
                  </div>
                )}

                <div className="ai-suggestions">
                  <button onClick={() => setCommand("Show sales summary")}>
                    Sales Summary
                  </button>
                  <button onClick={() => setCommand("Show overdue invoices")}>
                    Overdue Invoices
                  </button>
                  <button onClick={() => setCommand("Show cash flow")}>
                    Cash Flow
                  </button>
                  <button onClick={() => setCommand("Show inventory alerts")}>
                    Inventory Alert
                  </button>
                  <button onClick={() => setCommand("Show HR report")}>
                    HR Report
                  </button>
                </div>

              </div>

              {/* AI MISSIONS */}
              <div className="missions-card">

                <div className="card-heading">
                  <div>
                    <span className="eyebrow">AI MISSION CENTER</span>
                    <h2>
                      AI Missions <small>Beta</small>
                    </h2>
                  </div>

                  <button onClick={() => go("/ai-mission-center")}>
                    View All
                  </button>
                </div>

                <div className="mission-row">
                  <span className="mission-icon green">◎</span>

                  <div className="mission-content">
                    <div>
                      <strong>Recover overdue payments</strong>
                      <small>In Progress</small>
                    </div>

                    <div className="mission-progress">
                      <span style={{ width: "65%" }} />
                    </div>
                  </div>

                  <b>65%</b>
                </div>

                <div className="mission-row">
                  <span className="mission-icon purple">◎</span>

                  <div className="mission-content">
                    <div>
                      <strong>Increase this month sales</strong>
                      <small>In Progress</small>
                    </div>

                    <div className="mission-progress purple-bar">
                      <span style={{ width: "40%" }} />
                    </div>
                  </div>

                  <b>40%</b>
                </div>

                <div className="mission-row">
                  <span className="mission-icon orange">◎</span>

                  <div className="mission-content">
                    <div>
                      <strong>Reduce expenses</strong>
                      <small>Planned</small>
                    </div>

                    <div className="mission-progress orange-bar">
                      <span style={{ width: "20%" }} />
                    </div>
                  </div>

                  <b>20%</b>
                </div>

              </div>

              {/* LOWER CARDS */}
              <div className="lower-cards">

                {/* ACTIVITIES */}
                <div className="info-card">

                  <div className="card-heading">
                    <h2>Recent Activities</h2>
                    <button onClick={() => go("/activities")}>
                      View All
                    </button>
                  </div>

                  <div className="activity-list">

                    {activities.map(([icon, title, time]) => (
                      <button
                        className="activity-item"
                        key={title}
                        onClick={() => go("/activities")}
                      >
                        <span>{icon}</span>

                        <strong>{title}</strong>

                        <small>{time}</small>
                      </button>
                    ))}

                  </div>

                </div>

                {/* NOTIFICATIONS */}
                <div className="info-card">

                  <div className="card-heading">
                    <h2>Notifications</h2>
                    <button onClick={() => go("/notifications")}>
                      View All
                    </button>
                  </div>

                  <div className="activity-list">

                    {notifications.map(([icon, title, time, color]) => (
                      <button
                        className="activity-item"
                        key={title}
                        onClick={() => go("/notifications")}
                      >
                        <span className={`notice-icon ${color}`}>
                          {icon}
                        </span>

                        <strong>{title}</strong>

                        <small>{time}</small>
                      </button>
                    ))}

                  </div>

                </div>

                {/* CUSTOMERS */}
                <div className="info-card">

                  <div className="card-heading">
                    <h2>Top Customers</h2>
                    <button onClick={() => go("/customers")}>
                      View All
                    </button>
                  </div>

                  <div className="customers-list">

                    {customers.map(([letter, name, price, color]) => (
                      <button
                        className="customer-row"
                        key={name}
                        onClick={() => go("/customers")}
                      >
                        <span className={`customer-avatar ${color}`}>
                          {letter}
                        </span>

                        <strong>{name}</strong>

                        <b>{price}</b>
                      </button>
                    ))}

                  </div>

                </div>

                {/* INSIGHTS */}
                <div className="info-card insights-card">

                  <div className="card-heading">
                    <h2>
                      ✦ AI Insights
                    </h2>

                    <span className="insight-new">
                      New
                    </span>
                  </div>

                  <p>
                    Your sales are up <strong>12.6%</strong> this month.
                  </p>

                  <p>
                    Focus on recovering <strong>$14,560</strong> in overdue
                    invoices to improve cash flow.
                  </p>

                  <div className="insight-art">
                    ◉
                  </div>

                  <button
                    className="insight-button"
                    onClick={() => go("/ai-insights")}
                  >
                    View All Insights →
                  </button>

                </div>

              </div>

            </div>

            {/* RIGHT RAIL */}
            <aside className="dashboard-right">

              {/* PACKAGE */}
              <div className="right-card">

                <div className="right-heading">
                  <h3>Package & Access</h3>
                </div>

                <div className="plan-name">
                  <span>◇</span>
                  <strong>Growth Plan</strong>
                  <b>$15 <small>/ month</small></b>
                </div>

                <div className="access-row">
                  <span>Access</span>
                  <strong>38 <small>/ 60 Features</small></strong>
                </div>

                <button
                  className="pro-button"
                  onClick={() => go("/pricing")}
                >
                  🚀 Upgrade to Pro
                </button>

                <button
                  className="view-features"
                  onClick={() => go("/pricing")}
                >
                  View All Features →
                </button>

              </div>

              {/* INDUSTRIES */}
              <div className="right-card">

                <div className="right-heading">
                  <h3>Industries Hub</h3>

                  <button
                    onClick={() => go("/industries")}
                  >
                    Manage
                  </button>
                </div>

                <div className="industry-grid">

                  {industryItems.map((industry, index) => (
                    <button
                      key={industry}
                      className={`industry-item industry-${index}`}
                      onClick={() =>
                        go(
                          `/industries/${industry
                            .toLowerCase()
                            .replaceAll(" ", "-")}`
                        )
                      }
                    >
                      <span>
                        {["▥", "♙", "▣", "♧", "▤", "⚒", "⌂", "◇", "▥", "◉"][
                          index
                        ]}
                      </span>

                      <small>{industry}</small>
                    </button>
                  ))}

                  <button
                    className="industry-item"
                    onClick={() => go("/industries")}
                  >
                    <span>•••</span>
                    <small>More</small>
                  </button>

                </div>

              </div>

            </aside>

          </section>

        </div>

        {/* FOOTER */}
        <footer className="dashboard-footer">

          <span>© 2026 Briqona OS. All rights reserved.</span>

          <span>Version 1.0.0</span>

          <div>
            <button onClick={() => go("/privacy")}>
              Privacy Policy
            </button>

            <button onClick={() => go("/terms")}>
              Terms of Service
            </button>

            <button onClick={() => go("/support")}>
              Support
            </button>
          </div>

        </footer>

      </main>

    </div>
  );
}

export default Dashboard;
