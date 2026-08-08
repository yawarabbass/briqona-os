import { useEffect, useState } from "react";
import "./ModuleForm.css";

const emptyForm = {
  name: "",
  industry: "Technology",
  version: "1.0.0",
  status: "Active",
};

export default function ModuleForm({
  module,
  onSubmit,
  onCancel,
}) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (module) {
      setForm({
        name: module.name || "",
        industry: module.industry || "Technology",
        version: module.version || "1.0.0",
        status: module.status || "Active",
      });
    } else {
      setForm(emptyForm);
    }
  }, [module]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      return;
    }

    onSubmit({
      ...form,
      name: form.name.trim(),
      version: form.version.trim(),
    });
  };

  return (
    <form
      className="module-form"
      onSubmit={handleSubmit}
    >

      <div className="module-form-header">
        <div>
          <span>MODULE MANAGEMENT</span>

          <h2>
            {module
              ? "Edit Module"
              : "Add New Module"}
          </h2>

          <p>
            Configure module information and status.
          </p>
        </div>

        <button
          type="button"
          className="module-form-close"
          onClick={onCancel}
          aria-label="Close form"
        >
          ×
        </button>
      </div>

      <div className="module-form-grid">

        <div className="form-group">
          <label htmlFor="module-name">
            Module Name
          </label>

          <input
            id="module-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter module name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="module-industry">
            Industry
          </label>

          <select
            id="module-industry"
            name="industry"
            value={form.industry}
            onChange={handleChange}
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
            name="version"
            type="text"
            value={form.version}
            onChange={handleChange}
            placeholder="1.0.0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="module-form-status">
            Status
          </label>

          <select
            id="module-form-status"
            name="status"
            value={form.status}
            onChange={handleChange}
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
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="module-form-save"
        >
          {module
            ? "Update Module"
            : "Save Module"}
        </button>

      </div>

    </form>
  );
}
