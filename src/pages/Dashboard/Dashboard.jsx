import { useState } from "react";
import "./Dashboard.css";

const navItems = [
  { icon: "grid", label: "Overview" },
  { icon: "briefcase", label: "Business" },
  { icon: "users", label: "Customers" },
  { icon: "file", label: "Invoices" },
  { icon: "chart", label: "Analytics" },
  { icon: "wallet", label: "Finance" },
];

const managementItems = [
  { icon: "users", label: "Team" },
  { icon: "calendar", label: "Calendar" },
  { icon: "folder", label: "Projects" },
  { icon: "settings", label: "Settings" },
];

const activities = [
  { title: "Invoice #INV-2048 paid", text: "Acme Corporation", time: "12 min ago", type: "success" },
  { title: "New customer registered", text: "Nova Technologies", time: "34 min ago", type: "info" },
  { title: "AI Mission completed", text: "Monthly revenue analysis", time: "1 hr ago", type: "ai" },
  { title: "Expense approval required", text: "Marketing department", time: "2 hrs ago", type: "warning" },
];

const customers = [
  { name: "Acme Corporation", initials: "AC", amount: "$24,800", growth: "+18%" },
  { name: "Nova Technologies", initials: "NT", amount: "$18,420", growth: "+12%" },
  { name: "Vertex Solutions", initials: "VS", amount: "$15,900", growth: "+9%" },
];

function Icon({ name, size = 19 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const paths = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18M10 12v2h4v-2" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h6" /></>,
    chart: <><path d="M4 19V5M4 19h17" /><path d="m7 15 4-5 3 3 5-7" /></>,
    wallet: <><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M3 8h18M16 14h.01" /></>,
    calendar: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
    folder: <><path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.41 1.41-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20h-2v-.09A1.7 1.7 0 0 0 12.4 18.35a1.7 1.7 0 0 0-1.88.34l-.06.06-1.41-1.41.06-.06A1.7 1.7 0 0 0 9.45 15 1.7 1.7 0 0 0 7.89 14H7.8v-2h.09a1.7 1.7 0 0 0 1.56-1.03 1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.41-1.41.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 13.43 6.5V6h2v.5a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.41 1.41-.06.06a1.7 1.7 0 0 0-.34 1.88A1.7 1.7 0 0 0 20.97 12H21v2h-.09A1.7 1.7 0 0 0 19.4 15z" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
    spark: <><path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5z" /><path d="m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7z" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    more: <><circle cx="5" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="19" cy="12" r="1" fill="currentColor" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    trend: <><path d="M3 17 9 11l4 4 8-9" /><path d="M16 6h5v5" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };

  return <svg {...common}>{paths[name] || paths.spark}</svg>;
}

function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Overview");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="dashboard">
      <aside className={`dashboard-sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">
            <span></span><span></span><span></span>
          </div>
          <div>
            <strong>Briqona</strong>
            <small>MASTER OS</small>
          </div>
          <button className="mobile-close" onClick={() => setMobileOpen(false)}>
            <Icon name="close" />
          </button>
        </div>

        <div className="workspace">
          <div className="workspace-avatar">N</div>
          <div>
            <small>WORKSPACE</small>
            <strong>Nexora Group</strong>
          </div>
          <span className="online-dot"></span>
        </div>

        <nav className="side-nav">
          <div className="nav-label">MAIN MENU</div>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-item ${active === item.label ? "active" : ""}`}
              onClick={() => setActive(item.label)}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.label === "Analytics" && <em>NEW</em>}
            </button>
          ))}

          <div className="nav-label management-label">MANAGEMENT</div>

          {managementItems.map((item) => (
            <button
              key={item.label}
              className={`nav-item ${active === item.label ? "active" : ""}`}
              onClick={() => setActive(item.label)}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-ai">
          <div className="ai-orb"><Icon name="spark" size={18} /></div>
          <div>
            <strong>AI Copilot</strong>
            <span>Ready to assist</span>
          </div>
          <span className="copilot-dot"></span>
        </div>

        <div className="sidebar-bottom">
          <button className="nav-item">
            <Icon name="settings" />
            <span>Settings</span>
          </button>
          <div className="sidebar-version">Briqona OS v1.0</div>
        </div>
      </aside>

      {mobileOpen && (
        <div className="sidebar-overlay" onClick={() => setMobileOpen(false)}></div>
      )}

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <button className="mobile-menu" onClick={() => setMobileOpen(true)}>
            <Icon name="menu" />
          </button>

          <div className="search-box">
            <Icon name="search" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search anything..."
            />
            <kbd>⌘ K</kbd>
          </div>

          <div className="topbar-actions">
            <button className="top-ai-button">
              <Icon name="spark" size={17} />
              AI Copilot
            </button>

            <button className="top-mission-button">
              AI Mission Center
              <span>3</span>
            </button>

            <div className="action-wrapper">
              <button
                className="icon-button notification-button"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Icon name="bell" />
                <i></i>
              </button>

              {showNotifications && (
                <div className="dropdown notifications-dropdown">
                  <div className="dropdown-head">
                    <strong>Notifications</strong>
                    <span>3 new</span>
                  </div>
                  <div className="notification-row">
                    <div className="mini-icon success"><Icon name="check" size={14} /></div>
                    <div><strong>Invoice paid</strong><p>Acme Corporation paid $8,400</p></div>
                  </div>
                  <div className="notification-row">
                    <div className="mini-icon ai"><Icon name="spark" size={14} /></div>
                    <div><strong>AI Mission ready</strong><p>Revenue report is complete</p></div>
                  </div>
                  <div className="notification-row">
                    <div className="mini-icon warning">!</div>
                    <div><strong>Approval needed</strong><p>Marketing expense requires review</p></div>
                  </div>
                </div>
              )}
            </div>

            <div className="action-wrapper">
              <button className="profile-button" onClick={() => setShowProfile(!showProfile)}>
                <div className="profile-avatar">YA</div>
                <div className="profile-text">
                  <strong>Yawar Abbas</strong>
                  <span>Administrator</span>
                </div>
                <span className="profile-arrow">⌄</span>
              </button>

              {showProfile && (
                <div className="dropdown profile-dropdown">
                  <button>My Profile</button>
                  <button>Account Settings</button>
                  <button>Workspace</button>
                  <hr />
                  <button className="logout">Sign Out</button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          <section className="welcome-section">
            <div>
              <div className="eyebrow"><span></span> BUSINESS COMMAND CENTER</div>
              <h1>Good morning, Yawar <span>✦</span></h1>
              <p>Here's what's happening across your business today.</p>
            </div>

            <div className="date-pill">
              <span className="date-icon">◷</span>
              <div>
                <small>Today</small>
                <strong>August 02, 2026</strong>
              </div>
            </div>
          </section>

          <section className="stats-grid">
            <StatCard
              icon="wallet"
              title="Total Revenue"
              value="$184,250"
              change="+18.6%"
              subtitle="vs. last month"
              type="blue"
              chart="up"
            />
            <StatCard
              icon="trend"
              title="Net Profit"
              value="$72,840"
              change="+24.3%"
              subtitle="vs. last month"
              type="green"
              chart="up"
            />
            <StatCard
              icon="file"
              title="Total Expenses"
              value="$42,610"
              change="-8.2%"
              subtitle="vs. last month"
              type="purple"
              chart="down"
            />
            <StatCard
              icon="briefcase"
              title="Open Invoices"
              value="$31,480"
              change="12"
              subtitle="invoices pending"
              type="orange"
              chart="neutral"
            />
          </section>

          <section className="quick-section">
            <div className="section-heading">
              <div>
                <span className="section-kicker">COMMANDS</span>
                <h2>Quick Actions</h2>
              </div>
              <button className="text-button">Customize <Icon name="arrow" size={15} /></button>
            </div>

            <div className="quick-grid">
              <QuickAction icon="plus" title="Create Invoice" desc="Send a new invoice" />
              <QuickAction icon="users" title="Add Customer" desc="Create customer profile" />
              <QuickAction icon="chart" title="View Analytics" desc="Explore business data" />
              <QuickAction icon="spark" title="Ask AI" desc="Get instant insights" special />
            </div>
          </section>

          <section className="ai-command">
            <div className="ai-command-content">
              <div className="ai-command-icon">
                <Icon name="spark" size={25} />
              </div>
              <div>
                <span className="section-kicker">BRIQONA INTELLIGENCE</span>
                <h2>AI Command Center</h2>
                <p>Ask anything about your business. Your AI Copilot is ready.</p>
              </div>
            </div>
            <button className="command-input">
              <span>Ask AI about your business...</span>
              <div><Icon name="arrow" size={16} /></div>
            </button>
          </section>

          <div className="two-column">
            <section className="panel">
              <div className="panel-heading">
                <div>
                  <span className="section-kicker">AUTOMATION</span>
                  <h2>AI Missions</h2>
                </div>
                <button className="more-button"><Icon name="more" /></button>
              </div>

              <div className="mission-list">
                <Mission
                  icon="chart"
                  title="Analyze Monthly Revenue"
                  desc="AI is analyzing your revenue trends"
                  status="Running"
                  progress={72}
                />
                <Mission
                  icon="wallet"
                  title="Optimize Expenses"
                  desc="Find potential savings opportunities"
                  status="Ready"
                  progress={0}
                />
                <Mission
                  icon="users"
                  title="Customer Health Check"
                  desc="Review customer engagement signals"
                  status="Scheduled"
                  progress={0}
                />
              </div>

              <button className="full-link">View all missions <Icon name="arrow" size={15} /></button>
            </section>

            <section className="panel">
              <div className="panel-heading">
                <div>
                  <span className="section-kicker">LATEST</span>
                  <h2>Recent Activity</h2>
                </div>
                <button className="text-button">View all <Icon name="arrow" size={15} /></button>
              </div>

              <div className="activity-list">
                {activities.map((activity) => (
                  <div className="activity" key={activity.title}>
                    <div className={`activity-icon ${activity.type}`}>
                      <Icon name={activity.type === "ai" ? "spark" : activity.type === "success" ? "check" : activity.type === "warning" ? "file" : "users"} size={15} />
                    </div>
                    <div className="activity-copy">
                      <strong>{activity.title}</strong>
                      <span>{activity.text}</span>
                    </div>
                    <time>{activity.time}</time>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="three-column">
            <section className="panel compact-panel">
              <div className="panel-heading">
                <div>
                  <span className="section-kicker">ALERTS</span>
                  <h2>Notifications</h2>
                </div>
                <span className="count-badge">3</span>
              </div>
              <div className="alert-list">
                <Alert title="Payment received" text="$8,400 from Acme Corp." type="success" />
                <Alert title="Invoice overdue" text="INV-2019 needs attention" type="warning" />
                <Alert title="AI report ready" text="Monthly insights available" type="ai" />
              </div>
            </section>

            <section className="panel compact-panel">
              <div className="panel-heading">
                <div>
                  <span className="section-kicker">CUSTOMERS</span>
                  <h2>Top Customers</h2>
                </div>
                <button className="more-button"><Icon name="more" /></button>
              </div>
              <div className="customer-list">
                {customers.map((customer) => (
                  <div className="customer" key={customer.name}>
                    <div className="customer-avatar">{customer.initials}</div>
                    <div className="customer-copy">
                      <strong>{customer.name}</strong>
                      <span>{customer.amount}</span>
                    </div>
                    <em>{customer.growth}</em>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel compact-panel insight-panel">
              <div className="panel-heading">
                <div>
                  <span className="section-kicker">AI INSIGHTS</span>
                  <h2>Business Insight</h2>
                </div>
                <div className="insight-spark"><Icon name="spark" size={15} /></div>
              </div>
              <div className="insight-content">
                <p>Your revenue is <strong>18.6% higher</strong> than last month. AI detected strong growth in your enterprise customers.</p>
                <div className="insight-stat">
                  <span>Growth opportunity</span>
                  <strong>+32%</strong>
                </div>
              </div>
              <button className="full-link">Explore insight <Icon name="arrow" size={15} /></button>
            </section>
          </div>

          <section className="bottom-grid">
            <div className="access-card">
              <div className="access-top">
                <div>
                  <span className="section-kicker">YOUR PLAN</span>
                  <h2>Enterprise <span>PRO</span></h2>
                </div>
                <div className="plan-badge">ACTIVE</div>
              </div>
              <div className="access-progress">
                <div className="progress-head"><span>AI Usage</span><strong>68%</strong></div>
                <div className="progress-track"><span style={{ width: "68%" }}></span></div>
              </div>
              <div className="access-features">
                <span><Icon name="check" size={13} /> Unlimited users</span>
                <span><Icon name="check" size={13} /> AI Copilot</span>
                <span><Icon name="check" size={13} /> Advanced Analytics</span>
              </div>
              <button className="upgrade-button">Manage Package <Icon name="arrow" size={15} /></button>
            </div>

            <div className="industries-card">
              <div className="industry-glow"></div>
              <div className="industry-content">
                <span className="section-kicker">BRIQONA ECOSYSTEM</span>
                <h2>Industries Hub</h2>
                <p>Explore specialized AI tools built for your industry.</p>
                <div className="industry-tags">
                  <span>Finance</span>
                  <span>Healthcare</span>
                  <span>Retail</span>
                  <span>Technology</span>
                </div>
                <button className="industry-button">Explore Industries <Icon name="arrow" size={15} /></button>
              </div>
              <div className="industry-orbit">
                <div>✦</div>
                <span></span><span></span><span></span>
              </div>
            </div>
          </section>

          <footer className="dashboard-footer">
            <div>© 2026 Briqona OS. All rights reserved.</div>
            <div className="footer-links">
              <span>Status <i></i></span>
              <span>Help Center</span>
              <span>Privacy</span>
              <span>Terms</span>
            </div>
            <div>Powered by <strong>Briqona Intelligence</strong></div>
          </footer>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, title, value, change, subtitle, type, chart }) {
  return (
    <div className={`stat-card ${type}`}>
      <div className="stat-top">
        <div className="stat-icon"><Icon name={icon} size={18} /></div>
        <span className={`stat-change ${change.startsWith("-") ? "negative" : ""}`}>
          {change.startsWith("-") ? "↓" : "↑"} {change}
        </span>
      </div>
      <span className="stat-title">{title}</span>
      <strong className="stat-value">{value}</strong>
      <div className="stat-bottom">
        <span>{subtitle}</span>
        <MiniChart direction={chart} />
      </div>
    </div>
  );
}

function MiniChart({ direction }) {
  return (
    <svg className={`mini-chart ${direction}`} viewBox="0 0 90 28" preserveAspectRatio="none">
      <path d={direction === "down" ? "M1 7 C12 5,18 17,29 12 S45 20,55 15 S70 21,89 8" : "M1 22 C12 20,18 13,28 17 S43 6,53 12 S67 5,89 2"} />
    </svg>
  );
}

function QuickAction({ icon, title, desc, special }) {
  return (
    <button className={`quick-action ${special ? "special" : ""}`}>
      <div className="quick-icon"><Icon name={icon} size={18} /></div>
      <div><strong>{title}</strong><span>{desc}</span></div>
      <Icon name="arrow" size={15} />
    </button>
  );
}

function Mission({ icon, title, desc, status, progress }) {
  return (
    <div className="mission">
      <div className="mission-icon"><Icon name={icon} size={17} /></div>
      <div className="mission-copy">
        <div><strong>{title}</strong><span className={`mission-status ${status.toLowerCase()}`}>{status}</span></div>
        <p>{desc}</p>
        {progress > 0 && <div className="mission-progress"><span style={{ width: `${progress}%` }}></span></div>}
      </div>
      {progress > 0 && <b>{progress}%</b>}
    </div>
  );
}

function Alert({ title, text, type }) {
  return (
    <div className="alert">
      <div className={`alert-dot ${type}`}></div>
      <div><strong>{title}</strong><span>{text}</span></div>
      <Icon name="arrow" size={14} />
    </div>
  );
}

export default Dashboard;
