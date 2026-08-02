import React, { useState } from "react";
import "./Dashboard.css";

const sidebarItems = [
  { icon: "⌂", label: "Dashboard" },
  { icon: "✦", label: "AI Command Center", badge: "New" },
  { icon: "♙", label: "AI Workforce", expandable: true },
  { icon: "◎", label: "Outcome Center" },
  { icon: "▦", label: "Industries Hub", expandable: true },
  { icon: "♟", label: "CRM" },
  { icon: "$", label: "Finance" },
  { icon: "♟", label: "HR" },
  { icon: "▣", label: "Inventory" },
  { icon: "✓", label: "Projects & Tasks" },
  { icon: "▤", label: "Documents" },
  { icon: "ϟ", label: "Automation" },
  { icon: "▥", label: "Analytics" },
  { icon: "▣", label: "Communication" },
  { icon: "◉", label: "Support / Helpdesk" },
  { icon: "⌘", label: "Integrations" },
  { icon: "⚙", label: "Settings" },
];

const stats = [
  {
    title: "Total Revenue",
    value: "$24,780",
    change: "12.6%",
    color: "green",
    points: "0,38 18,28 34,34 52,15 70,22 88,9 106,20 124,3 142,17",
  },
  {
    title: "Total Profit",
    value: "$8,430",
    change: "8.3%",
    color: "purple",
    points: "0,42 18,31 34,35 52,19 70,27 88,13 106,24 124,8 142,18",
  },
  {
    title: "Total Expenses",
    value: "$6,350",
    change: "-3.4%",
    color: "orange",
    points: "0,42 18,27 34,34 52,15 70,31 88,13 106,29 124,10 142,22",
  },
  {
    title: "Open Invoices",
    value: "23",
    change: "$14,560 overdue",
    color: "blue",
    points: "0,41 18,35 34,17 52,26 70,10 88,30 106,5 124,20 142,14",
  },
];

const quickActions = [
  { icon: "$", label: "New Invoice", color: "green" },
  { icon: "♙", label: "New Lead", color: "blue" },
  { icon: "▤", label: "New Expense", color: "orange" },
  { icon: "✓", label: "New Task", color: "purple" },
  { icon: "♟", label: "Add Employee", color: "cyan" },
  { icon: "♙", label: "Add Customer", color: "pink" },
  { icon: "▦", label: "More Actions", color: "gray" },
];

const industries = [
  { icon: "▥", label: "Office", color: "green" },
  { icon: "♙", label: "HR", color: "blue" },
  { icon: "▣", label: "Hospital", color: "cyan" },
  { icon: "♧", label: "Restaurant", color: "pink" },
  { icon: "▰", label: "Retail", color: "purple" },
  { icon: "⚖", label: "Construction", color: "orange" },
  { icon: "⌂", label: "Real Estate", color: "purple" },
  { icon: "◇", label: "Education", color: "cyan" },
  { icon: "▥", label: "Manufacturing", color: "green" },
  { icon: "♙", label: "Professional Services", color: "purple" },
  { icon: "•••", label: "More", color: "gray" },
];

function MiniChart({ points, color }) {
  return (
    <svg
      className={`mini-chart mini-${color}`}
      viewBox="0 0 142 48"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopOpacity="0.35" />
          <stop offset="100%" stopOpacity="0" />
        </linearGradient>
      </defs>

      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <polygon
        points={`${points} 142,48 0,48`}
        fill={`url(#gradient-${color})`}
      />
    </svg>
  );
}

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-shell">
      {/* Mobile Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* SIDEBAR */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-mark">
            <span />
            <span />
            <span />
          </div>

          <div>
            <div className="brand-name">
              BRIQONA <strong>OS</strong>
            </div>
            <div className="brand-tagline">
              All-in-One Business Operating System
            </div>
          </div>

          <button
            className="mobile-close"
            onClick={() => setSidebarOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="sidebar-nav">
          {sidebarItems.map((item, index) => (
            <button
              className={`sidebar-item ${index === 0 ? "active" : ""}`}
              key={item.label}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>

              {item.badge && <small>{item.badge}</small>}

              {item.expandable && (
                <span className="sidebar-arrow">⌄</span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-plan">
          <div className="plan-top">
            <div className="diamond-icon">◇</div>
            <button>×</button>
          </div>

          <span className="plan-label">Current Plan</span>
          <strong>Growth</strong>
          <span className="plan-price">
            <b>$15</b> / month
          </span>

          <button className="upgrade-btn">
            Upgrade Plan
            <span>→</span>
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="dashboard-main">
        {/* HEADER */}
        <header className="dashboard-header">
          <button
            className="mobile-menu"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>

          <div className="dashboard-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Ask Briqona AI or type a command..."
            />
            <kbd>⌘ K</kbd>
          </div>

          <div className="header-actions">
            <button className="header-ai-btn copilot">
              ✦ <span>AI Copilot</span>
            </button>

            <button className="header-ai-btn mission">
              ✦ <span>AI Mission Center</span>
            </button>

            <button className="header-icon notification">
              ♧
              <b>5</b>
            </button>

            <button className="header-icon messages">
              ▱
              <b>3</b>
            </button>

            <div className="profile-box">
              <div className="profile-info">
                <strong>Ali Raza</strong>
                <span>Owner</span>
              </div>

              <div className="profile-avatar">AR</div>
              <span className="profile-arrow">⌄</span>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="dashboard-content">
          {/* HERO */}
          <section className="hero-section">
            <div className="hero-heading">
              <h1>Good morning, Ali Raza! 👋</h1>
              <p>Here's what's happening with your business today.</p>
            </div>

            <div className="hero-actions">
              <button>▣ &nbsp; This Month &nbsp;⌄</button>
              <button>✣ &nbsp; Customize</button>
            </div>

            <div className="hero-wave">
              <span className="wave wave-one" />
              <span className="wave wave-two" />
              <span className="wave wave-three" />
              <i className="wave-dot dot-one" />
              <i className="wave-dot dot-two" />
              <i className="wave-dot dot-three" />
            </div>

            <div className="business-pulse">
              <span>AI Business Pulse</span>
              <b>Excellent</b>
              <strong>87</strong>
              <small>/100</small>
            </div>

            <div className="hero-stats">
              {stats.map((stat) => (
                <div className={`stat-card ${stat.color}`} key={stat.title}>
                  <span>{stat.title}</span>
                  <strong>{stat.value}</strong>

                  <small
                    className={
                      stat.change.startsWith("-") ? "negative" : ""
                    }
                  >
                    {stat.change.startsWith("-") ? "▼" : "▲"}{" "}
                    {stat.change}
                    {!stat.change.includes("overdue") && " vs last month"}
                  </small>

                  <MiniChart
                    points={stat.points}
                    color={stat.color}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* QUICK ACTIONS */}
          <section className="quick-actions-panel">
            <div className="section-title">Quick Actions</div>

            <div className="quick-actions">
              {quickActions.map((action) => (
                <button
                  className={`quick-action ${action.color}`}
                  key={action.label}
                >
                  <span className="quick-icon">{action.icon}</span>
                  <span>+ {action.label}</span>
                </button>
              ))}
            </div>
          </section>

          <div className="dashboard-grid">
            {/* LEFT / CENTER */}
            <div className="dashboard-center">
              {/* AI COMMAND CENTER */}
              <section className="glass-card ai-command">
                <div className="card-heading">
                  <div>
                    <h2>✦ &nbsp; AI Command Center</h2>
                    <p>Ask anything. Briqona AI is ready to help.</p>
                  </div>
                </div>

                <div className="ai-input">
                  <span>✦</span>
                  <input
                    placeholder="e.g. Show me sales trend, top customers, overdue invoices..."
                  />
                  <button>♩</button>
                  <button className="send-ai">➤</button>
                </div>

                <div className="ai-shortcuts">
                  <button>Sales Summary</button>
                  <button>Overdue Invoices</button>
                  <button>Cash Flow</button>
                  <button>Inventory Alert</button>
                  <button>HR Report</button>
                </div>

                <div className="ai-orb">
                  <span>✦</span>
                </div>
              </section>

              {/* LOWER CARDS */}
              <div className="lower-grid">
                {/* Recent */}
                <section className="glass-card list-card">
                  <div className="card-header">
                    <h3>Recent Activities</h3>
                    <button>View All</button>
                  </div>

                  <div className="activity-list">
                    <div>
                      <span>▤</span>
                      <p>Invoice #INV-2026-1256 created</p>
                      <small>2 min ago</small>
                    </div>
                    <div>
                      <span>$</span>
                      <p>Payment received from Ahmed Co.</p>
                      <small>18 min ago</small>
                    </div>
                    <div>
                      <span>♙</span>
                      <p>New lead from Website</p>
                      <small>45 min ago</small>
                    </div>
                    <div>
                      <span>✓</span>
                      <p>Task “Follow up with client”</p>
                      <small>1 hour ago</small>
                    </div>
                    <div>
                      <span>▤</span>
                      <p>Expense $250 added</p>
                      <small>2 hours ago</small>
                    </div>
                  </div>
                </section>

                {/* Notifications */}
                <section className="glass-card list-card">
                  <div className="card-header">
                    <h3>Notifications</h3>
                    <button>View All</button>
                  </div>

                  <div className="activity-list">
                    <div>
                      <span className="red">♧</span>
                      <p>Overdue invoice from Ali Traders</p>
                      <small>2 min ago</small>
                    </div>
                    <div>
                      <span className="yellow">⚠</span>
                      <p>Low stock alert for 3 products</p>
                      <small>25 min ago</small>
                    </div>
                    <div>
                      <span className="blue">♙</span>
                      <p>Leave request from Sara Khan</p>
                      <small>1 hour ago</small>
                    </div>
                    <div>
                      <span className="green">✓</span>
                      <p>System backup completed</p>
                      <small>2 hours ago</small>
                    </div>
                  </div>
                </section>

                {/* Customers */}
                <section className="glass-card list-card">
                  <div className="card-header">
                    <h3>Top Customers</h3>
                    <button>View All</button>
                  </div>

                  <div className="customer-list">
                    {[
                      ["A", "Ahmed Corporation", "$5,780"],
                      ["G", "Global Solutions", "$4,230"],
                      ["T", "TechNova LLC", "$3,620"],
                      ["A", "Al-Barkat Traders", "$2,890"],
                      ["F", "Future Enterprises", "$2,450"],
                    ].map(([letter, name, amount]) => (
                      <div key={name}>
                        <span className="customer-avatar">{letter}</span>
                        <p>{name}</p>
                        <strong>{amount}</strong>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <aside className="dashboard-right">
              {/* AI MISSIONS */}
              <section className="glass-card missions-card">
                <div className="card-header">
                  <div>
                    <h3>✦ AI Missions <small>Beta</small></h3>
                  </div>
                  <button>View All</button>
                </div>

                <div className="mission-item">
                  <span className="mission-icon green">◎</span>
                  <div>
                    <strong>Recover overdue payments</strong>
                    <small>In Progress</small>
                    <div className="progress">
                      <i style={{ width: "65%" }} />
                    </div>
                  </div>
                  <b>65%</b>
                </div>

                <div className="mission-item">
                  <span className="mission-icon purple">◎</span>
                  <div>
                    <strong>Increase this month sales</strong>
                    <small>In Progress</small>
                    <div className="progress">
                      <i style={{ width: "40%" }} />
                    </div>
                  </div>
                  <b>40%</b>
                </div>

                <div className="mission-item">
                  <span className="mission-icon orange">◎</span>
                  <div>
                    <strong>Reduce expenses</strong>
                    <small>Planned</small>
                    <div className="progress">
                      <i style={{ width: "20%" }} />
                    </div>
                  </div>
                  <b>20%</b>
                </div>
              </section>

              {/* AI INSIGHTS */}
              <section className="glass-card insight-card">
                <div className="card-header">
                  <h3>✦ AI Insights <small>New</small></h3>
                </div>

                <p>
                  Your sales are up <strong>12.6%</strong> this month.
                </p>

                <p>
                  Focus on recovering <strong>$14,560</strong> in overdue
                  invoices to improve cash flow.
                </p>

                <button className="outline-btn">
                  View All Insights →
                </button>

                <div className="brain">◉</div>
              </section>
            </aside>
          </div>

          {/* PACKAGE + INDUSTRIES */}
          <div className="bottom-grid">
            <section className="glass-card package-card">
              <div className="card-header">
                <h3>Package & Access</h3>
              </div>

              <div className="package-title">
                <span>◇</span>
                <strong>Growth Plan</strong>
                <b>$15 <small>/ month</small></b>
              </div>

              <div className="access-row">
                <span>Access</span>
                <strong>38 <small>/ 60 Features</small></strong>
              </div>

              <div className="access-bar">
                <span />
              </div>

              <button className="pro-button">
                ◇ &nbsp; Upgrade to Pro
              </button>

              <button className="view-features">
                View All Features →
              </button>
            </section>

            <section className="glass-card industry-card">
              <div className="card-header">
                <h3>Industries Hub</h3>
                <button>Manage</button>
              </div>

              <div className="industry-grid">
                {industries.map((industry) => (
                  <button
                    className={`industry-item ${industry.color}`}
                    key={industry.label}
                  >
                    <span>{industry.icon}</span>
                    <small>{industry.label}</small>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="dashboard-footer">
          <span>© 2026 Briqona OS. All rights reserved.</span>
          <span>Version 1.0.0</span>

          <div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#support">Support</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;
