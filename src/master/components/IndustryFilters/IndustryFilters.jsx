import "./IndustryFilters.css";

export default function IndustryFilters({
  status = "All",
  onStatusChange,
}) {
  return (
    <div className="industry-filters">

      <div className="industry-filter-group">

        <label htmlFor="industry-status-filter">
          Status
        </label>

        <select
          id="industry-status-filter"
          value={status}
          onChange={(event) =>
            onStatusChange?.(event.target.value)
          }
        >
          <option value="All">
            All
          </option>

          <option value="Active">
            Active
          </option>

          <option value="Inactive">
            Inactive
          </option>
        </select>

      </div>

    </div>
  );
}
