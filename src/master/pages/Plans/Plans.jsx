
import "./Plans.css";

import PlanSearch from "../../components/PlanSearch/PlanSearch";
import PlanFilters from "../../components/PlanFilters/PlanFilters";
import PlanTable from "../../components/PlanTable/PlanTable";

export default function Plans() {
  return (
  

      <section className="master-plans">

        <div className="master-page-header">

          <h1>Plans</h1>

          <p>
            Manage subscription plans and pricing.
          </p>

        </div>

        <div className="plans-toolbar">

          <PlanSearch />

          <PlanFilters />

        </div>

        <PlanTable />

      </section>

  );
}
