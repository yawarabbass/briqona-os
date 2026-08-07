import "./CompanyStats.css";
import companies from "../../data/companies";

export default function CompanyStats() {

  const total = companies.length;

  const active = companies.filter(
    (company) => company.status === "Active"
  ).length;

  const pending = companies.filter(
    (company) => company.status === "Pending"
  ).length;

  const suspended = companies.filter(
    (company) => company.status === "Suspended"
  ).length;

  return (

    <section className="company-stats">

      <div className="company-stat-card">

        <h4>Total Companies</h4>

        <h2>{total}</h2>

      </div>

      <div className="company-stat-card active">

        <h4>Active</h4>

        <h2>{active}</h2>

      </div>

      <div className="company-stat-card pending">

        <h4>Pending</h4>

        <h2>{pending}</h2>

      </div>

      <div className="company-stat-card suspended">

        <h4>Suspended</h4>

        <h2>{suspended}</h2>

      </div>

    </section>

  );

}
