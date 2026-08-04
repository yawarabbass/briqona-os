import "./PlanFilters.css";

export default function PlanFilters() {
  return (
    <section className="plan-filters">

      <div className="plan-filter-group">

        <label>Billing</label>

        <select>
          <option>All</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>

      </div>

      <div className="plan-filter-group">

        <label>Status</label>

        <select>
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

    </section>
  );
}
