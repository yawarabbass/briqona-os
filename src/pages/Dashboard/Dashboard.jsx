import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const navigate = (path) => {
  window.location.href = path;
};

const menuItems = [
  { label: "Overview", icon: "⌂", path: "/dashboard" },
  { label: "Business", icon: "▣", path: "/Dashboard/Business" },
  { label: "Customers", icon: "♙", path: "/Dashboard/Customers" },
  { label: "Finance", icon: "◈", path: "/Dashboard/Finance" },
  { label: "Operations", icon: "⚙", path: "/Dashboard/Operations" },
  { label: "Analytics", icon: "◒", path: "/Dashboard/Analytics" },
  { label: "AI Center", icon: "✦", path: "/Dashboard/AICenter" },
  { label: "Integrations", icon: "⊞", path: "/Dashboard/Integrations" },
  { label: "Settings", icon: "⚙", path: "/Dashboard/Settings" },
];

const quickActions = [
  {
    title: "Add Business",
    subtitle: "Create new business",
    icon: "+",
    path: "/Dashboard/Business",
  },
  {
    title: "Add Customer",
    subtitle: "Create customer",
    icon: "♙",
    path: "/Dashboard/Customers",
  },
  {
    title: "Create Invoice",
    subtitle: "Manage billing",
    icon: "▤",
    path: "/Dashboard/Finance",
  },
  {
    title: "View Analytics",
    subtitle: "Business insights",
    icon: "◒",
    path: "/Dashboard/Analytics",
  },
];

const missions = [
  {
    icon: "✦",
    title: "Revenue Optimization",
    status: "Running",
    statusClass: "running",
    description: "AI is analyzing revenue opportunities.",
    progress: 78,
  },
  {
    icon: "♙",
    title: "Customer Intelligence",
    status: "Ready",
    statusClass: "ready",
    description: "Customer insights are ready to review.",
    progress: 100,
  },
  {
    icon: "◒",
    title: "Growth Forecast",
    status: "Scheduled",
    statusClass: "scheduled",
    description: "Next business forecast is scheduled.",
    progress: 46,
  },
];

const activities = [
  {
    icon: "✓",
    title: "Business profile updated",
    detail: "Business information was updated",
    time: "2m ago",
  },
  {
    icon: "♙",
    title: "New customer added",
    detail: "Customer record created successfully",
    time: "18m ago",
  },
  {
    icon: "▤",
    title: "Invoice generated",
    detail: "New invoice is ready",
    time: "41m ago",
  },
  {
    icon: "✦",
    title: "AI insight generated",
    detail: "New business recommendation available",
    time: "1h ago",
  },
];

const notifications = [
  {
    color: "green",
    title: "Business health is good",
    detail: "All major systems are operating normally.",
  },
  {
    color: "orange",
    title: "Invoice requires attention",
    detail: "One invoice is awaiting review.",
  },
  {
    color: "purple",
    title: "New AI recommendation",
    detail: "Briqona AI has prepared a new insight.",
  },
];

const customers = [
  { initials: "AC", name: "Acme Corporation", type: "Enterprise", growth: "+18%" },
  { initials: "NS", name: "Nova Systems", type: "Business", growth: "+12%" },
  { initials: "GT", name: "Growth Tech", type: "Startup", growth: "+9%" },
];

function BriqonaLogo() {
  return (
    <div className="briqona-logo" aria-label="Briqona">
      <div className="briqona-mark" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="brand-copy">
        <strong>
          Briq<span>ona</span>
        </strong>
        <small>INTELLIGENT BUSINESS OS</small>
      </div>
    </div>
  );
}

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [command, setCommand] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [commandMessage, setCommandMessage] = useState("");

  useEffect(() => {
    const closeMenus = (event) => {
      if (!event.target.closest(".profile-area")) {
        setProfileOpen(false);
      }

      if (!event.target.closest(".notification-area")) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener("click", closeMenus);

    return () => {
      document.removeEventListener("click", closeMenus);
    };
  }, []);

  const goTo = (path) => {
    setSidebarOpen(false);
    navigate(path);
  };

  const handleCommand = (event) => {
    event.preventDefault();

    if (!command.trim()) {
      setCommandMessage("Enter a command for Briqona AI.");
      return;
    }

    setCommandMessage(`AI command received: "${command.trim()}"`);
    setCommand("");
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (!search.trim()) return;

    const value = search.toLowerCase();

    if (value.includes("business")) {
      goTo("/Dashboard/Business");
    } else if (value.includes("customer")) {
      goTo("/Dashboard/Customers");
    } else if (value.includes("finance") || value.includes("invoice")) {
      goTo("/Dashboard/Finance");
    } else if (value.includes("analytics")) {
      goTo("/Dashboard/Analytics");
    } else {
      setCommandMessage(`Search: "${search.trim()}"`);
    }
  };

  return (
    <div className="master-dashboard">
      {sidebarOpen && (
        <button
          className="dashboard-overlay"
          aria-label="Close menu"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-brand">
          <BriqonaLogo />

          <button
            className="sidebar-close"
            aria-label="Close sidebar"
            onClick={() => setSidebarOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="workspace-card">
          <div className="workspace-avatar">B</div>

          <div>
            <small>WORKSPACE</small>
            <strong>Briqona Workspace</strong>
          </div>

          <span className="online-dot" />
        </div>

        <div className="menu-heading">MAIN MENU</div>

        <nav className="dashboard-nav">
          {menuItems.slice(0, 7).map((item) => (
            <button
              key={item.label}
              className={`nav-item ${
                item.label === "Overview" ? "active" : ""
              }`}
              onClick={() => goTo(item.path)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>

              {item.label === "AI Center" && <small>AI</small>}
            </button>
          ))}
        </nav>

        <div className="menu-heading management-heading">MANAGEMENT</div>

        <nav className="dashboard-nav">
          {menuItems.slice(7).map((item) => (
            <button
              key={item.label}
              className="nav-item"
              onClick={() => goTo(item.path)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          className="sidebar-ai-card"
          onClick={() => goTo("/Dashboard/AICenter")}
        >
          <span className="ai-orb">✦</span>

          <span>
            <strong>Briqona AI</strong>
            <small>Intelligence engine online</small>
          </span>
        </button>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <button
            className="mobile-menu-button"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <form className="dashboard-search" onSubmit={handleSearch}>
            <span>⌕</span>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search anything..."
            />

            <kbd>⌘ K</kbd>
          </form>

          <div className="topbar-actions">
            <button
              className="top-action ai-copilot"
              onClick={() => goTo("/Dashboard/AICenter")}
            >
              <span>✦</span>
              <span>AI Copilot</span>
            </button>

            <button
              className="top-action mission-button"
              onClick={() => goTo("/Dashboard/AICenter")}
            >
              <span>◈</span>
              <span>Missions</span>
              <b>3</b>
            </button>

            <div className="notification-area">
              <button
                className="icon-button notification-button"
                aria-label="Notifications"
                onClick={(event) => {
                  event.stopPropagation();
                  setNotificationOpen((value) => !value);
                  setProfileOpen(false);
                }}
              >
                ♧
                <b>3</b>
              </button>

              {notificationOpen && (
                <div className="dropdown notification-dropdown">
                  <div className="dropdown-title">Notifications</div>

                  {notifications.map((item) => (
                    <button
                      key={item.title}
                      className="dropdown-notification"
                      onClick={() => setNotificationOpen(false)}
                    >
                      <span className={`notification-dot ${item.color}`} />

                      <span>
                        <strong>{item.title}</strong>
                        <small>{item.detail}</small>
                      </span>
                    </button>
                  ))}

                  <button
                    className="dropdown-link"
                    onClick={() => goTo("/Dashboard/Notifications")}
                  >
                    View all notifications →
                  </button>
                </div>
              )}
            </div>

            <div className="profile-area">
              <button
                className="profile"
                onClick={(event) => {
                  event.stopPropagation();
                  setProfileOpen((value) => !value);
                  setNotificationOpen(false);
                }}
              >
                <span className="profile-avatar">YA</span>

                <span className="profile-text">
                  <strong>Workspace Admin</strong>
                  <small>Administrator</small>
                </span>

                <span className="profile-arrow">⌄</span>
              </button>

              {profileOpen && (
                <div className="dropdown profile-dropdown">
                  <button onClick={() => goTo("/Dashboard/Profile")}>
                    <span>◉</span>
                    My Profile
                  </button>

                  <button onClick={() => goTo("/Dashboard/Settings")}>
                    <span>⚙</span>
                    Settings
                  </button>

                  <button onClick={() => goTo("/help")}>
                    <span>?</span>
                    Help Center
                  </button>

                  <div className="dropdown-divider" />

                  <button
                    className="logout-button"
                    onClick={() => goTo("/login")}
                  >
                    <span>↪</span>
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          <section className="welcome-row">
            <div>
              <div className="eyebrow">MASTER DASHBOARD</div>

              <h1>
                Welcome back, <span>Admin</span>
                <i>.</i>
              </h1>

              <p>
                Here's what's happening across your business today.
              </p>
            </div>

            <button
              className="date-button"
              onClick={() => goTo("/Dashboard/Analytics")}
            >
              <span>▣</span>

              <div>
                <small>REPORTING PERIOD</small>
                <strong>August 2026</strong>
              </div>

              <span>⌄</span>
            </button>
          </section>

          <section className="stats-grid">
            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-icon">◈</span>
                <span className="stat-change">+12.8%</span>
              </div>

              <small>TOTAL REVENUE</small>
              <strong>$248,920</strong>

              <div className="stat-bottom">
                <span>vs last month</span>

                <svg className="mini-chart positive" viewBox="0 0 95 25">
                  <polyline
                    points="0,21 12,18 24,19 37,12 48,15 60,8 72,10 82,4 95,6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-icon negative">♙</span>
                <span className="stat-change negative">+8.4%</span>
              </div>

              <small>ACTIVE CUSTOMERS</small>
              <strong>12,842</strong>

              <div className="stat-bottom">
                <span>vs last month</span>

                <svg className="mini-chart negative" viewBox="0 0 95 25">
                  <polyline
                    points="0,20 12,16 24,18 36,13 48,15 60,8 72,11 83,5 95,8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-icon warning">▤</span>
                <span className="stat-change warning">+5.2%</span>
              </div>

              <small>ORDERS THIS MONTH</small>
              <strong>4,681</strong>

              <div className="stat-bottom">
                <span>vs last month</span>

                <svg className="mini-chart warning" viewBox="0 0 95 25">
                  <polyline
                    points="0,20 13,17 24,19 36,11 49,14 61,9 73,12 83,5 95,7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-icon">✦</span>
                <span className="stat-change">+16.3%</span>
              </div>

              <small>AI EFFICIENCY SCORE</small>
              <strong>94.8%</strong>

              <div className="stat-bottom">
                <span>system performance</span>

                <svg className="mini-chart positive" viewBox="0 0 95 25">
                  <polyline
                    points="0,18 12,18 24,13 36,15 48,8 60,11 72,7 83,9 95,3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </section>

          <section className="section-block">
            <div className="section-title-row">
              <h2>Quick Actions</h2>

              <button
                className="text-button"
                onClick={() => goTo("/Dashboard/Business")}
              >
                View all →
              </button>
            </div>

            <div className="quick-grid">
              {quickActions.map((item) => (
                <button
                  className="quick-card"
                  key={item.title}
                  onClick={() => goTo(item.path)}
                >
                  <span className="quick-icon">{item.icon}</span>

                  <span className="quick-copy">
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </span>

                  <span className="quick-arrow">→</span>
                </button>
              ))}
            </div>
          </section>

          <section className="ai-command-card">
            <div className="ai-command-icon">✦</div>

            <div className="ai-command-copy">
              <div className="eyebrow">BRIQONA AI COMMAND CENTER</div>

              <h2>What would you like to accomplish?</h2>

              <p>
                Ask Briqona AI to analyze, optimize, automate, or explain
                anything.
              </p>
            </div>

            <form className="ai-command-input" onSubmit={handleCommand}>
              <input
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                placeholder="Ask Briqona AI anything..."
              />

              <button type="submit" aria-label="Run AI command">
                →
              </button>
            </form>
          </section>

          {commandMessage && (
            <div className="command-message">
              <span>✦</span>
              {commandMessage}
              <button onClick={() => setCommandMessage("")}>×</button>
            </div>
          )}

          <section className="two-column-grid">
            <div className="panel">
              <div className="panel-header">
                <div>
                  <div className="eyebrow">AI MISSION CENTER</div>
                  <h2>Active Missions</h2>
                </div>

                <button
                  className="more-button"
                  onClick={() => goTo("/Dashboard/AICenter")}
                >
                  •••
                </button>
              </div>

              <div className="mission-list">
                {missions.map((mission) => (
                  <button
                    className="mission-item mission-button-row"
                    key={mission.title}
                    onClick={() => goTo("/Dashboard/AICenter")}
                  >
                    <span className="mission-icon">{mission.icon}</span>

                    <span className="mission-info">
                      <span className="mission-name">
                        <strong>{mission.title}</strong>
                        <span
                          className={`status ${mission.statusClass}`}
                        >
                          {mission.status}
                        </span>
                      </span>

                      <p>{mission.description}</p>

                      <span className="progress-row">
                        <span className="progress-track">
                          <span
                            style={{ width: `${mission.progress}%` }}
                          />
                        </span>

                        <b>{mission.progress}%</b>
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              <button
                className="panel-footer-link"
                onClick={() => goTo("/Dashboard/AICenter")}
              >
                View all missions →
              </button>
            </div>

            <div className="panel">
              <div className="panel-header">
                <div>
                  <div className="eyebrow">SYSTEM ACTIVITY</div>
                  <h2>Recent Activity</h2>
                </div>

                <button
                  className="more-button"
                  onClick={() => goTo("/Dashboard/Analytics")}
                >
                  •••
                </button>
              </div>

              <div className="activity-list">
                {activities.map((activity) => (
                  <button
                    className="activity-item activity-button-row"
                    key={activity.title}
                    onClick={() => goTo("/Dashboard/Analytics")}
                  >
                    <span className="activity-icon">{activity.icon}</span>

                    <span className="activity-copy">
                      <strong>{activity.title}</strong>
                      <small>{activity.detail}</small>
                    </span>

                    <time>{activity.time}</time>
                  </button>
                ))}
              </div>

              <button
                className="panel-footer-link"
                onClick={() => goTo("/Dashboard/Analytics")}
              >
                View activity log →
              </button>
            </div>
          </section>

          <section className="two-column-grid lower-grid">
            <div className="panel">
              <div className="panel-header">
                <div>
                  <div className="eyebrow">SYSTEM CENTER</div>
                  <h2>Notifications</h2>
                </div>

                <span className="alert-count">3</span>
              </div>

              <div className="notification-list">
                {notifications.map((item) => (
                  <button
                    className="notification-item"
                    key={item.title}
                    onClick={() => goTo("/Dashboard/Notifications")}
                  >
                    <span className={`notification-dot ${item.color}`} />

                    <span className="notification-copy">
                      <strong>{item.title}</strong>
                      <small>{item.detail}</small>
                    </span>

                    <span>→</span>
                  </button>
                ))}
              </div>

              <button
                className="panel-footer-link"
                onClick={() => goTo("/Dashboard/Notifications")}
              >
                View all notifications →
              </button>
            </div>

            <div className="panel">
              <div className="panel-header">
                <div>
                  <div className="eyebrow">CUSTOMER CENTER</div>
                  <h2>Top Customers</h2>
                </div>

                <button
                  className="more-button"
                  onClick={() => goTo("/Dashboard/Customers")}
                >
                  •••
                </button>
              </div>

              <div className="customer-list">
                {customers.map((customer) => (
                  <button
                    className="customer-item customer-button-row"
                    key={customer.name}
                    onClick={() => goTo("/Dashboard/Customers")}
                  >
                    <span className="customer-avatar">
                      {customer.initials}
                    </span>

                    <span className="customer-copy">
                      <strong>{customer.name}</strong>
                      <small>{customer.type}</small>
                    </span>

                    <span className="customer-growth">
                      {customer.growth}
                    </span>
                  </button>
                ))}
              </div>

              <button
                className="panel-footer-link"
                onClick={() => goTo("/Dashboard/Customers")}
              >
                View all customers →
              </button>
            </div>
          </section>

          <section className="business-insight">
            <div>
              <div className="eyebrow">BRIQONA BUSINESS INTELLIGENCE</div>

              <h2>AI Business Insight</h2>

              <p>
                Your business performance is trending positively.{" "}
                <strong>
                  Revenue is up 12.8% and customer activity is growing.
                </strong>{" "}
                Briqona AI recommends reviewing your highest-value customer
                segments to identify the next growth opportunity.
              </p>

              <button
                className="insight-button"
                onClick={() => goTo("/Dashboard/Analytics")}
              >
                Explore insight →
              </button>
            </div>

            <button
              className="insight-icon"
              aria-label="Open AI insight"
              onClick={() => goTo("/Dashboard/AICenter")}
            >
              ✦
            </button>
          </section>

          <footer className="dashboard-footer">
            <span>© 2026 Briqona. Intelligent Business OS.</span>

            <span>
              System status: <b>All systems operational</b>
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

