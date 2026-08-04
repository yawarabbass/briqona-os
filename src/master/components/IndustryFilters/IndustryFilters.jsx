import "./IndustryFilters.css";

export default function IndustryFilters() {
  return (
    <section className="industry-filters">

      <div className="industry-filter-group">

        <label>Status</label>

        <select>
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

      <div className="industry-filter-group">

        <label>Modules</label>

        <select>
          <option>All</option>
          <option>5+</option>
          <option>10+</option>
        </select>

      </div>

    </section>
  );
}
