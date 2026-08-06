/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Dashboard Charts
|--------------------------------------------------------------------------
| Enterprise Analytics Preview
|--------------------------------------------------------------------------
*/

import {
  TrendingUp,
  Users,
} from "lucide-react";

import "./DashboardCharts.css";

export default function DashboardCharts() {

  return (

    <section className="dashboard-charts">

      <article className="chart-card">

        <div className="chart-header">

          <div>

            <span className="chart-label">

              Revenue Analytics

            </span>

            <h3>

              Sales Overview

            </h3>

          </div>

          <div className="chart-icon">

            <TrendingUp size={22} />

          </div>

        </div>

        <div className="chart-placeholder">

          <div className="chart-line"></div>

          <div className="chart-line short"></div>

          <div className="chart-line"></div>

          <div className="chart-line medium"></div>

        </div>

        <div className="chart-footer">

          <strong>+18.4%</strong>

          <span>Compared with last month</span>

        </div>

      </article>

      <article className="chart-card">

        <div className="chart-header">

          <div>

            <span className="chart-label">

              Customer Analytics

            </span>

            <h3>

              User Growth

            </h3>

          </div>

          <div className="chart-icon">

            <Users size={22} />

          </div>

        </div>

        <div className="chart-placeholder">

          <div className="chart-line"></div>

          <div className="chart-line medium"></div>

          <div className="chart-line short"></div>

          <div className="chart-line"></div>

        </div>

        <div className="chart-footer">

          <strong>+324</strong>

          <span>New users today</span>

        </div>

      </article>

    </section>

  );

          }
