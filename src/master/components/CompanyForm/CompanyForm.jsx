import "./CompanyForm.css";

export default function CompanyForm() {
  return (
    <form className="company-form">

      <div className="company-form-grid">

        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            placeholder="Enter company name"
          />
        </div>

        <div className="form-group">
          <label>Owner Name</label>
          <input
            type="text"
            placeholder="Enter owner name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            placeholder="Enter phone number"
          />
        </div>

        <div className="form-group">
          <label>Plan</label>

          <select>
            <option>Starter</option>
            <option>Business</option>
            <option>Professional</option>
            <option>Enterprise</option>
          </select>

        </div>

        <div className="form-group">
          <label>Industry</label>

          <select>
            <option>Technology</option>
            <option>Education</option>
            <option>Healthcare</option>
            <option>Retail</option>
          </select>

        </div>

        <div className="form-group">
          <label>Status</label>

          <select>
            <option>Active</option>
            <option>Pending</option>
            <option>Suspended</option>
          </select>

        </div>

      </div>

      <div className="company-form-actions">

        <button type="submit">
          Save Company
        </button>

      </div>

    </form>
  );
      }
