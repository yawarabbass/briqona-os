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

  const stats = [
    {
      key: "total",
      title: "Total Companies",
      value: total,
    },
    {
      key: "active",
      title: "Active",
      value: active,
    },
    {
      key: "pending",
      title: "Pending",
      value: pending,
    },
    {
      key: "suspended",
      title: "Suspended",
      value: suspended,
    },
  ];

  return (
    <section className="company-stats">

      {stats.map((stat) => (
        <article
          key={stat.key}
          className={`company-stat-card ${stat.key}`}
        >

          <div className="company-stat-content">

            <span className="company-stat-title">
              {stat.title}
            </span>

            <strong className="company-stat-value">
              {stat.value}
            </strong>

          </div>

        </article>
      ))}

    </section>
  );
}
