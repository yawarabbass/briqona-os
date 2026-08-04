import "./LatestCompanies.css";

const companies = [
  {
    id: 1,
    name: "Alpha Technologies",
    plan: "Enterprise",
    status: "Active",
  },
  {
    id: 2,
    name: "Bright Solutions",
    plan: "Business",
    status: "Active",
  },
  {
    id: 3,
    name: "Cloud Nexus",
    plan: "Starter",
    status: "Pending",
  },
  {
    id: 4,
    name: "Digital One",
    plan: "Professional",
    status: "Active",
  },
];

export default function LatestCompanies() {
  return (
    <section className="latest-companies">

      <div className="latest-companies-header">
        <h3>Latest Companies</h3>
      </div>

      <table className="latest-companies-table">

        <thead>
          <tr>
            <th>Company</th>
            <th>Plan</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {companies.map((company) => (

            <tr key={company.id}>

              <td>{company.name}</td>

              <td>{company.plan}</td>

              <td>{company.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}
