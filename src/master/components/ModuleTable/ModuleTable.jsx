import "./ModuleTable.css";
import modules from "../../data/modules";

export default function ModuleTable() {
  return (
    <section className="module-table">

      <div className="module-table-header">
        <div>
          <span className="module-table-eyebrow">
            MODULE MANAGEMENT
          </span>

          <h2>Application Modules</h2>

          <p>
            Manage modules, industries, versions and status.
          </p>
        </div>
      </div>

      <div className="module-table-wrapper">

        <table className="module-table-grid">

          <thead>
            <tr>
              <th>Module</th>
              <th>Industry</th>
              <th>Version</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {modules.length > 0 ? (

              modules.map((module) => (

                <tr key={module.id}>

                  <td data-label="Module">
                    <strong>{module.name}</strong>
                  </td>

                  <td data-label="Industry">
                    {module.industry}
                  </td>

                  <td data-label="Version">
                    {module.version}
                  </td>

                  <td data-label="Status">

                    <span
                      className={`module-status ${
                        module.status?.toLowerCase() === "active"
                          ? "active"
                          : "inactive"
                      }`}
                    >
                      {module.status}
                    </span>

                  </td>

                  <td data-label="Action">

                    <div className="module-actions">

                      <button
                        type="button"
                        className="module-action view"
                      >
                        View
                      </button>

                      <button
                        type="button"
                        className="module-action edit"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="module-action delete"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="5"
                  className="module-table-empty"
                >
                  No modules found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </section>
  );
}
