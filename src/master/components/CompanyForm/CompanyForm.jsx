import { useEffect, useState } from "react";
import "./CompanyForm.css";

const initialForm = {
  company: "",
  owner: "",
  email: "",
  phone: "",
  plan: "Starter",
  status: "Active",
};

export default function CompanyForm({
  company = null,
  onClose,
  onSave,
}) {

  const [form, setForm] = useState(initialForm);

  const isEditMode = Boolean(company);

  useEffect(() => {

    if (company) {

      setForm({
        company: company.company || "",
        owner: company.owner || "",
        email: company.email || "",
        phone: company.phone || "",
        plan: company.plan || "Starter",
        status: company.status || "Active",
      });

    } else {

      setForm(initialForm);

    }

  }, [company]);

  const handleChange = (event) => {

    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    if (
      !form.company.trim() ||
      !form.owner.trim() ||
      !form.email.trim()
    ) {
      return;
    }

    onSave({

      ...form,

      ...(company
        ? { id: company.id }
        : {}),

      company: form.company.trim(),
      owner: form.owner.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),

    });

  };

  return (

    <div className="company-form-overlay">

      <div className="company-form-modal">

        <div className="company-form-header">

          <div>

            <span className="company-form-label">
              COMPANY MANAGEMENT
            </span>

            <h2>
              {isEditMode
                ? "Edit Company"
                : "Add Company"}
            </h2>

          </div>

          <button
            type="button"
            className="company-form-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>

        </div>

        <form
          className="company-form"
          onSubmit={handleSubmit}
        >

          <div className="company-form-grid">

            <label>

              <span>
                Company Name
              </span>

              <input
                name="company"
                type="text"
                placeholder="Enter company name"
                value={form.company}
                onChange={handleChange}
                required
              />

            </label>

            <label>

              <span>
                Owner
              </span>

              <input
                name="owner"
                type="text"
                placeholder="Enter owner name"
                value={form.owner}
                onChange={handleChange}
                required
              />

            </label>

            <label>

              <span>
                Email
              </span>

              <input
                name="email"
                type="email"
                placeholder="owner@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />

            </label>

            <label>

              <span>
                Phone
              </span>

              <input
                name="phone"
                type="tel"
                placeholder="+92..."
                value={form.phone}
                onChange={handleChange}
              />

            </label>

            <label>

              <span>
                Plan
              </span>

              <select
                name="plan"
                value={form.plan}
                onChange={handleChange}
              >

                <option value="Starter">
                  Starter
                </option>

                <option value="Business">
                  Business
                </option>

                <option value="Professional">
                  Professional
                </option>

                <option value="Enterprise">
                  Enterprise
                </option>

              </select>

            </label>

            <label>

              <span>
                Status
              </span>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
              >

                <option value="Active">
                  Active
                </option>

                <option value="Pending">
                  Pending
                </option>

                <option value="Suspended">
                  Suspended
                </option>

              </select>

            </label>

          </div>

          <div className="company-form-actions">

            <button
              type="button"
              className="company-form-cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="company-form-save"
            >
              {isEditMode
                ? "Update Company"
                : "Save Company"}
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}
