import React from "react";
import "./Dashboard.css";

const navItems = [
  ["⌂", "Dashboard"],
  ["✦", "AI Command Center", "New"],
  ["♙", "AI Workforce", "⌄"],
  ["◎", "Outcome Center"],
  ["▦", "Industries Hub", "⌄"],
  ["♟", "CRM"],
  ["$", "Finance"],
  ["♙", "HR"],
  ["▣", "Inventory"],
  ["☑", "Projects & Tasks"],
  ["▤", "Documents"],
  ["ϟ", "Automation"],
  ["▥", "Analytics"],
  ["▣", "Communication"],
  ["◉", "Support / Helpdesk"],
  ["⌘", "Integrations"],
  ["⚙", "Settings"],
];

const quickActions = [
  ["$", "+ New Invoice", "green"],
  ["♙", "+ New Lead", "blue"],
  ["▤", "+ New Expense", "orange"],
  ["☑", "+ New Task", "purple"],
  ["♙", "+ Add Employee", "cyan"],
  ["♙", "+ Add Customer", "pink"],
  ["▦", "More Actions", "gray"],
];

const activities = [
  ["▤", "Invoice #INV-2026-1256 created", "2 min ago"],
  ["$", "Payment received from Ahmed Co.", "18 min ago"],
  ["♙", "New lead from Website", "45 min ago"],
  ["✓", 'Task "Follow up with client"', "1 hour ago"],
  ["▤", "Expense $250 added", "2 hours ago"],
];

const notifications = [
  ["◉", "Overdue invoice from Ali Traders", "2 min ago"],
  ["⚠", "Low stock alert for 3 products", "25 min ago"],
  ["♙", "Leave request from Sara Khan", "1 hour ago"],
  ["▣", "System backup completed", "2 hours ago"],
];

const customers = [
  ["A", "Ahmed Corporation", "$5,780"],
  ["G", "Global Solutions", "$4,230"],
  ["T", "TechNova LLC", "$3,620"],
  ["A", "Al-Barkat Traders", "$2,890"],
  ["F", "Future Enterprises", "$2,450"],
];

const industries = [
  ["▥", "Office", "green"],
  ["♙", "HR", "gray"],
  ["▥", "Hospital", "blue"],
  ["♧", "Restaurant", "pink"],
  ["🛒", "Retail", "purple"],
  ["⚖", "Construction", "orange"],
  ["⌂", "Real Estate", "purple"],
  ["▣", "Education", "cyan"],
  ["▥", "Manufacturing", "green"],
  ["♧", "Professional Services", "purple"],
  ["•••", "More", "gray"],
];

function Logo() {
  return (
    <div className="brand">
      <div className="brand-mark">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="brand-text">
        <strong>BRIQONA OS</strong>
        <small>All-in-One Business Operating System</small>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <Logo />
      </div>

      <nav className="sidebar-nav">
        {navItems.map(([icon, label, badge], index) => (
          <button
            className={`nav-item ${index === 0 ? "active" : ""}`}
            key={label}
          >
            <span className="nav-icon">{icon}</span>
            <span className="nav-label">{label}</span>

            {badge && (
              <span
                className={
                  badge === "New" ? "nav-badge new" : "nav-chevron"
                }
              >
                {badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="current-plan">
        <button className="plan-close">×</button>

        <div className="plan-diamond">◇</div>

        <div className="plan-label">Current Plan</div>
        <div className="plan-name">Growth</div>

        <div className="plan-price">
          <strong>$15</strong> / month
        </div>

        <button className="upgrade-plan">
          Upgrade Plan
          <span>→</span>
        </button>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="dashboard-header">
      <div className="command-search">
        <span className="search-icon">⌕</span>
        <span>Ask Briqona AI or type a command...</span>
        <kbd>⌘ K</kbd>
      </div>

      <div className="header-actions">
        <button className="header-btn copilot">
          ✨ <span>AI Copilot</span>
        </button>

        <button className="header-btn mission-center">
          ✦ <span>AI Mission Center</span>
        </button>

        <button className="header-icon notification">
          ♧
          <b>5</b>
        </button>

        <button className="header-icon messages">
          ▢
          <b>3</b>
        </button>

        <button className="profile">
          <div className="profile-info">
            <strong>Ali Raza</strong>
            <small>Owner</small>
          </div>

          <div className="profile-avatar">AR</div>
          <span className="profile-arrow">⌄</span>
        </button>
      </div>
    </header>
  );
}

function WelcomePanel() {
  return (
    <section className="welcome-panel">
      <div className="welcome-content">
        <h1>
          Good morning, Ali Raza! <span>👋</span>
        </h1>

        <p>Here's what's happening with your business today.</p>

        <div className="business-pulse">
          <div className="pulse-icon">✦</div>
          <span>AI Business Pulse</span>
          <em>Excellent</em>
          <strong>87</strong>
          <small>/100</small>
        </div>
      </div>

      <div className="wave-visual">
        <div className="wave wave-one"></div>
        <div className="wave wave-two"></div>
        <div className="wave wave-three"></div>
        <i className="wave-point"></i>
      </div>
    </section>
  );
}

function StatCard({ title, value, change, negative, type }) {
  return (
    <div className={`stat-card ${type}`}>
      <div className="stat-title">{title}</div>

      <div className="stat-value">{value}</div>

      <div className={`stat-change ${negative ? "negative" : ""}`}>
        {negative ? "▼" : "▲"} {change}
      </div>

      <div className="mini-chart">
        <span></span>
        <span></span>
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

function StatsSection() {
  return (
    <div className="stats-section">
      <div className="period-controls">
        <button>▣ &nbsp; This Month &nbsp;⌄</button>
        <button>✣ &nbsp; Customize</button>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Revenue"
          value="$24,780"
          change="12.6% vs last month"
          type="green"
        />

        <StatCard
          title="Total Profit"
          value="$8,430"
          change="8.3% vs last month"
          type="purple"
        />

        <StatCard
          title="Total Expenses"
          value="$6,350"
          change="-3.4% vs last month"
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
    </div>
  );
}

function QuickActions() {
  return (
    <section className="dashboard-card quick-actions">
      <div className="section-title">Quick Actions</div>

      <div className="quick-grid">
        {quickActions.map(([icon, title, color]) => (
          <button className={`quick-action ${color}`} key={title}>
            <span className="quick-icon">{icon}</span>
            <span>{title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function AICommandCenter() {
  return (
    <section className="dashboard-card ai-command">
      <div className="ai-heading">
        <div>
          <h2>✦ &nbsp;AI Command Center</h2>
          <p>Ask anything. Briqona AI is ready to help.</p>
        </div>
      </div>

      <div className="ai-input">
        <span>
          e.g. Show me sales trend, top customers, overdue invoices...
        </span>

        <button className="mic">♩</button>
        <button className="send">➤</button>
      </div>

      <div className="ai-shortcuts">
        <button>Sales Summary</button>
        <button>Overdue Invoices</button>
        <button>Cash Flow</button>
        <button>Inventory Alert</button>
        <button>HR Report</button>
      </div>

      <div className="ai-orb">
        <div className="orb-inner"></div>
      </div>
    </section>
  );
}

function AIMissions() {
  const missions = [
    ["◎", "Recover overdue payments", "In Progress", "65%", "green"],
    ["◎", "Increase this month sales", "In Progress", "40%", "purple"],
    ["▣", "Reduce expenses", "Planned", "20%", "orange"],
  ];

  return (
    <section className="dashboard-card ai-missions">
      <div className="card-heading">
        <h2>✦ &nbsp;AI Missions <span>Beta</span></h2>
        <button>View All</button>
      </div>

      <div className="mission-list">
        {missions.map(([icon, title, status, percent, color]) => (
          <div className="mission" key={title}>
            <div className={`mission-icon ${color}`}>{icon}</div>

            <div className="mission-main">
              <div className="mission-top">
                <span>{title}</span>
                <small>{status}</small>
              </div>

              <div className="mission-progress">
                <span
                  className={color}
                  style={{ width: percent }}
                ></span>
              </div>
            </div>

            <strong>{percent}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function ActivityCard() {
  return (
    <section className="dashboard-card list-card">
      <div className="card-heading">
        <h3>Recent Activities</h3>
        <button>View All</button>
      </div>

      <div className="activity-list">
        {activities.map(([icon, title, time]) => (
          <div className="activity-item" key={title}>
            <span className="activity-icon">{icon}</span>
            <span className="activity-title">{title}</span>
            <small>{time}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function NotificationsCard() {
  return (
    <section className="dashboard-card list-card">
      <div className="card-heading">
        <h3>Notifications</h3>
        <button>View All</button>
      </div>

      <div className="notification-list">
        {notifications.map(([icon, title, time]) => (
          <div className="notification-item" key={title}>
            <span className="notification-item-icon">{icon}</span>

            <div>
              <span>{title}</span>
              <small>{time}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CustomersCard() {
  return (
    <section className="dashboard-card list-card">
      <div className="card-heading">
        <h3>Top Customers</h3>
        <button>View All</button>
      </div>

      <div className="customer-list">
        {customers.map(([letter, name, amount]) => (
          <div className="customer-item" key={name}>
            <span className="customer-avatar">{letter}</span>
            <span>{name}</span>
            <strong>{amount}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function AIInsights() {
  return (
    <section className="dashboard-card ai-insights">
      <div className="card-heading">
        <h3>✦ &nbsp;AI Insights</h3>
        <span className="insight-new">New</span>
      </div>

      <p>
        Your sales are up <strong>12.6%</strong> this month.
      </p>

      <p>
        Focus on recovering <b>$14,560</b> in overdue invoices to improve
        cash flow.
      </p>

      <button className="view-insights">
        View All Insights <span>→</span>
      </button>

      <div className="brain">◉</div>
    </section>
  );
}

function PackageAccess() {
  return (
    <section className="side-card package-card">
      <div className="side-card-title">Package & Access</div>

      <div className="growth-plan">
        <span>◇</span>
        <strong>Growth Plan</strong>
        <b>$15 <small>/ month</small></b>
      </div>

      <div className="access-row">
        <span>Access</span>
        <strong>38 <small>/ 60 Features</small></strong>
      </div>

      <div className="access-bar">
        <span></span>
      </div>

      <button className="pro-button">♢ &nbsp; Upgrade to Pro</button>

      <button className="all-features">View All Features &nbsp;→</button>
    </section>
  );
}

function IndustriesHub() {
  return (
    <section className="side-card industries-card">
      <div className="side-card-heading">
        <strong>Industries Hub</strong>
        <button>Manage</button>
      </div>

      <div className="industries-grid">
        {industries.map(([icon, name, color]) => (
          <button
            className={`industry ${color} ${
              name === "Office" ? "selected" : ""
            }`}
            key={name}
          >
            <span>{icon}</span>
            <small>{name}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="dashboard-footer">
      <span>© 2026 Briqona OS. All rights reserved.</span>

      <span>Version 1.0.0</span>

      <div>
        <button>Privacy Policy</button>
        <button>Terms of Service</button>
        <button>Support</button>
      </div>
    </footer>
  );
}

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="dashboard-main">
        <Header />

        <main className="dashboard-content">
          <div className="hero-row">
            <WelcomePanel />
            <StatsSection />
          </div>

          <div className="dashboard-layout">
            <div className="main-column">
              <QuickActions />

              <div className="ai-row">
                <AICommandCenter />
                <AIMissions />
              </div>

              <div className="bottom-grid">
                <ActivityCard />
                <NotificationsCard />
                <CustomersCard />
                <AIInsights />
              </div>
            </div>

            <aside className="right-column">
              <PackageAccess />
              <IndustriesHub />
            </aside>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
