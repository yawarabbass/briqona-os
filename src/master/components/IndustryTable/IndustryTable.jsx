import "./IndustryTable.css";
import industries from "../../data/industries";

export default function IndustryTable() {
  return (
    <div className="industry-table">

      <div className="industry-table-wrapper">

        <table className="industry-table-grid">

          <thead>
            <tr>
              <th>Industry</th>
              <th>Modules</th>
              <th>Companies</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {industries.length > 0 ? (

              industries.map((industry) => (

                <tr key={industry.id}>

                  <td data-label="Industry">
                    {industry.name}
                  </td>

                  <td data-label="Modules">
                    {industry.modules}
                  </td>

                  <td data-label="Companies">
                    {industry.companies}
                  </td>

                  <td data-label="Status">
                    {industry.status}
                  </td>

                </tr>

              ))

            ) : (

              <tr>
                <td
                  colSpan="4"
                  className="industry-table-empty"
                >
                  No industries found.
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}
