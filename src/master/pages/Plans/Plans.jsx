import "./Plans.css";

import PlanSearch from "../../components/PlanSearch/PlanSearch";
import PlanFilters from "../../components/PlanFilters/PlanFilters";
import PlanTable from "../../components/PlanTable/PlanTable";

export default function Plans() {
  return (
    <section className="master-plans">

      {/* PAGE HEADER */}
      <div className="master-page-header">

        <div className="master-page-heading">

          <span className="master-page-label">
            SUBSCRIPTION MANAGEMENT
          </span>

          <h1>
            Plans
          </h1>

          <p>
            Manage subscription plans, pricing,
            billing cycles and workspace limits.
          </p>

        </div>

      </div>


      {/* TOOLBAR */}
      <div className="plans-toolbar">

        <div className="plans-search-section">
          <PlanSearch />
        </div>

        <div className="plans-filter-section">
          <PlanFilters />
        </div>

      </div>


      {/* PLAN TABLE */}
      <div className="plans-content">

        <PlanTable />

      </div>

    </section>
  );
}
