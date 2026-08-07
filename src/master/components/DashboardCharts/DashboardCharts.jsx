/* 
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Dashboard Charts
|--------------------------------------------------------------------------
| Enterprise Analytics Container
|--------------------------------------------------------------------------
*/

import "./DashboardCharts.css";

import RevenueChart from "../RevenueChart/RevenueChart";

export default function DashboardCharts() {

  return (

    <section className="dashboard-charts">

      <RevenueChart />

      <article className="chart-coming-card">

        <div className="coming-header">

          <span>

            Coming Soon

          </span>

          <h3>

            User Growth Analytics

          </h3>

        </div>

        <div className="coming-body">

          This widget will display user growth,
          customer acquisition,
          active sessions,
          retention
          and engagement analytics.

        </div>

      </article>

    </section>

  );

}
