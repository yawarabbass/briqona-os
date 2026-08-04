import "./IndustryForm.css";

export default function IndustryForm() {
  return (
    <form className="industry-form">

      <div className="industry-form-grid">

        <div className="form-group">
          <label>Industry Name</label>
          <input
            type="text"
            placeholder="Enter industry name"
          />
        </div>

        <div className="form-group">
          <label>Total Modules</label>
          <input
            type="number"
            placeholder="Enter module count"
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

      <div className="industry-form-actions">

        <button type="submit">
          Save Industry
        </button>

      </div>

    </form>
  );
}
