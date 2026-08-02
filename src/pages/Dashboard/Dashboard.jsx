import React, { useState } from "react";
import "./Dashboard.css";

const menuItems = [
  { icon: "▦", label: "Overview", path: "/dashboard" },
  { icon: "▣", label: "Business", path: "/dashboard/business" },
  { icon: "♙", label: "Customers", path: "/dashboard/customers" },
  { icon: "▤", label: "Invoices", path: "/dashboard/invoices" },
  { icon: "⌁", label: "Analytics", path: "/dashboard/analytics", badge: "New" },
  { icon: "▣", label: "Finance", path: "/dashboard/finance" },
];

const managementItems = [
  { icon: "♙", label: "Team", path: "/dashboard/team" },
  { icon: "□", label: "Calendar", path: "/dashboard/calendar" },
  { icon: "▱", label: "Projects", path: "/dashboard/projects" },
  { icon: "⚙", label: "Settings", path: "/dashboard/settings" },
];

const stats = [
  {
    icon: "▣",
    title: "Total Revenue",
    value: "$184,250",
    change: "+18.6%",
    type: "positive",
    points: "12,18 35,12 58,16 80,7 104,12 128,2",
  },
  {
    icon: "↗",
    title: "Net Profit",
    value: "$72,840",
    change: "+24.3%",
    type: "positive",
    points: "12,20 35,15 55,18 78,10 100,14 128,4",
  },
  {
    icon: "▤",
    title: "Total Expenses",
    value: "$42,610",
    change: "-8.2%",
    type: "negative",
    points: "12,6 35,10 55,7 78,14 100,11 128,18",
  },
  {
    icon: "▣",
    title: "Open Invoices",
    value: "$31,480",
    change: "12",
    type: "warning",
    points: "12,18 35,15 55,18 78,8 100,12 128,4",
  },
];

const quickActions = [
  {
    icon: "+",
    title: "Create Invoice",
    subtitle: "Send a new invoice",
    path: "/dashboard/invoices",
  },
  {
    icon: "♙",
    title: "Add Customer",
    subtitle: "Create customer profile",
    path: "/dashboard/customers",
  },
  {
    icon: "⌁",
    title: "View Analytics",
    subtitle: "Explore business data",
    path: "/dashboard/analytics",
  },
  {
    icon: "✦",
    title: "Ask AI",
    subtitle: "Get instant insights",
    action: "ai",
  },
];

const missions = [
  {
    icon: "⌁",
    title: "Analyze Monthly Revenue",
    status: "Running",
    description: "AI is analyzing your revenue trends",
    progress: 72,
  },
  {
    icon: "▣",
    title: "Optimize Expenses",
    status: "Ready",
    description: "Find potential savings opportunities",
    progress: 0,
  },
  {
    icon: "♙",
    title: "Customer Health Check",
    status: "Scheduled",
    description: "Review customer engagement signals",
    progress: 0,
  },
];

const activities = [
  {
    icon: "✓",
    title: "Invoice INV-2048 paid",
    subtitle: "Acme Corporation",
    time: "12 min ago",
  },
  {
    icon: "♙",
    title: "New customer registered",
    subtitle: "Nova Technologies",
    time: "34 min ago",
  },
  {
    icon: "✦",
    title: "AI Mission completed",
    subtitle: "Monthly revenue analysis",
    time: "59 min ago",
  },
  {
    icon: "▤",
    title: "Expense approval required",
    subtitle: "Marketing department",
    time: "2 hr ago",
  },
];

const notifications = [
  {
    dot: "green",
    title: "Payment received",
    subtitle: "$4,500 from Acme Corp",
  },
  {
    dot: "orange",
    title: "Invoice overdue",
    subtitle: "INV-2019 needs attention",
  },
  {
    dot: "purple",
    title: "AI report ready",
    subtitle: "Monthly insights available",
  },
];

const customers = [
  {
    initials: "AC",
    name: "Acme Corporation",
    amount: "$24,800",
    growth: "+18%",
  },
  {
    initials: "NT",
    name: "Nova Technologies",
    amount: "$18,420",
    growth: "+12%",
  },
  {
    initials: "VS",
    name: "Vertex Solutions",
    amount: "$15,930",
    growth: "+9%",
  },
];

function MiniChart({ points, type }) {
  return (
    <svg className={`mini-chart ${type}`} viewBox="0 0 140 30">
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [aiCommand, setAiCommand] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showCopilot, setShowCopilot] = useState(false);
  const [showMissionCenter, setShowMissionCenter] = useState(false);
  const [toast, setToast] = useState("");

  const navigate = (path) => {
    window.location.href = path;
  };

  const showToast = (message) => {
    setToast(message);

    window.clearTimeout(window.__briqonaToastTimer);

    window.__briqonaToastTimer = window.setTimeout(() => {
      setToast("");
    }, 2200);
  };

  const submitCommand = () => {
    const value = command.trim();

    if (!value) return;

    const lower = value.toLowerCase();

    if (lower.includes("business")) {
      navigate("/dashboard/business");
      return;
    }

    if (lower.includes("customer")) {
      navigate("/dashboard/customers");
      return;
    }

    if (lower.includes("invoice")) {
      navigate("/dashboard/invoices");
      return;
    }

    if (lower.includes("analytics")) {
      navigate("/dashboard/analytics");
      return;
    }

    if (lower.includes("finance")) {
      navigate("/dashboard/finance");
      return;
    }

    if (lower.includes("team")) {
      navigate("/dashboard/team");
      return;
    }

    if (lower.includes("calendar")) {
      navigate("/dashboard/calendar");
      return;
    }

    if (lower.includes("project")) {
      navigate("/dashboard/projects");
      return;
    }

    if (lower.includes("setting")) {
      navigate("/dashboard/settings");
      return;
    }

    showToast(`Searching for "${value}"`);
    setCommand("");
  };

  const submitAiCommand = () => {
    const value = aiCommand.trim();

    if (!value) {
      setShowCopilot(true);
      return;
    }

    showToast("AI Copilot received your request.");
    setAiCommand("");
    setShowCopilot(true);
  };

  const handleMenuClick = (item) => {
    setSidebarOpen(false);
    navigate(item.path);
  };

  const handleQuickAction = (action) => {
    if (action.action === "ai") {
      setShowCopilot(true);
      return;
    }

    navigate(action.path);
  };

  return (
    <div className="master-dashboard">
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <button
          className="dashboard-overlay"
          aria-label="Close menu"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-brand">
          <button
            className="briqona-mark"
            aria-label="BRIQONA OS Dashboard"
            onClick={() => navigate("/dashboard")}
          >
            <span />
            <span />
            <span />
            <span />
            <span />
          </button>

          <button
            className="brand-copy"
            onClick={() => navigate("/dashboard")}
          >
            <strong>
              BRIQONA <em>OS</em>
            </strong>
            <small>Business Operating System</small>
          </button>

          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            ×
          </button>
        </div>

        <button
          className="workspace-card"
          onClick={() => navigate("/dashboard")}
        >
          <div className="workspace-avatar">B</div>

          <div>
            <small>WORKSPACE</small>
            <strong>BRIQONA OS</strong>
          </div>

          <span className="online-dot" />
        </button>

        <div className="menu-heading">MAIN MENU</div>

        <nav className="dashboard-nav">
          {menuItems.map((item) => (
            <button
              className={`nav-item ${
                item.label === "Overview" ? "active" : ""
              }`}
              key={item.label}
              onClick={() => handleMenuClick(item)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
              {item.badge && <small>{item.badge}</small>}
            </button>
          ))}
        </nav>

        <div className="menu-heading management-heading">
          MANAGEMENT
        </div>

        <nav className="dashboard-nav">
          {managementItems.map((item) => (
            <button
              className="nav-item"
              key={item.label}
              onClick={() => handleMenuClick(item)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          className="sidebar-ai-card"
          onClick={() => setShowCopilot(true)}
        >
          <div className="ai-orb">✦</div>

          <div>
            <strong>AI Copilot</strong>
            <small>Ready to assist</small>
          </div>

          <span className="online-dot" />
        </button>
      </aside>

      {/* MAIN */}
      <main className="dashboard-main">
        {/* TOPBAR */}
        <header className="dashboard-topbar">
          <button
            className="mobile-menu-button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>

          <div className="dashboard-search">
            <span>⌕</span>

            <input
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") submitCommand();
              }}
              placeholder="Search anything..."
            />

            <kbd>⌘ K</kbd>
          </div>

          <div className="topbar-actions">
            <button
              className="top-action ai-copilot"
              onClick={() => setShowCopilot(true)}
            >
              <span>✦</span>
              <span>AI Copilot</span>
            </button>

            <button
              className="top-action mission-button"
              onClick={() => setShowMissionCenter(true)}
            >
              <span>✧</span>
              <span>AI Mission Center</span>
              <b>3</b>
            </button>

            <div className="top-action-wrapper">
              <button
                className="icon-button notification-button"
                aria-label="Notifications"
                onClick={() => {
                  setShowNotifications((value) => !value);
                  setShowProfile(false);
                }}
              >
                ♧
                <b>5</b>
              </button>

              {showNotifications && (
                <div className="dashboard-popover notification-popover">
                  <div className="popover-heading">
                    <strong>Notifications</strong>
                    <span>5 new</span>
                  </div>

                  {notifications.map((notification) => (
                    <button
                      className="notification-item"
                      key={notification.title}
                      onClick={() => {
                        showToast(notification.title);
                        setShowNotifications(false);
                      }}
                    >
                      <span
                        className={`notification-dot ${notification.dot}`}
                      />

                      <span className="notification-copy">
                        <strong>{notification.title}</strong>
                        <small>{notification.subtitle}</small>
                      </span>

                      <span>→</span>
                    </button>
                  ))}

                  <button
                    className="popover-footer-button"
                    onClick={() => {
                      setShowNotifications(false);
                      showToast("All notifications opened.");
                    }}
                  >
                    View all notifications →
                  </button>
                </div>
              )}
            </div>

            <div className="top-action-wrapper">
              <button
                className="profile"
                onClick={() => {
                  setShowProfile((value) => !value);
                  setShowNotifications(false);
                }}
              >
                <div className="profile-avatar">B</div>

                <div className="profile-text">
                  <strong>BRIQONA</strong>
                  <small>Administrator</small>
                </div>

                <span className="profile-arrow">⌄</span>
              </button>

              {showProfile && (
                <div className="dashboard-popover profile-popover">
                  <button
                    onClick={() => {
                      setShowProfile(false);
                      navigate("/dashboard/settings");
                    }}
                  >
                    <span>⚙</span>
                    Account Settings
                  </button>

                  <button
                    onClick={() => {
                      setShowProfile(false);
                      showToast("Workspace profile selected.");
                    }}
                  >
                    <span>◉</span>
                    Workspace
                  </button>

                  <button
                    onClick={() => {
                      setShowProfile(false);
                      showToast("Profile selected.");
                    }}
                  >
                    <span>♙</span>
                    My Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="dashboard-content">
          {/* WELCOME */}
          <section className="welcome-row">
            <div>
              <div className="eyebrow">✦ BUSINESS COMMAND CENTER</div>

              <h1>
                Good morning, <span>BRIQONA</span> <i>✦</i>
              </h1>

              <p>
                Here&apos;s what&apos;s happening across your business today.
              </p>
            </div>

            <button
              className="date-button"
              onClick={() => showToast("Today · August 02, 2026")}
            >
              <span>◷</span>

              <div>
                <small>Today</small>
                <strong>August 02, 2026</strong>
              </div>

              <span>⌄</span>
            </button>
          </section>

          {/* STATS */}
          <section className="stats-grid">
            {stats.map((stat) => (
              <button
                className="stat-card"
                key={stat.title}
                onClick={() => {
                  if (stat.title === "Total Revenue") {
                    navigate("/dashboard/analytics");
                  } else if (stat.title === "Net Profit") {
                    navigate("/dashboard/finance");
                  } else if (stat.title === "Total Expenses") {
                    navigate("/dashboard/finance");
                  } else {
                    navigate("/dashboard/invoices");
                  }
                }}
              >
                <div className="stat-top">
                  <div className={`stat-icon ${stat.type}`}>
                    {stat.icon}
                  </div>

                  <span className={`stat-change ${stat.type}`}>
                    {stat.change}
                  </span>
                </div>

                <small>{stat.title}</small>
                <strong>{stat.value}</strong>

                <div className="stat-bottom">
                  <span>vs. last month</span>
                  <MiniChart
                    points={stat.points}
                    type={stat.type}
                  />
                </div>
              </button>
            ))}
          </section>

          {/* QUICK ACTIONS */}
          <section className="section-block quick-section">
            <div className="section-title-row">
              <div>
                <div className="eyebrow">COMMANDS</div>
                <h2>Quick Actions</h2>
              </div>

              <button
                className="text-button"
                onClick={() => showToast("Quick Actions are ready.")}
              >
                Customize →
              </button>
            </div>

            <div className="quick-grid">
              {quickActions.map((action) => (
                <button
                  className="quick-card"
                  key={action.title}
                  onClick={() => handleQuickAction(action)}
                >
                  <span className="quick-icon">{action.icon}</span>

                  <span className="quick-copy">
                    <strong>{action.title}</strong>
                    <small>{action.subtitle}</small>
                  </span>

                  <span className="quick-arrow">→</span>
                </button>
              ))}
            </div>
          </section>

          {/* AI COMMAND */}
          <section className="ai-command-card">
            <button
              className="ai-command-icon"
              onClick={() => setShowCopilot(true)}
              aria-label="Open AI Copilot"
            >
              ✦
            </button>

            <div className="ai-command-copy">
              <div className="eyebrow">BRIQONA INTELLIGENCE</div>

              <h2>AI Command Center</h2>

              <p>
                Ask anything about your business. Your AI Copilot is ready.
              </p>
            </div>

            <div className="ai-command-input">
              <input
                value={aiCommand}
                onChange={(e) => setAiCommand(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    submitAiCommand();
                  }
                }}
                placeholder="Ask AI about your business..."
              />

              <button
                aria-label="Ask AI"
                onClick={submitAiCommand}
              >
                →
              </button>
            </div>
          </section>

          {/* MISSIONS + ACTIVITY */}
          <section className="two-column-grid">
            <article className="panel missions-panel">
              <div className="panel-header">
                <div>
                  <div className="eyebrow">AUTOMATION</div>
                  <h2>AI Missions</h2>
                </div>

                <button
                  className="more-button"
                  onClick={() => setShowMissionCenter(true)}
                >
                  •••
                </button>
              </div>

              <div className="mission-list">
                {missions.map((mission) => (
                  <button
                    className="mission-item"
                    key={mission.title}
                    onClick={() => setShowMissionCenter(true)}
                  >
                    <div className="mission-icon">
                      {mission.icon}
                    </div>

                    <div className="mission-info">
                      <div className="mission-name">
                        <strong>{mission.title}</strong>

                        <small
                          className={`status ${mission.status.toLowerCase()}`}
                        >
                          {mission.status}
                        </small>
                      </div>

                      <p>{mission.description}</p>

                      {mission.progress > 0 && (
                        <div className="progress-row">
                          <div className="progress-track">
                            <span
                              style={{
                                width: `${mission.progress}%`,
                              }}
                            />
                          </div>

                          <b>{mission.progress}%</b>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <button
                className="panel-footer-link"
                onClick={() => setShowMissionCenter(true)}
              >
                View all missions →
              </button>
            </article>

            <article className="panel activity-panel">
              <div className="panel-header">
                <div>
                  <div className="eyebrow">LATEST</div>
                  <h2>Recent Activity</h2>
                </div>

                <button
                  className="text-button"
                  onClick={() => showToast("All recent activity opened.")}
                >
                  View all →
                </button>
              </div>

              <div className="activity-list">
                {activities.map((activity) => (
                  <button
                    className="activity-item"
                    key={activity.title}
                    onClick={() => showToast(activity.title)}
                  >
                    <div className="activity-icon">
                      {activity.icon}
                    </div>

                    <div className="activity-copy">
                      <strong>{activity.title}</strong>
                      <small>{activity.subtitle}</small>
                    </div>

                    <time>{activity.time}</time>
                  </button>
                ))}
              </div>
            </article>
          </section>

          {/* NOTIFICATIONS + CUSTOMERS */}
          <section className="two-column-grid lower-grid">
            <article className="panel">
              <div className="panel-header">
                <div>
                  <div className="eyebrow">ALERTS</div>
                  <h2>Notifications</h2>
                </div>

                <button
                  className="alert-count"
                  onClick={() => setShowNotifications(true)}
                >
                  3
                </button>
              </div>

              <div className="notification-list">
                {notifications.map((notification) => (
                  <button
                    className="notification-item"
                    key={notification.title}
                    onClick={() => showToast(notification.title)}
                  >
                    <span
                      className={`notification-dot ${notification.dot}`}
                    />

                    <span className="notification-copy">
                      <strong>{notification.title}</strong>
                      <small>{notification.subtitle}</small>
                    </span>

                    <span>→</span>
                  </button>
                ))}
              </div>
            </article>

            <article className="panel">
              <div className="panel-header">
                <div>
                  <div className="eyebrow">CUSTOMERS</div>
                  <h2>Top Customers</h2>
                </div>

                <button
                  className="more-button"
                  onClick={() => navigate("/dashboard/customers")}
                >
                  •••
                </button>
              </div>

              <div className="customer-list">
                {customers.map((customer) => (
                  <button
                    className="customer-item"
                    key={customer.name}
                    onClick={() => navigate("/dashboard/customers")}
                  >
                    <div className="customer-avatar">
                      {customer.initials}
                    </div>

                    <div className="customer-copy">
                      <strong>{customer.name}</strong>
                      <small>{customer.amount}</small>
                    </div>

                    <span className="customer-growth">
                      {customer.growth}
                    </span>
                  </button>
                ))}
              </div>
            </article>
          </section>

          {/* BUSINESS INSIGHT */}
          <button
            className="business-insight"
            onClick={() => setShowCopilot(true)}
          >
            <div className="insight-left">
              <div className="eyebrow">AI INSIGHTS</div>

              <h2>Business Insight</h2>

              <p>
                Your revenue is <strong>18.6% higher</strong> than last
                month. AI detected strong growth in your enterprise
                customers.
              </p>
            </div>

            <div className="insight-icon">✦</div>
          </button>

          {/* FOOTER */}
          <footer className="dashboard-footer">
            <button onClick={() => navigate("/dashboard")}>
              © 2026 BRIQONA OS. All rights reserved.
            </button>

            <button onClick={() => navigate("/dashboard")}>
              Master Dashboard
            </button>

            <button
              onClick={() => showToast("BRIQONA OS Version 1.0.0")}
            >
              Version 1.0.0
            </button>
          </footer>
        </div>
      </main>

      {/* AI COPILOT MODAL */}
      {showCopilot && (
        <div
          className="dashboard-modal-backdrop"
          onClick={() => setShowCopilot(false)}
        >
          <div
            className="dashboard-modal ai-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top">
              <div>
                <div className="eyebrow">BRIQONA INTELLIGENCE</div>
                <h2>AI Copilot</h2>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowCopilot(false)}
              >
                ×
              </button>
            </div>

            <p>
              Your BRIQONA AI Copilot is ready to help you understand
              your business, operations, revenue and performance.
            </p>

            <div className="modal-ai-input">
              <input
                autoFocus
                value={aiCommand}
                onChange={(e) => setAiCommand(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    submitAiCommand();
                  }
                }}
                placeholder="Ask your AI Copilot..."
              />

              <button onClick={submitAiCommand}>→</button>
            </div>

            <div className="ai-suggestion-grid">
              <button
                onClick={() => {
                  setAiCommand("Analyze my revenue");
                }}
              >
                Analyze revenue
              </button>

              <button
                onClick={() => {
                  setAiCommand("Find cost savings");
                }}
              >
                Find cost savings
              </button>

              <button
                onClick={() => {
                  setAiCommand("Check business health");
                }}
              >
                Business health
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI MISSION CENTER */}
      {showMissionCenter && (
        <div
          className="dashboard-modal-backdrop"
          onClick={() => setShowMissionCenter(false)}
        >
          <div
            className="dashboard-modal mission-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top">
              <div>
                <div className="eyebrow">AUTOMATION</div>
                <h2>AI Mission Center</h2>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowMissionCenter(false)}
              >
                ×
              </button>
            </div>

            <div className="mission-modal-list">
              {missions.map((mission) => (
                <button
                  className="mission-modal-item"
                  key={mission.title}
                  onClick={() => showToast(`${mission.title} selected.`)}
                >
                  <div className="mission-icon">
                    {mission.icon}
                  </div>

                  <div>
                    <strong>{mission.title}</strong>
                    <small>{mission.description}</small>
                  </div>

                  <span
                    className={`status ${mission.status.toLowerCase()}`}
                  >
                    {mission.status}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
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
