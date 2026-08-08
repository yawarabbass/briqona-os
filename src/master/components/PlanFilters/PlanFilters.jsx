import "./PlanFilters.css";

export default function PlanFilters() {
  return (
    <div className="plan-filters">

      <div className="plan-filter-group">
        <label htmlFor="plan-billing-filter">
          Billing
        </label>

        <select
          id="plan-billing-filter"
          defaultValue="All"
        >
          <option value="All">All</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      <div className="plan-filter-group">
        <label htmlFor="plan-status-filter">
          Status
        </label>

        <select
          id="plan-status-filter"
          defaultValue="All"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

    </div>
  );
}
