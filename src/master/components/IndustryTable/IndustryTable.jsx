import "./IndustryTable.css";
import industries from "../../data/industries";

export default function IndustryTable() {
  return (
    <section className="industry-table">

      <div className="industry-table-header">
        <h2>Industries</h2>
      </div>

      <table>

        <thead>

          <tr>
            <th>Industry</th>
            <th>Modules</th>
            <th>Companies</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {industries.map((industry) => (

            <tr key={industry.id}>

              <td>{industry.name}</td>

              <td>{industry.modules}</td>

              <td>{industry.companies}</td>

              <td>{industry.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}
