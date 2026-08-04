import "./ModuleForm.css";

export default function ModuleForm() {
  return (
    <form className="module-form">

      <div className="module-form-grid">

        <div className="form-group">

          <label>Module Name</label>

          <input
            type="text"
            placeholder="Enter module name"
          />

        </div>

        <div className="form-group">

          <label>Industry</label>

          <select>

            <option>Technology</option>
            <option>Business</option>
            <option>Retail</option>
            <option>Finance</option>

          </select>

        </div>

        <div className="form-group">

          <label>Version</label>

          <input
            type="text"
            placeholder="1.0.0"
          />

        </div>

        <div className="form-group">

          <label>Status</label>

          <select>

            <option>Active</option>
            <option>Inactive</option>

          </select>

        </div>

      </div>

      <div className="module-form-actions">

        <button type="submit">
          Save Module
        </button>

      </div>

    </form>
  );
            }
