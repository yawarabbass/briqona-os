/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Master Dashboard
|--------------------------------------------------------------------------
*/

import MasterLayout from "../../layouts/MasterLayout";
import "./Dashboard.css";
import StatsCard from "../../components/StatsCard/StatsCard";
import DashboardCharts from "../../components/DashboardCharts/DashboardCharts";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import KpiCards from "../../components/KpiCards/KpiCards";
import RevenueChart from "../../components/RevenueChart/RevenueChart";







export default function Dashboard() {
  return (
    <MasterLayout>

      <section className="master-dashboard">

        <h1 className="master-dashboard-title">
          Master Dashboard
        </h1>

        <p className="master-dashboard-subtitle">
          Welcome to the BRIQONA OS Master Panel.
        </p>

        

  

  <KpiCards />

<div className="dashboard-grid">

  <div className="dashboard-main">
    <RevenueChart />
  </div>

  <div className="dashboard-side">
    <RecentActivity />
  </div>

</div>

        <RecentActivity />
        <DashboardCharts />







        
        
      </section>

    </MasterLayout>
  );
}
