import "./PlanForm.css";

export default function PlanForm() {
  return (
    <form className="plan-form">

      <div className="plan-form-grid">

        <div className="form-group">
          <label>Plan Name</label>
          <input
            type="text"
            placeholder="Enter plan name"
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            placeholder="Enter price"
          />
        </div>

        <div className="form-group">
          <label>Billing Cycle</label>
          <select>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>

        <div className="form-group">
          <label>Maximum Companies</label>
          <input
            type="number"
            placeholder="Enter limit"
          />
        </div>

        <div className="form-group">
          <label>Maximum Users</label>
          <input
            type="number"
            placeholder="Enter limit"
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

      <div className="plan-form-actions">

        <button type="submit">
          Save Plan
        </button>

      </div>

    </form>
  );
          }
