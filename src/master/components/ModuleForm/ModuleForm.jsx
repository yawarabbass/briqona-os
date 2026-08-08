import "./ModuleForm.css";

export default function ModuleForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <form className="module-form" onSubmit={handleSubmit}>
      <div className="module-form-header">
        <span className="module-form-eyebrow">
          MODULE MANAGEMENT
        </span>

        <h2>Add Module</h2>

        <p>
          Create and configure a new application module.
        </p>
      </div>

      <div className="module-form-grid">

        <div className="form-group">
          <label htmlFor="module-name">
            Module Name
          </label>

          <input
            id="module-name"
            type="text"
            name="moduleName"
            placeholder="Enter module name"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="module-industry">
            Industry
          </label>

          <select
            id="module-industry"
            name="industry"
            defaultValue="Technology"
          >
            <option value="Technology">
              Technology
            </option>

            <option value="Business">
              Business
            </option>

            <option value="Retail">
              Retail
            </option>

            <option value="Finance">
              Finance
            </option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="module-version">
            Version
          </label>

          <input
            id="module-version"
            type="text"
            name="version"
            placeholder="1.0.0"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="module-status">
            Status
          </label>

          <select
            id="module-status"
            name="status"
            defaultValue="Active"
          >
            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>
          </select>
        </div>

      </div>

      <div className="module-form-actions">
        <button
          type="button"
          className="module-form-cancel"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="module-form-submit"
        >
          Save Module
        </button>
      </div>
    </form>
  );
}
