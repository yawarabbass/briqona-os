import React, { useState } from "react";
import "./Dashboard.css";

const menuItems = [
  { icon: "▦", label: "Overview", active: true },
  { icon: "▣", label: "Business" },
  { icon: "♙", label: "Customers" },
  { icon: "▤", label: "Invoices" },
  { icon: "⌁", label: "Analytics", badge: "New" },
  { icon: "▣", label: "Finance" },
];

const managementItems = [
  { icon: "♙", label: "Team" },
  { icon: "□", label: "Calendar" },
  { icon: "▱", label: "Projects" },
  { icon: "⚙", label: "Settings" },
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
  { icon: "+", title: "Create Invoice", subtitle: "Send a new invoice" },
  { icon: "♙", title: "Add Customer", subtitle: "Create customer profile" },
  { icon: "⌁", title: "View Analytics", subtitle: "Explore business data" },
  { icon: "✦", title: "Ask AI", subtitle: "Get instant insights" },
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
  { initials: "AC", name: "Acme Corporation", amount: "$24,800", growth: "+18%" },
  { initials: "NT", name: "Nova Technologies", amount: "$18,420", growth: "+12%" },
  { initials: "VS", name: "Vertex Solutions", amount: "$15,930", growth: "+9%" },
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

  const submitCommand = () => {
    if (!command.trim()) return;
    setCommand("");
  };

  return (
    <div className="master-dashboard">
      {/* Mobile overlay */}
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
          <div className="briqona-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="brand-copy">
            <strong>
              BRIQONA <em>OS</em>
            </strong>
            <small>Business Operating System</small>
          </div>

          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            ×
          </button>
        </div>

        <div className="workspace-card">
          <div className="workspace-avatar">B</div>
          <div>
            <small>WORKSPACE</small>
            <strong>BRIQONA OS</strong>
          </div>
          <span className="online-dot" />
        </div>

        <div className="menu-heading">MAIN MENU</div>

        <nav className="dashboard-nav">
          {menuItems.map((item) => (
            <button
              className={`nav-item ${item.active ? "active" : ""}`}
              key={item.label}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
              {item.badge && <small>{item.badge}</small>}
            </button>
          ))}
        </nav>

        <div className="menu-heading management-heading">MANAGEMENT</div>

        <nav className="dashboard-nav">
          {managementItems.map((item) => (
            <button className="nav-item" key={item.label}>
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-ai-card">
          <div className="ai-orb">✦</div>
          <div>
            <strong>AI Copilot</strong>
            <small>Ready to assist</small>
          </div>
          <span className="online-dot" />
        </div>
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
            <button className="top-action ai-copilot">
              <span>✦</span>
              <span>AI Copilot</span>
            </button>

            <button className="top-action mission-button">
              <span>✧</span>
              <span>AI Mission Center</span>
              <b>3</b>
            </button>

            <button className="icon-button notification-button" aria-label="Notifications">
              ♧
              <b>5</b>
            </button>

            <div className="profile">
              <div className="profile-avatar">B</div>
              <div className="profile-text">
                <strong>BRIQONA</strong>
                <small>Administrator</small>
              </div>
              <span className="profile-arrow">⌄</span>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="dashboard-content">
          <section className="welcome-row">
            <div>
              <div className="eyebrow">✦ BUSINESS COMMAND CENTER</div>
              <h1>
                Good morning, <span>BRIQONA</span> <i>✦</i>
              </h1>
              <p>Here&apos;s what&apos;s happening across your business today.</p>
            </div>

            <button className="date-button">
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
              <article className="stat-card" key={stat.title}>
                <div className="stat-top">
                  <div className={`stat-icon ${stat.type}`}>{stat.icon}</div>
                  <span className={`stat-change ${stat.type}`}>
                    {stat.change}
                  </span>
                </div>

                <small>{stat.title}</small>
                <strong>{stat.value}</strong>

                <div className="stat-bottom">
                  <span>vs. last month</span>
                  <MiniChart points={stat.points} type={stat.type} />
                </div>
              </article>
            ))}
          </section>

          {/* QUICK ACTIONS */}
          <section className="section-block quick-section">
            <div className="section-title-row">
              <div>
                <div className="eyebrow">COMMANDS</div>
                <h2>Quick Actions</h2>
              </div>
              <button className="text-button">Customize →</button>
            </div>

            <div className="quick-grid">
              {quickActions.map((action) => (
                <button className="quick-card" key={action.title}>
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
            <div className="ai-command-icon">✦</div>

            <div className="ai-command-copy">
              <div className="eyebrow">BRIQONA INTELLIGENCE</div>
              <h2>AI Command Center</h2>
              <p>Ask anything about your business. Your AI Copilot is ready.</p>
            </div>

            <div className="ai-command-input">
              <input
                placeholder="Ask AI about your business..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.currentTarget.value = "";
                  }
                }}
              />
              <button aria-label="Ask AI">→</button>
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
                <button className="more-button">•••</button>
              </div>

              <div className="mission-list">
                {missions.map((mission) => (
                  <div className="mission-item" key={mission.title}>
                    <div className="mission-icon">{mission.icon}</div>

                    <div className="mission-info">
                      <div className="mission-name">
                        <strong>{mission.title}</strong>
                        <small className={`status ${mission.status.toLowerCase()}`}>
                          {mission.status}
                        </small>
                      </div>

                      <p>{mission.description}</p>

                      {mission.progress > 0 && (
                        <div className="progress-row">
                          <div className="progress-track">
                            <span style={{ width: `${mission.progress}%` }} />
                          </div>
                          <b>{mission.progress}%</b>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button className="panel-footer-link">View all missions →</button>
            </article>

            <article className="panel activity-panel">
              <div className="panel-header">
                <div>
                  <div className="eyebrow">LATEST</div>
                  <h2>Recent Activity</h2>
                </div>
                <button className="text-button">View all →</button>
              </div>

              <div className="activity-list">
                {activities.map((activity) => (
                  <div className="activity-item" key={activity.title}>
                    <div className="activity-icon">{activity.icon}</div>

                    <div className="activity-copy">
                      <strong>{activity.title}</strong>
                      <small>{activity.subtitle}</small>
                    </div>

                    <time>{activity.time}</time>
                  </div>
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
                <span className="alert-count">3</span>
              </div>

              <div className="notification-list">
                {notifications.map((notification) => (
                  <button className="notification-item" key={notification.title}>
                    <span className={`notification-dot ${notification.dot}`} />
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
                <button className="more-button">•••</button>
              </div>

              <div className="customer-list">
                {customers.map((customer) => (
                  <div className="customer-item" key={customer.name}>
                    <div className="customer-avatar">{customer.initials}</div>

                    <div className="customer-copy">
                      <strong>{customer.name}</strong>
                      <small>{customer.amount}</small>
                    </div>

                    <span className="customer-growth">{customer.growth}</span>
                  </div>
                ))}
              </div>
            </article>
          </section>

          {/* BUSINESS INSIGHT */}
          <section className="business-insight">
            <div className="insight-left">
              <div className="eyebrow">AI INSIGHTS</div>
              <h2>Business Insight</h2>
              <p>
                Your revenue is <strong>18.6% higher</strong> than last month.
                AI detected strong growth in your enterprise customers.
              </p>
            </div>

            <div className="insight-icon">✦</div>
          </section>

          <footer className="dashboard-footer">
            <span>© 2026 BRIQONA OS. All rights reserved.</span>
            <span>Master Dashboard</span>
            <span>Version 1.0.0</span>
          </footer>
        </div>
      </main>
    </div>
    
  );
}

export default Dashboard;
