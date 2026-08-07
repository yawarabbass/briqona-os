import "./CompanyDetails.css";

export default function CompanyDetails({ company, onClose }) {
  if (!company) {
    return null;
  }

  return (
    <section className="company-details">

      {/* =========================
          Header
      ========================= */}

      <div className="company-details-header">

        <div>

          <span className="company-details-label">
            COMPANY DETAILS
          </span>

          <h2>
            {company.company || "Company"}
          </h2>

        </div>

        <div className="company-details-header-actions">

          <span
            className={`company-details-status ${
              company.status?.toLowerCase() || ""
            }`}
          >
            {company.status || "Unknown"}
          </span>

          <button
            type="button"
            className="company-details-close"
            onClick={onClose}
            aria-label="Close company details"
          >
            ×
          </button>

        </div>

      </div>


      {/* =========================
          Company Information
      ========================= */}

      <div className="company-details-grid">

        <div>
          <span>Company Name</span>
          <strong>{company.company || "—"}</strong>
        </div>

        <div>
          <span>Owner</span>
          <strong>{company.owner || "—"}</strong>
        </div>

        <div>
          <span>Email</span>
          <strong>{company.email || "—"}</strong>
        </div>

        <div>
          <span>Phone</span>
          <strong>{company.phone || "—"}</strong>
        </div>

        <div>
          <span>Subscription Plan</span>
          <strong>{company.plan || "—"}</strong>
        </div>

        <div>
          <span>Account Status</span>
          <strong>{company.status || "—"}</strong>
        </div>

        <div>
          <span>Company ID</span>
          <strong>{company.id || "—"}</strong>
        </div>

        <div>
          <span>Created At</span>
          <strong>{company.createdAt || "—"}</strong>
        </div>

      </div>

    </section>
  );
}
