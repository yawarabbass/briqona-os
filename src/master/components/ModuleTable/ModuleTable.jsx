import "./ModuleTable.css";

export default function ModuleTable({
  modules,
  onView,
  onEdit,
  onDelete,
}) {
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

        {modules.length > 0 ? (
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
              {modules.map((module) => (
                <tr key={module.id}>

                  <td data-label="Module">
                    <strong>
                      {module.name}
                    </strong>
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
                        module.status === "Active"
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
                        onClick={() =>
                          onView(module)
                        }
                      >
                        View
                      </button>

                      <button
                        type="button"
                        className="module-action edit"
                        onClick={() =>
                          onEdit(module)
                        }
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="module-action delete"
                        onClick={() =>
                          onDelete(module)
                        }
                      >
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        ) : (
          <div className="module-table-empty">
            <strong>No modules found.</strong>
            <span>
              Try changing your search or filters.
            </span>
          </div>
        )}

      </div>

    </section>
  );
}
