import "./CompanyDetails.css";

export default function CompanyDetails({ company }) {

  if (!company) {

    return (

      <section className="company-details">

        <h2>Company Details</h2>

        <p className="company-details-empty">
          Select a company to view its details.
        </p>

      </section>

    );

  }

  return (

    <section className="company-details">

      <div className="company-details-header">

        <div>

          <span className="company-details-label">
            COMPANY PROFILE
          </span>

          <h2>
            Company Details
          </h2>

        </div>

        <span
          className={`company-details-status ${company.status.toLowerCase()}`}
        >
          {company.status}
        </span>

      </div>

      <div className="company-details-grid">

        <div>

          <span>Company</span>

          <strong>
            {company.company}
          </strong>

        </div>

        <div>

          <span>Owner</span>

          <strong>
            {company.owner}
          </strong>

        </div>

        <div>

          <span>Email</span>

          <strong>
            {company.email}
          </strong>

        </div>

        <div>

          <span>Phone</span>

          <strong>
            {company.phone}
          </strong>

        </div>

        <div>

          <span>Plan</span>

          <strong>
            {company.plan}
          </strong>

        </div>

        <div>

          <span>Status</span>

          <strong>
            {company.status}
          </strong>

        </div>

      </div>

    </section>

  );

}
