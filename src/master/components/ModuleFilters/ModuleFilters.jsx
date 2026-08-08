import "./ModuleFilters.css";

export default function ModuleFilters({
  status,
  industry,
  onStatusChange,
  onIndustryChange,
}) {
  return (
    <div className="module-filters">

      <div className="module-filter-group">
        <label htmlFor="module-status">
          Status
        </label>

        <select
          id="module-status"
          value={status}
          onChange={(event) =>
            onStatusChange(event.target.value)
          }
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="module-filter-group">
        <label htmlFor="module-industry">
          Industry
        </label>

        <select
          id="module-industry"
          value={industry}
          onChange={(event) =>
            onIndustryChange(event.target.value)
          }
        >
          <option value="All Industries">
            All Industries
          </option>

          <option value="Technology">
            Technology
          </option>

          <option value="Business">
            Business
          </option>

          <option value="Retail">
            Retail
          </option>

          <option value="Finance">
            Finance
          </option>
        </select>
      </div>

    </div>
  );
}
