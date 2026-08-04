import "./CompanyTable.css";

const companies = [
  {
    id: 1,
    company: "Alpha Technologies",
    owner: "John Smith",
    plan: "Enterprise",
    status: "Active",
  },
  {
    id: 2,
    company: "Bright Solutions",
    owner: "Sarah Khan",
    plan: "Business",
    status: "Active",
  },
  {
    id: 3,
    company: "Cloud Nexus",
    owner: "Ali Raza",
    plan: "Starter",
    status: "Pending",
  },
  {
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
