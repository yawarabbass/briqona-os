import "./ModuleDetails.css";

export default function ModuleDetails() {
  return (
    <section className="module-details">

      <h2>Module Details</h2>

      <div className="module-details-grid">

        <div>
          <span>Module Name</span>
          <strong>CRM</strong>
        </div>

        <div>
          <span>Industry</span>
          <strong>Technology</strong>
        </div>

        <div>
          <span>Version</span>
          <strong>1.0.0</strong>
        </div>

        <div>
          <span>Status</span>
          <strong>Active</strong>
        </div>

      </div>

    </section>
  );
}
