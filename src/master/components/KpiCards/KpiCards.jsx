import "./KpiCards.css";

import StatsCard from "../StatsCard/StatsCard";

export default function KpiCards() {
  return (
    <section className="kpi-cards">

      <StatsCard
        title="Total Companies"
        value="128"
        description="+12 this month"
      />

      <StatsCard
        title="Active Users"
        value="8,542"
        description="+324 today"
      />

      <StatsCard
        title="Monthly Revenue"
        value="$48,200"
        description="+18.4%"
      />

      <StatsCard
        title="AI Requests"
        value="1.2M"
        description="99.98% success"
      />

    </section>
  );
}
