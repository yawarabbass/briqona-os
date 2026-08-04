import "./ModuleTable.css";
import modules from "../../data/modules";

export default function ModuleTable() {
  return (
    <section className="module-table">

      <div className="module-table-header">
        <h2>Modules</h2>
      </div>

      <table>

        <thead>
          <tr>
            <th>Module</th>
            <th>Industry</th>
            <th>Version</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {modules.map((module) => (

            <tr key={module.id}>

              <td>{module.name}</td>

              <td>{module.industry}</td>

              <td>{module.version}</td>

              <td>{module.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}
