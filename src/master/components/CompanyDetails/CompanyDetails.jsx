import "./CompanyDetails.css";

export default function CompanyDetails() {
  return (
    <section className="company-details">

      <h2>Company Details</h2>

      <div className="company-details-grid">

        <div>
          <span>Company</span>
          <strong>Alpha Technologies</strong>
        </div>

        <div>
          <span>Owner</span>
          <strong>John Smith</strong>
        </div>

        <div>
          <span>Email</span>
          <strong>john@alpha.com</strong>
        </div>

        <div>
          <span>Phone</span>
          <strong>+1 234 567 890</strong>
        </div>

        <div>
          <span>Plan</span>
          <strong>Enterprise</strong>
        </div>

        <div>
          <span>Status</span>
          <strong>Active</strong>
        </div>

      </div>

    </section>
  );
}
