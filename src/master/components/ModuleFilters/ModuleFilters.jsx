import "./ModuleFilters.css";

export default function ModuleFilters() {
  return (
    <section className="module-filters">

      <div className="module-filter-group">

        <label>Status</label>

        <select>
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

      <div className="module-filter-group">

        <label>Industry</label>

        <select>
          <option>All Industries</option>
          <option>Technology</option>
          <option>Business</option>
          <option>Retail</option>
          <option>Finance</option>
        </select>

      </div>

    </section>
  );
}
