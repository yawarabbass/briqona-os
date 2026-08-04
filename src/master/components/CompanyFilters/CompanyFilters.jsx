import "./CompanyFilters.css";

export default function CompanyFilters() {
  return (
    <section className="company-filters">

      <div className="company-filter-group">

        <label htmlFor="company-status">
          Status
        </label>

        <select id="company-status">

          <option>All Status</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Suspended</option>

        </select>

      </div>

      <div className="company-filter-group">

        <label htmlFor="company-plan">
          Plan
        </label>

        <select id="company-plan">

          <option>All Plans</option>
          <option>Starter</option>
          <option>Business</option>
          <option>Professional</option>
          <option>Enterprise</option>

        </select>

      </div>

    </section>
  );
}
