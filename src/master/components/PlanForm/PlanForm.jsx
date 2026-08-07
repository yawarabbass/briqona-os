import { useEffect, useState } from "react";
import "./PlanForm.css";

export default function PlanForm({
  plan = null,
  onClose,
  onSave,
}) {

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    billing: "Monthly",
    companies: "",
    users: "",
    status: "Active",
  });

  useEffect(() => {

    if (plan) {

      setFormData({
        name: plan.name || "",
        price: plan.price || "",
        billing: plan.billing || "Monthly",
        companies: plan.companies || "",
        users: plan.users || "",
        status: plan.status || "Active",
      });

    } else {

      setFormData({
        name: "",
        price: "",
        billing: "Monthly",
        companies: "",
        users: "",
        status: "Active",
      });

    }

  }, [plan]);

  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    const cleanData = {
      ...formData,

      name: formData.name.trim(),
      price: formData.price.trim(),
      companies: formData.companies,
      users: formData.users,

    };

    if (!cleanData.name) {
      return;
    }

    if (!cleanData.price) {
      return;
    }

    if (!cleanData.companies) {
      return;
    }

    if (!cleanData.users) {
      return;
    }

    onSave({
      ...(plan || {}),
      ...cleanData,
    });

  };

  return (

    <div
      className="plan-form-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="plan-form-title"
    >

      <div className="plan-form-modal">

        {/* ==========================
            HEADER
        ========================== */}

        <div className="plan-form-header">

          <div>

            <span className="plan-form-label">
              {plan
                ? "PLAN MANAGEMENT"
                : "NEW PLAN"
              }
            </span>

            <h2 id="plan-form-title">

              {plan
                ? `Edit ${plan.name}`
                : "Create New Plan"
              }

            </h2>

            <p>
              {plan
                ? "Update subscription plan details and limits."
                : "Create a subscription plan for your SaaS workspace."
              }
            </p>

          </div>


          <button
            type="button"
            className="plan-form-close"
            onClick={onClose}
            aria-label="Close plan form"
          >
            ×
          </button>

        </div>


        {/* ==========================
            FORM
        ========================== */}

        <form
          className="plan-form"
          onSubmit={handleSubmit}
        >

          <div className="plan-form-grid">

            {/* Plan Name */}

            <div className="form-group">

              <label htmlFor="plan-name">
                Plan Name
              </label>

              <input
                id="plan-name"
                name="name"
                type="text"
                placeholder="e.g. Professional"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* Price */}

            <div className="form-group">

              <label htmlFor="plan-price">
                Price
              </label>

              <input
                id="plan-price"
                name="price"
                type="text"
                placeholder="e.g. $49"
                value={formData.price}
                onChange={handleChange}
                required
              />

            </div>


            {/* Billing */}

            <div className="form-group">

              <label htmlFor="plan-billing">
                Billing Cycle
              </label>

              <select
                id="plan-billing"
                name="billing"
                value={formData.billing}
                onChange={handleChange}
              >

                <option value="Monthly">
                  Monthly
                </option>

                <option value="Yearly">
                  Yearly
                </option>

              </select>

            </div>


            {/* Companies */}

            <div className="form-group">

              <label htmlFor="plan-companies">
                Maximum Companies
              </label>

              <input
                id="plan-companies"
                name="companies"
                type="number"
                min="1"
                placeholder="Enter limit"
                value={formData.companies}
                onChange={handleChange}
                required
              />

            </div>


            {/* Users */}

            <div className="form-group">

              <label htmlFor="plan-users">
                Maximum Users
              </label>

              <input
                id="plan-users"
                name="users"
                type="number"
                min="1"
                placeholder="Enter limit"
                value={formData.users}
                onChange={handleChange}
                required
              />

            </div>


            {/* Status */}

            <div className="form-group">

              <label htmlFor="plan-status">
                Status
              </label>

              <select
                id="plan-status"
                name="status"
                value={formData.status}
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


          {/* ==========================
              ACTIONS
          ========================== */}

          <div className="plan-form-actions">

            <button
              type="button"
              className="plan-form-cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="plan-form-save"
            >
              {plan
                ? "Save Changes"
                : "Save Plan"
              }
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}
