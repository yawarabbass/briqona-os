import { useEffect, useState } from "react";
import "./IndustryForm.css";

export default function IndustryForm({
  industry = null,
  onClose,
  onSave,
}) {

  const [formData, setFormData] = useState({
    name: "",
    modules: "",
    companies: "",
    status: "Active",
  });


  /* ======================================================
     LOAD EDIT DATA
  ====================================================== */

  useEffect(() => {

    if (industry) {

      setFormData({
        name: industry.name || "",
        modules: industry.modules || "",
        companies: industry.companies || "",
        status: industry.status || "Active",
      });

    } else {

      setFormData({
        name: "",
        modules: "",
        companies: "",
        status: "Active",
      });

    }

  }, [industry]);


  /* ======================================================
     CHANGE
  ====================================================== */

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


  /* ======================================================
     SUBMIT
  ====================================================== */

  const handleSubmit = (event) => {

    event.preventDefault();


    const cleanData = {

      ...(industry || {}),

      ...formData,

      name: formData.name.trim(),

      modules: formData.modules,

      companies: formData.companies,

    };


    if (!cleanData.name) {
      return;
    }

    if (!cleanData.modules) {
      return;
    }

    if (!cleanData.companies) {
      return;
    }


    onSave?.(cleanData);

  };


  return (

    <div
      className="industry-form-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="industry-form-title"
    >

      <div className="industry-form-modal">


        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="industry-form-header">

          <div>

            <span className="industry-form-label">

              {industry
                ? "INDUSTRY MANAGEMENT"
                : "NEW INDUSTRY"
              }

            </span>

            <h2 id="industry-form-title">

              {industry
                ? `Edit ${industry.name}`
                : "Create New Industry"
              }

            </h2>

            <p>

              {industry
                ? "Update industry details and limits."
                : "Create an industry for your SaaS platform."
              }

            </p>

          </div>


          <button
            type="button"
            className="industry-form-close"
            onClick={onClose}
            aria-label="Close industry form"
          >
            ×
          </button>

        </div>


        {/* ==================================================
            FORM
        ================================================== */}

        <form
          className="industry-form"
          onSubmit={handleSubmit}
        >

          <div className="industry-form-grid">


            {/* NAME */}

            <div className="form-group">

              <label htmlFor="industry-name">
                Industry Name
              </label>

              <input
                id="industry-name"
                name="name"
                type="text"
                placeholder="e.g. Healthcare"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* MODULES */}

            <div className="form-group">

              <label htmlFor="industry-modules">
                Total Modules
              </label>

              <input
                id="industry-modules"
                name="modules"
                type="number"
                min="1"
                placeholder="Enter module count"
                value={formData.modules}
                onChange={handleChange}
                required
              />

            </div>


            {/* COMPANIES */}

            <div className="form-group">

              <label htmlFor="industry-companies">
                Total Companies
              </label>

              <input
                id="industry-companies"
                name="companies"
                type="number"
                min="0"
                placeholder="Enter company count"
                value={formData.companies}
                onChange={handleChange}
                required
              />

            </div>


            {/* STATUS */}

            <div className="form-group">

              <label htmlFor="industry-status">
                Status
              </label>

              <select
                id="industry-status"
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


          {/* ==================================================
              ACTIONS
          ================================================== */}

          <div className="industry-form-actions">

            <button
              type="button"
              className="industry-form-cancel"
              onClick={onClose}
            >
              Cancel
            </button>


            <button
              type="submit"
              className="industry-form-save"
            >

              {industry
                ? "Save Changes"
                : "Save Industry"
              }

            </button>

          </div>

        </form>

      </div>

    </div>

  );
}
