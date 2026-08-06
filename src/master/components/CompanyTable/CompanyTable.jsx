/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Company Table
|--------------------------------------------------------------------------
*/

import "./CompanyTable.css";
import companies from "../../data/companies";

export default function CompanyTable() {
  return (
    <section className="company-table">

      <div className="company-table-header">
        <div>
          <span className="company-table-label">
            Companies
          </span>

          <h2>
            Company Directory
          </h2>
        </div>

        <button
          type="button"
          className="company-table-button"
        >
          + Add Company
        </button>
      </div>

      <div className="company-table-wrapper">

        <table className="company-table-grid">

          <thead>

            <tr>
              <th>Company</th>
              <th>Owner</th>
              <th>Plan</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {companies.map((company) => (

              <tr key={company.id}>

                <td>{company.company}</td>

                <td>{company.owner}</td>

                <td>{company.plan}</td>

                <td>

                  <span
                    className={`status-badge ${company.status.toLowerCase()}`}
                  >
                    {company.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}
