import React from "react";
import StatCard from "../components/StatCard.jsx";

function Dashboard() {
  return (
    <main className="dashboard">
      <section className="welcome-section">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>Good morning, Business Admin</h2>
          <p className="welcome-text">
            Here is what is happening across your business today.
          </p>
        </div>

        <button className="primary-button">+ New Activity</button>
      </section>

      <section className="stats-grid">
        <StatCard
          label="Revenue"
          value="$84,240"
          change="+12.8% from last month"
          icon="$"
        />

        <StatCard
          label="Orders"
          value="1,284"
          change="+8.4% from last month"
          icon="↗"
        />

        <StatCard
          label="Customers"
          value="8,492"
          change="+5.2% from last month"
          icon="◉"
        />

        <StatCard
          label="Net Profit"
          value="$28,640"
          change="+14.6% from last month"
          icon="◆"
        />
      </section>

      <section className="dashboard-grid">
        <div className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">PERFORMANCE</p>
              <h3>Business Overview</h3>
            </div>

            <button className="panel-action">Last 30 days ▾</button>
          </div>

          <div className="chart-placeholder">
            <div className="chart-line">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="chart-labels">
              <span>01</span>
              <span>05</span>
              <span>10</span>
              <span>15</span>
              <span>20</span>
              <span>25</span>
              <span>30</span>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">INTELLIGENCE</p>
              <h3>BRIQONA AI</h3>
            </div>
          </div>

          <div className="ai-insight">
            <div className="ai-symbol">✦</div>

            <div>
              <h4>Business insight</h4>
              <p>
                Revenue is trending upward this month. Inventory turnover has
                also improved compared with the previous period.
              </p>
            </div>
          </div>

          <button className="secondary-button">Ask BRIQONA AI →</button>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
