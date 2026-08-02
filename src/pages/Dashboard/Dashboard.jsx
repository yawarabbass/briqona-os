import React, { useState } from "react";
import "./Dashboard.css";

const go = (path) => {
  window.location.href = path;
};

const navItems = [
  { icon: "⌂", label: "Dashboard", path: "/dashboard" },
  { icon: "✦", label: "AI Command Center", path: "/ai-command-center", badge: "New" },
  { icon: "♙", label: "AI Workforce", path: "/ai-workforce", arrow: true },
  { icon: "◎", label: "Outcome Center", path: "/outcome-center" },
  { icon: "▦", label: "Industries Hub", path: "/industries", arrow: true },
  { icon: "♟", label: "CRM", path: "/crm" },
  { icon: "$", label: "Finance", path: "/finance" },
  { icon: "♟", label: "HR", path: "/hr" },
  { icon: "▣", label: "Inventory", path: "/inventory" },
  { icon: "✓", label: "Projects & Tasks", path: "/projects" },
  { icon: "▤", label: "Documents", path: "/documents" },
  { icon: "ϟ", label: "Automation", path: "/automation" },
  { icon: "▥", label: "Analytics", path: "/analytics" },
  { icon: "▣", label: "Communication", path: "/communication" },
  { icon: "◉", label: "Support / Helpdesk", path: "/support" },
  { icon: "⌘", label: "Integrations", path: "/integrations" },
  { icon: "⚙", label: "Settings", path: "/settings" },
];

const quickActions = [
  { icon: "$", label: "New Invoice", path: "/finance/invoices/new", color: "green" },
  { icon: "♙", label: "New Lead", path: "/crm/leads/new", color: "blue" },
  { icon: "▤", label: "New Expense", path: "/finance/expenses/new", color: "orange" },
  { icon: "✓", label: "New Task", path: "/projects/tasks/new", color: "purple" },
  { icon: "♟", label: "Add Employee", path: "/hr/employees/new", color: "cyan" },
  { icon: "♙", label: "Add Customer", path: "/crm/customers/new", color: "pink" },
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

function BriqonaLogo() {
  return (
    <div className="brand">
      <div className="brand-logo">
        <span className="logo-hex logo-hex-one" />
        <span className="logo-hex logo-hex-two" />
        <span className="logo-center" />
      </div>

      <div className="brand-text">
        <div>
          BRIQONA <span>OS</span>
        </div>
        <small>All-in-One Business Operating System</small>
      </div>
    </div>
  );
}

function Sidebar({ collapsed, setCollapsed }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-brand">
        <BriqonaLogo />
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item, index) => (
          <button
            key={item.label}
            className={`nav-item ${index === 0 ? "active" : ""}`}
            onClick={() => go(item.path)}
          >
            <span className="nav-icon">{item.icon}</span>
            {!collapsed && (
              <>
                <span className="nav-label">{item.label}</span>
                {item.badge && <span className="nav-badge">{item.badge}</span>}
                {item.arrow && <span className="nav-arrow">⌄</span>}
              </>
            )}
          </button>
        ))}
      </nav>

      {!collapsed && (
        <div className="sidebar-plan">
          <button className="plan-close">×</button>
          <div className="plan-diamond">◆</div>
          <span>Current Plan</span>
          <strong>Growth</strong>
          <b>$15 <small>/ month</small></b>

          <button
            className="upgrade-sidebar"
            onClick={() => go("/pricing")}
          >
            Upgrade Plan <span>→</span>
          </button>
        </div>
      )}

      <button
        className="sidebar-collapse"
        onClick={() => setCollapsed(!collapsed)}
        title="Collapse sidebar"
      >
        {collapsed ? "→" : "←"}
      </button>
    </aside>
  );
}

function Header() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="command-search">
        <span className="search-icon">⌕</span>
        <input
          type="text"
          placeholder="Ask Briqona AI or type a command..."
        />
        <kbd>⌘ K</kbd>
      </div>

      <div className="top-actions">
        <button
          className="top-ai-btn copilot"
          onClick={() => go("/ai-copilot")}
        >
          ✦ <span>AI Copilot</span>
        </button>

        <button
          className="top-ai-btn mission"
          onClick={() => go("/ai-missions")}
        >
          ✦ <span>AI Mission Center</span>
        </button>

        <button
          className="icon-action"
          onClick={() => go("/notifications")}
          title="Notifications"
        >
          ♧
          <b>5</b>
        </button>

        <button
          className="icon-action"
          onClick={() => go("/communication")}
          title="Messages"
        >
          ▢
          <b>3</b>
        </button>

        <div className="profile-wrapper">
          <button
            className="profile-button"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <div className="profile-name">
              <strong>Ali Raza</strong>
              <small>Owner</small>
            </div>

            <div className="profile-avatar">AR</div>
            <span>⌄</span>
          </button>

          {profileOpen && (
            <div className="profile-menu">
              <button onClick={() => go("/profile")}>My Profile</button>
              <button onClick={() => go("/settings")}>Settings</button>
              <button onClick={() => go("/login")}>Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function StatCard({ title, value, change, negative, type }) {
  return (
    <div className={`stat-card ${type}`}>
      <span className="stat-title">{title}</span>
      <strong>{value}</strong>

      <div className={`stat-change ${negative ? "negative" : ""}`}>
        {negative ? "▼" : "▲"} {change}
        <span>vs last month</span>
      </div>

      <div className="mini-chart">
        <svg viewBox="0 0 180 65" preserveAspectRatio="none">
          <polyline
            points={
              type === "revenue"
                ? "0,55 15,48 30,53 45,30 60,38 75,22 90,34 105,18 120,25 135,8 150,30 165,15 180,26"
                : type === "profit"
                ? "0,55 15,42 30,50 45,28 60,37 75,20 90,31 105,14 120,23 135,8 150,24 165,13 180,22"
                : type === "expense"
                ? "0,54 15,44 30,49 45,27 60,33 75,14 90,25 105,9 120,31 135,17 150,34 165,21 180,30"
                : "0,54 15,47 30,52 45,28 60,35 75,20 90,30 105,9 120,19 135,34 150,14 165,30 180,23"
            }
          />
        </svg>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-card">
      <div className="hero-copy">
        <h1>
          Good morning, Ali Raza! <span>👋</span>
        </h1>

        <p>Here's what's happening with your business today.</p>
      </div>

      <div className="hero-wave">
        <div className="wave wave-one" />
        <div className="wave wave-two" />
        <div className="wave wave-three" />
        <i className="wave-point" />
      </div>

      <div className="hero-pulse">
        <span>✦ AI Business Pulse</span>
        <b>Excellent</b>
        <strong>87<small>/100</small></strong>
      </div>

      <div className="hero-stats">
        <StatCard
          title="Total Revenue"
          value="$24,780"
          change="12.6%"
          type="revenue"
        />
        <StatCard
          title="Total Profit"
          value="$8,430"
          change="8.3%"
          type="profit"
        />
        <StatCard
          title="Total Expenses"
          value="$6,350"
          change="-3.4%"
          negative
          type="expense"
        />

        <div className="stat-card invoices">
          <span className="stat-title">Open Invoices</span>
          <strong>23</strong>
          <div className="invoice-overdue">$14,560 overdue</div>

          <div className="mini-chart">
            <svg viewBox="0 0 180 65" preserveAspectRatio="none">
              <polyline points="0,55 15,48 30,52 45,30 60,37 75,46 90,20 105,10 120,26 135,5 150,32 165,28 180,18" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickActions() {
  return (
    <section className="panel quick-panel">
      <div className="section-heading">
        <h2>Quick Actions</h2>
      </div>

      <div className="quick-actions">
        {quickActions.map((action) => (
          <button
            key={action.label}
            className={`quick-action ${action.color}`}
            onClick={() => go(action.path)}
          >
            <span className="quick-icon">{action.icon}</span>
            <span>+ {action.label}</span>
          </button>
        ))}

        <button
          className="quick-action more"
          onClick={() => go("/quick-actions")}
        >
          <span className="quick-icon">▦</span>
          <span>More Actions</span>
        </button>
      </div>
    </section>
  );
}

function AICommandCenter() {
  const [query, setQuery] = useState("");

  const suggestions = [
    "Sales Summary",
    "Overdue Invoices",
    "Cash Flow",
    "Inventory Alert",
    "HR Report",
  ];

  return (
    <section className="panel ai-command">
      <div className="panel-title">
        <div>
          <h2>✦ AI Command Center</h2>
          <p>Ask anything. Briqona AI is ready to help.</p>
        </div>
      </div>

      <div className="ai-input">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. Show me sales trend, top customers, overdue invoices..."
        />

        <button title="Voice input">♩</button>

        <button
          className="send-ai"
          onClick={() => {
            if (query.trim()) {
              go(`/ai-command-center?q=${encodeURIComponent(query)}`);
            }
          }}
        >
          ↗
        </button>
      </div>

      <div className="ai-suggestions">
        {suggestions.map((item) => (
          <button
            key={item}
            onClick={() =>
              go(`/ai-command-center?query=${encodeURIComponent(item)}`)
            }
          >
            {item}
          </button>
        ))}
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
    <section className="panel missions">
      <div className="panel-title mission-title">
        <div>
          <h2>✦ AI Missions <span>Beta</span></h2>
        </div>

        <button onClick={() => go("/ai-missions")}>View All</button>
      </div>

      <div className="mission-list">
        {missions.map(([icon, title, status, progress, color]) => (
          <button
            className="mission-row"
            key={title}
            onClick={() => go("/ai-missions")}
          >
            <span className={`mission-icon ${color}`}>{icon}</span>

            <div className="mission-content">
              <div className="mission-top">
                <strong>{title}</strong>
                <small>{status}</small>
              </div>

              <div className="progress-line">
                <i
                  className={color}
                  style={{ width: progress }}
                />
              </div>
            </div>

            <b>{progress}</b>
          </button>
        ))}
      </div>
    </section>
  );
}

function ActivityCard({ title, items, notification }) {
  return (
    <section className="panel list-panel">
      <div className="panel-title">
        <h2>{title}</h2>
        <button onClick={() => go(notification ? "/notifications" : "/activities")}>
          View All
        </button>
      </div>

      <div className="activity-list">
        {items.map(([icon, text, time]) => (
          <button
            className="activity-row"
            key={text}
            onClick={() => go(notification ? "/notifications" : "/activities")}
          >
            <span className="activity-icon">{icon}</span>

            <div>
              <strong>{text}</strong>
              <small>{time}</small>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function Customers() {
  return (
    <section className="panel list-panel customers">
      <div className="panel-title">
        <h2>Top Customers</h2>
        <button onClick={() => go("/crm/customers")}>View All</button>
      </div>

      <div className="customer-list">
        {customers.map(([letter, name, amount]) => (
          <button
            className="customer-row"
            key={name}
            onClick={() => go("/crm/customers")}
          >
            <span>{letter}</span>
            <strong>{name}</strong>
            <b>{amount}</b>
          </button>
        ))}
      </div>
    </section>
  );
}

function AIInsights() {
  return (
    <section className="panel insights">
      <div className="panel-title">
        <h2>✦ AI Insights <span>New</span></h2>
      </div>

      <div className="insight-content">
        <p>
          Your sales are up <strong>12.6%</strong> this month.
        </p>

        <p>
          Focus on recovering <strong>$14,560</strong> in overdue invoices to
          improve cash flow.
        </p>

        <button onClick={() => go("/analytics/ai-insights")}>
          View All Insights <span>→</span>
        </button>

        <div className="brain">
          ◉
        </div>
      </div>
    </section>
  );
}

function PackageAccess() {
  return (
    <section className="panel package">
      <div className="panel-title">
        <h2>Package & Access</h2>
      </div>

      <div className="package-name">
        <span>◆</span>
        <strong>Growth Plan</strong>
        <b>$15 <small>/ month</small></b>
      </div>

      <div className="access">
        <span>Access</span>
        <strong>38 <small>/ 60 Features</small></strong>
      </div>

      <button
        className="upgrade-button"
        onClick={() => go("/pricing")}
      >
        ◇ Upgrade to Pro
      </button>

      <button
        className="features-link"
        onClick={() => go("/features")}
      >
        View All Features →
      </button>
    </section>
  );
}

function IndustriesHub() {
  const industries = [
    ["▥", "Office", "green"],
    ["♙", "HR", "blue"],
    ["▥", "Hospital", "cyan"],
    ["♧", "Restaurant", "pink"],
    ["🛒", "Retail", "purple"],
    ["⚖", "Construction", "orange"],
    ["⌂", "Real Estate", "purple"],
    ["◇", "Education", "cyan"],
    ["▥", "Manufacturing", "green"],
    ["♧", "Professional Services", "purple"],
    ["•••", "More", "gray"],
  ];

  return (
    <section className="panel industries">
      <div className="panel-title">
        <h2>Industries Hub</h2>
        <button onClick={() => go("/industries")}>Manage</button>
      </div>

      <div className="industry-grid">
        {industries.map(([icon, name, color]) => (
          <button
            className={`industry-card ${color}`}
            key={name}
            onClick={() => go(`/industries/${name.toLowerCase().replaceAll(" ", "-")}`)}
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
        <button onClick={() => go("/privacy")}>Privacy Policy</button>
        <button onClick={() => go("/terms")}>Terms of Service</button>
        <button onClick={() => go("/support")}>Support</button>
      </div>
    </footer>
  );
}

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="dashboard-shell">
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <div className={`dashboard-main ${sidebarCollapsed ? "expanded" : ""}`}>
        <Header />

        <main className="dashboard-content">
          <div className="dashboard-toolbar">
            <button className="date-filter">
              ▣ <span>This Month</span> ⌄
            </button>

            <button
              className="customize-button"
              onClick={() => go("/dashboard/customize")}
            >
              ✣ Customize
            </button>
          </div>

          <Hero />

          <QuickActions />

          <div className="dashboard-grid">
            <div className="dashboard-left">
              <div className="two-column">
                <AICommandCenter />
                <AIMissions />
              </div>

              <div className="bottom-grid">
                <ActivityCard
                  title="Recent Activities"
                  items={activities}
                />

                <ActivityCard
                  title="Notifications"
                  items={notifications}
                  notification
                />

                <Customers />

                <AIInsights />
              </div>
            </div>

            <aside className="dashboard-right">
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
export default Dashboard;
