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
<div className="master-dashboard-stats">

  <StatsCard
    title="Total Companies"
    value="128"
    description="Active companies"
  />

  <StatsCard
    title="Total Users"
    value="8,542"
    description="Registered users"
  />

  <StatsCard
    title="Monthly Revenue"
    value="$48,200"
    description="Current month"
  />

  <StatsCard
    title="AI Requests"
    value="1.2M"
    description="Processed this month"
  />

</div>
<DashboardCharts />
        
      </section>

    </MasterLayout>
  );
}
