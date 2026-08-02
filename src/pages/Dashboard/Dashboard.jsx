import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-content">
          {/* Sidebar will be built in Step 2 */}
        </div>
      </aside>

      {/* Main Area */}
      <div className="dashboard-main">

        {/* Header */}
        <header className="dashboard-header">
          {/* Header will be built in Step 3 */}
        </header>

        {/* Dashboard Content */}
        <main className="dashboard-content">

          {/* Dashboard sections will be added one-by-one */}

        </main>

        {/* Footer */}
        <footer className="dashboard-footer">
          <span>© 2026 Briqona OS. All rights reserved.</span>
          <span>Version 1.0.0</span>

          <div>
            <button type="button">Privacy Policy</button>
            <button type="button">Terms of Service</button>
            <button type="button">Support</button>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default Dashboard;
