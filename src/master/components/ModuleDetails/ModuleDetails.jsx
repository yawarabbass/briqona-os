import "./ModuleDetails.css";

export default function ModuleDetails({
  module,
  onClose,
}) {
  if (!module) {
    return null;
  }

  return (
    <section className="module-details">

      <div className="module-details-header">
        <div>
          <span>MODULE DETAILS</span>

          <h2>{module.name}</h2>

          <p>
            Complete module configuration overview.
          </p>
        </div>

        <button
          type="button"
          className="module-details-close"
          onClick={onClose}
          aria-label="Close details"
        >
          ×
        </button>
      </div>

      <div className="module-details-grid">

        <div>
          <span>Module Name</span>
          <strong>{module.name}</strong>
        </div>

        <div>
          <span>Industry</span>
          <strong>{module.industry}</strong>
        </div>

        <div>
          <span>Version</span>
          <strong>{module.version}</strong>
        </div>

        <div>
          <span>Status</span>

          <strong
            className={
              module.status === "Active"
                ? "details-active"
                : "details-inactive"
            }
          >
            {module.status}
          </strong>
        </div>

      </div>

    </section>
  );
}
