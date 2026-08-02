import React, { useState } from "react";
import "./Business.css";

const metrics = [
  {
    label: "Active Operations",
    value: "24",
    change: "+12.5%",
    icon: "◈",
  },
  {
    label: "Business Revenue",
    value: "$184,250",
    change: "+18.6%",
    icon: "↗",
  },
  {
    label: "Operating Cost",
    value: "$42,610",
    change: "-8.2%",
    icon: "▤",
  },
  {
    label: "Business Health",
    value: "94%",
    change: "+4.8%",
    icon: "✦",
  },
];

const departments = [
  {
    name: "Sales & Revenue",
    description: "Revenue generation and sales operations",
    progress: 86,
    status: "Healthy",
    icon: "↗",
  },
  {
    name: "Finance",
    description: "Financial operations and cash management",
    progress: 92,
    status: "Healthy",
    icon: "$",
  },
  {
    name: "Operations",
    description: "Daily business processes and workflows",
    progress: 78,
    status: "Stable",
    icon: "◈",
  },
  {
    name: "Customer Success",
    description: "Customer relationships and retention",
    progress: 89,
    status: "Healthy",
    icon: "♙",
  },
];

const priorities = [
  {
    title: "Review monthly financial performance",
    department: "Finance",
    priority: "High",
    due: "Today",
  },
  {
    title: "Follow up with enterprise customers",
    department: "Customer Success",
    priority: "Medium",
    due: "Tomorrow",
  },
  {
    title: "Approve Q3 operational plan",
    department: "Operations",
    priority: "Medium",
    due: "Aug 04",
  },
];

const performance = [
  { month: "MAR", value: 58 },
  { month: "APR", value: 66 },
  { month: "MAY", value: 61 },
  { month: "JUN", value: 74 },
  { month: "JUL", value: 82 },
  { month: "AUG", value: 91 },
];

function Business() {
  const [period, setPeriod] = useState("Monthly");
  const [search, setSearch] = useState("");
  const [showActions, setShowActions] = useState(false);

  const filteredPriorities = priorities.filter((item) =>
    `${item.title} ${item.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="business-page">
      <div className="business-container">
        {/* HEADER */}
        <header className="business-header">
          <div>
            <div className="business-eyebrow">
              BRIQONA OS / BUSINESS
            </div>

            <h1>Business Operations</h1>

            <p>
              Manage and monitor the core operations of your business from
              one central command center.
            </p>
          </div>

          <div className="business-header-actions">
            <button
              className="business-secondary-btn"
              onClick={() => setShowActions((value) => !value)}
            >
              <span>+</span>
              Create
            </button>

            {showActions && (
              <div className="business-action-menu">
                <button>New Business Unit</button>
                <button>New Workflow</button>
                <button>New Objective</button>
              </div>
            )}
          </div>
        </header>

        {/* OVERVIEW */}
        <section className="business-section">
          <div className="business-section-heading">
            <div>
              <span>OVERVIEW</span>
              <h2>Business at a glance</h2>
            </div>

            <div className="period-selector">
              {["Weekly", "Monthly", "Yearly"].map((item) => (
                <button
                  key={item}
                  className={period === item ? "active" : ""}
                  onClick={() => setPeriod(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="business-metrics">
            {metrics.map((metric) => (
              <article className="business-metric-card" key={metric.label}>
                <div className="business-metric-top">
                  <div className="business-metric-icon">
                    {metric.icon}
                  </div>

                  <span>{metric.change}</span>
                </div>

                <small>{metric.label}</small>
                <strong>{metric.value}</strong>

                <div className="business-metric-line">
                  <span />
                </div>

                <p>Compared with previous {period.toLowerCase()} period</p>
              </article>
            ))}
          </div>
        </section>

        {/* PERFORMANCE + HEALTH */}
        <section className="business-main-grid">
          <article className="business-panel performance-panel">
            <div className="business-panel-header">
              <div>
                <span>PERFORMANCE</span>
                <h2>Business performance</h2>
              </div>

              <button className="business-more-btn">•••</button>
            </div>

            <div className="performance-summary">
              <div>
                <small>Overall performance</small>
                <strong>91%</strong>
              </div>

              <div className="performance-positive">
                +14.2%
              </div>
            </div>

            <div className="performance-chart">
              <div className="chart-grid-line line-one" />
              <div className="chart-grid-line line-two" />
              <div className="chart-grid-line line-three" />

              <div className="chart-bars">
                {performance.map((item) => (
                  <div className="chart-column" key={item.month}>
                    <div className="chart-bar-area">
                      <div
                        className="chart-bar"
                        style={{ height: `${item.value}%` }}
                      />
                    </div>
                    <span>{item.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="business-panel health-panel">
            <div className="business-panel-header">
              <div>
                <span>INTELLIGENCE</span>
                <h2>Business health</h2>
              </div>

              <div className="health-status">
                <i />
                Excellent
              </div>
            </div>

            <div className="health-score">
              <div className="health-ring">
                <div>
                  <strong>94</strong>
                  <small>/100</small>
                </div>
              </div>

              <div className="health-copy">
                <strong>Business is performing well</strong>
                <p>
                  BRIQONA intelligence detected positive momentum across
                  your main operational areas.
                </p>
              </div>
            </div>

            <div className="health-factors">
              <div>
                <span>Revenue growth</span>
                <strong>Excellent</strong>
              </div>

              <div>
                <span>Cash flow</span>
                <strong>Healthy</strong>
              </div>

              <div>
                <span>Operations</span>
                <strong>Stable</strong>
              </div>
            </div>
          </article>
        </section>

        {/* DEPARTMENTS */}
        <section className="business-section departments-section">
          <div className="business-section-heading">
            <div>
              <span>OPERATIONS</span>
              <h2>Business departments</h2>
            </div>

            <button className="business-text-btn">
              Manage departments →
            </button>
          </div>

          <div className="department-grid">
            {departments.map((department) => (
              <article className="department-card" key={department.name}>
                <div className="department-card-top">
                  <div className="department-icon">
                    {department.icon}
                  </div>

                  <span className="department-status">
                    <i />
                    {department.status}
                  </span>
                </div>

                <h3>{department.name}</h3>

                <p>{department.description}</p>

                <div className="department-progress-info">
                  <span>Performance</span>
                  <strong>{department.progress}%</strong>
                </div>

                <div className="department-progress">
                  <span
                    style={{ width: `${department.progress}%` }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PRIORITIES */}
        <section className="business-main-grid priorities-grid">
          <article className="business-panel priorities-panel">
            <div className="business-panel-header">
              <div>
                <span>WORK MANAGEMENT</span>
                <h2>Business priorities</h2>
              </div>

              <button className="business-text-btn">
                View all →
              </button>
            </div>

            <div className="priority-search">
              <span>⌕</span>
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search priorities..."
              />
            </div>

            <div className="priority-list">
              {filteredPriorities.length > 0 ? (
                filteredPriorities.map((priority) => (
                  <div className="priority-item" key={priority.title}>
                    <div className="priority-check">
                      <span />
                    </div>

                    <div className="priority-content">
                      <strong>{priority.title}</strong>
                      <small>{priority.department}</small>
                    </div>

                    <span
                      className={`priority-level ${priority.priority.toLowerCase()}`}
                    >
                      {priority.priority}
                    </span>

                    <time>{priority.due}</time>
                  </div>
                ))
              ) : (
                <div className="priority-empty">
                  No matching priorities found.
                </div>
              )}
            </div>
          </article>

          {/* AI INSIGHT */}
          <article className="business-panel ai-business-panel">
            <div className="ai-business-symbol">✦</div>

            <span>BRIQONA INTELLIGENCE</span>
            <h2>Business recommendation</h2>

            <p>
              Your customer success and revenue departments are showing
              strong performance. AI recommends focusing on operational
              cost optimization this month.
            </p>

            <div className="ai-recommendation">
              <div className="recommendation-icon">↘</div>

              <div>
                <strong>Potential cost optimization</strong>
                <small>
                  Estimated opportunity: <b>$6,200/month</b>
                </small>
              </div>
            </div>

            <button className="ai-action-btn">
              Analyze opportunity →
            </button>
          </article>
        </section>

        {/* FOOTER */}
        <footer className="business-footer">
          <span>BRIQONA OS</span>
          <span>Business Operations</span>
          <span>Master Dashboard</span>
        </footer>
      </div>
    </div>
  );
}

export default Business;
