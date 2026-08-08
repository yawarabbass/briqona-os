import "./ModuleFilters.css";

export default function ModuleFilters() {
  return (
    <div className="module-filters">

      <div className="module-filter-group">
        <label htmlFor="module-status">
          Status
        </label>

        <select id="module-status" defaultValue="All">
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="module-filter-group">
        <label htmlFor="module-industry">
          Industry
        </label>

        <select id="module-industry" defaultValue="All Industries">
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
