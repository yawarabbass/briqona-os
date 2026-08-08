import "./ModuleTable.css";
import modules from "../../data/modules";

export default function ModuleTable() {
  return (
    <div className="module-table">

      <div className="module-table-wrapper">

        <table className="module-table-grid">

          <thead>
            <tr>
              <th>Module</th>
              <th>Industry</th>
              <th>Version</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {modules.length > 0 ? (

              modules.map((module) => (

                <tr key={module.id}>

                  <td data-label="Module">
                    {module.name}
                  </td>

                  <td data-label="Industry">
                    {module.industry}
                  </td>

                  <td data-label="Version">
                    {module.version}
                  </td>

                  <td data-label="Status">
                    {module.status}
                  </td>

                </tr>

              ))

            ) : (

              <tr>
                <td
                  colSpan="4"
                  className="module-table-empty"
                >
                  No modules found.
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}
