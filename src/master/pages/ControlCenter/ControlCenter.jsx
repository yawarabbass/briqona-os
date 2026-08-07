/*
  BRIQONA OS
  Master Control Center
*/

import "./ControlCenter.css";

import KpiCards from "../../components/KpiCards/KpiCards";
import DashboardCharts from "../../components/DashboardCharts/DashboardCharts";
import LatestCompanies from "../../components/LatestCompanies/LatestCompanies";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import QuickActions from "../../components/QuickActions/QuickActions";
import SystemStatus from "../../components/SystemStatus/SystemStatus";

export default function ControlCenter() {
  return (
    <main className="control-center">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="cc-page-header">

        <div className="cc-heading">

          <span className="cc-eyebrow">
            MASTER CONTROL CENTER
          </span>

          <h1>
            Control Center
          </h1>

          <p>
            Monitor and manage the complete BRIQONA OS
            platform from one central control point.
          </p>

        </div>

        <div className="cc-header-status">

          <span className="cc-status-dot" />

          <div>
            <strong>
              System Operational
            </strong>

            <span>
              All core services running normally
            </span>
          </div>

        </div>

      </section>


      {/* =====================================================
          KPI OVERVIEW
      ===================================================== */}

      <section className="cc-section">

        <div className="cc-section-heading">

          <div>
            <span className="cc-section-label">
              OVERVIEW
            </span>

            <h2>
              Platform Overview
            </h2>
          </div>

          <span className="cc-live-indicator">
            Live
          </span>

        </div>

        <KpiCards />

      </section>


      {/* =====================================================
          MAIN DASHBOARD GRID
      ===================================================== */}

      <section className="cc-grid">

        {/* ===================================================
            LEFT COLUMN
        =================================================== */}

        <div className="cc-left">

          <div className="cc-panel">

            <div className="cc-panel-header">

              <div>
                <span className="cc-section-label">
                  ANALYTICS
                </span>

                <h2>
                  Platform Analytics
                </h2>
              </div>

              <span className="cc-panel-meta">
                Overview
              </span>

            </div>

            <div className="cc-panel-body">
              <DashboardCharts />
            </div>

          </div>


          <div className="cc-panel">

            <div className="cc-panel-header">

              <div>
                <span className="cc-section-label">
                  COMPANIES
                </span>

                <h2>
                  Latest Companies
                </h2>
              </div>

              <span className="cc-panel-meta">
                Recent
              </span>

            </div>

            <div className="cc-panel-body">
              <LatestCompanies />
            </div>

          </div>


          <div className="cc-panel">

            <div className="cc-panel-header">

              <div>
                <span className="cc-section-label">
                  ACTIVITY
                </span>

                <h2>
                  Recent Activity
                </h2>
              </div>

              <span className="cc-panel-meta">
                Latest
              </span>

            </div>

            <div className="cc-panel-body">
              <RecentActivity />
            </div>

          </div>

        </div>


        {/* ===================================================
            RIGHT COLUMN
        =================================================== */}

        <aside className="cc-right">

          <div className="cc-panel cc-quick-panel">

            <div className="cc-panel-header">

              <div>
                <span className="cc-section-label">
                  ACTIONS
                </span>

                <h2>
                  Quick Actions
                </h2>
              </div>

            </div>

            <div className="cc-panel-body">
              <QuickActions />
            </div>

          </div>


          <div className="cc-panel">

            <div className="cc-panel-header">

              <div>
                <span className="cc-section-label">
                  INFRASTRUCTURE
                </span>

                <h2>
                  System Status
                </h2>
              </div>

              <span className="cc-live-indicator">
                Live
              </span>

            </div>

            <div className="cc-panel-body">
              <SystemStatus />
            </div>

          </div>

        </aside>

      </section>


      {/* =====================================================
          FOOTER STATUS
      ===================================================== */}

      <section className="cc-bottom-status">

        <div className="cc-bottom-status-left">

          <span className="cc-status-dot" />

          <span>
            BRIQONA OS Control Center is operational
          </span>

        </div>

        <span className="cc-version">
          Master Console
        </span>

      </section>

    </main>
  );
}
