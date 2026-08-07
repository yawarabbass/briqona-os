import "./CompanyFilters.css";

export default function CompanyFilters() {
  return (
    <div className="company-filters">

      <select className="company-filter-select" defaultValue="all">
        <option value="all">All Status</option>
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
        <option value="Suspended">Suspended</option>
      </select>

      <select className="company-filter-select" defaultValue="all-plans">
        <option value="all-plans">All Plans</option>
        <option value="Starter">Starter</option>
        <option value="Business">Business</option>
        <option value="Professional">Professional</option>
        <option value="Enterprise">Enterprise</option>
      </select>

    </div>
  );
}
