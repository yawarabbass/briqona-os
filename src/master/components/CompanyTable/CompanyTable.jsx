import "./CompanyTable.css";

const companies = [
import companies from "../../data/companies";
    id: 4,
    company: "Digital One",
    owner: "Ahmed Hassan",
    plan: "Professional",
    status: "Suspended",
  },
];

export default function CompanyTable() {
  return (
    <section className="company-table">

      <div className="company-table-header">
        <h2>Companies</h2>
      </div>

      <table>

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

              <td>{company.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}
