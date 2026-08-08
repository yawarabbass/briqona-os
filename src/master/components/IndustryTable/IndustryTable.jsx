import { useMemo, useState } from "react";
import "./IndustryTable.css";

import industries from "../../data/industries";
import IndustryForm from "../IndustryForm/IndustryForm";

export default function IndustryTable({
  searchTerm = "",
  statusFilter = "All",
}) {
  const [industryList, setIndustryList] = useState(industries);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [editingIndustry, setEditingIndustry] = useState(null);
  const [deleteIndustry, setDeleteIndustry] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const visibleIndustries = useMemo(() => {
    const search = String(searchTerm || "")
      .trim()
      .toLowerCase();

    return industryList.filter((industry) => {
      const name = String(industry.name || "").toLowerCase();
      const modules = String(industry.modules || "").toLowerCase();
      const companies = String(industry.companies || "").toLowerCase();
      const status = String(industry.status || "").toLowerCase();

      const matchesSearch =
        !search ||
        name.includes(search) ||
        modules.includes(search) ||
        companies.includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        status === String(statusFilter).toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }, [industryList, searchTerm, statusFilter]);

  const handleView = (industry) => {
    setSelectedIndustry(industry);
  };

  const handleEdit = (industry) => {
    setSelectedIndustry(null);
    setEditingIndustry(industry);
  };

  const handleDeleteRequest = (industry) => {
    setDeleteIndustry(industry);
  };

  const handleDeleteConfirm = () => {
    if (!deleteIndustry) return;

    setIndustryList((current) =>
      current.filter(
        (industry) => industry.id !== deleteIndustry.id
      )
    );

    setDeleteIndustry(null);
  };

  const handleAddIndustry = (newIndustry) => {
    const industry = {
      ...newIndustry,
      id: Date.now(),
    };

    setIndustryList((current) => [
      industry,
      ...current,
    ]);

    setShowAddForm(false);
  };

  const handleUpdateIndustry = (updatedIndustry) => {
    setIndustryList((current) =>
      current.map((industry) =>
        industry.id === updatedIndustry.id
          ? updatedIndustry
          : industry
      )
    );

    setEditingIndustry(null);
  };

  return (
    <section className="industry-table">

      {/* HEADER */}

      <div className="industry-table-header">

        <div className="industry-table-heading">

          <span className="industry-table-label">
            INDUSTRY MANAGEMENT
          </span>

          <h2>Industries</h2>

          <p>
            Manage industries and their assigned modules.
          </p>

        </div>

        <button
          type="button"
          className="industry-table-add-button"
          onClick={() => setShowAddForm(true)}
        >
          + Add Industry
        </button>

      </div>


      {/* RESULT */}

      <div className="industry-table-result">
        Showing{" "}
        <strong>{visibleIndustries.length}</strong>{" "}
        {visibleIndustries.length === 1
          ? "industry"
          : "industries"}
      </div>


      {/* TABLE */}

      <div className="industry-table-wrapper">

        <table className="industry-table-grid">

          <thead>
            <tr>
              <th>Industry</th>
              <th>Modules</th>
              <th>Companies</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {visibleIndustries.length > 0 ? (

              visibleIndustries.map((industry) => (

                <tr key={industry.id}>

                  <td data-label="Industry">
                    <strong className="industry-name">
                      {industry.name}
                    </strong>
                  </td>

                  <td data-label="Modules">
                    {industry.modules}
                  </td>

                  <td data-label="Companies">
                    {industry.companies}
                  </td>

                  <td data-label="Status">
                    <span
                      className={`industry-status ${
                        String(industry.status).toLowerCase()
                      }`}
                    >
                      {industry.status}
                    </span>
                  </td>

                  {/* ==================================
                      ACTION BUTTONS
                  ================================== */}

                  <td
                    data-label="Action"
                    className="industry-action-cell"
                  >

                    <div className="industry-table-actions">

                      <button
                        type="button"
                        className="industry-view-button"
                        onClick={() => handleView(industry)}
                      >
                        View
                      </button>

                      <button
                        type="button"
                        className="industry-edit-button"
                        onClick={() => handleEdit(industry)}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="industry-delete-button"
                        onClick={() =>
                          handleDeleteRequest(industry)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>
                <td
                  colSpan="5"
                  className="industry-table-empty"
                >
                  No industries found.
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>


      {/* VIEW MODAL */}

      {selectedIndustry && (

        <div className="industry-preview-overlay">

          <div className="industry-preview-modal">

            <div className="industry-preview-header">

              <div>
                <span className="industry-preview-label">
                  INDUSTRY DETAILS
                </span>

                <h3>
                  {selectedIndustry.name}
                </h3>
              </div>

              <button
                type="button"
                className="industry-preview-close"
                onClick={() => setSelectedIndustry(null)}
              >
                ×
              </button>

            </div>

            <div className="industry-preview-grid">

              <div>
                <span>Industry</span>
                <strong>
                  {selectedIndustry.name}
                </strong>
              </div>

              <div>
                <span>Modules</span>
                <strong>
                  {selectedIndustry.modules}
                </strong>
              </div>

              <div>
                <span>Companies</span>
                <strong>
                  {selectedIndustry.companies}
                </strong>
              </div>

              <div>
                <span>Status</span>
                <strong>
                  {selectedIndustry.status}
                </strong>
              </div>

            </div>

            <div className="industry-preview-actions">

              <button
                type="button"
                className="industry-preview-secondary"
                onClick={() => setSelectedIndustry(null)}
              >
                Close
              </button>

              <button
                type="button"
                className="industry-preview-primary"
                onClick={() =>
                  handleEdit(selectedIndustry)
                }
              >
                Edit Industry
              </button>

            </div>

          </div>

        </div>

      )}


      {/* ADD */}

      {showAddForm && (
        <IndustryForm
          onClose={() => setShowAddForm(false)}
          onSave={handleAddIndustry}
        />
      )}


      {/* EDIT */}

      {editingIndustry && (
        <IndustryForm
          industry={editingIndustry}
          onClose={() => setEditingIndustry(null)}
          onSave={handleUpdateIndustry}
        />
      )}


      {/* DELETE */}

      {deleteIndustry && (

        <div className="industry-preview-overlay">

          <div className="industry-delete-modal">

            <div className="industry-delete-icon">
              !
            </div>

            <span className="industry-preview-label">
              DELETE INDUSTRY
            </span>

            <h3>
              Delete {deleteIndustry.name}?
            </h3>

            <p>
              This frontend test action will remove
              the industry from the current list.
            </p>

            <div className="industry-preview-actions">

              <button
                type="button"
                className="industry-preview-secondary"
                onClick={() => setDeleteIndustry(null)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="industry-delete-confirm"
                onClick={handleDeleteConfirm}
              >
                Delete Industry
              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}
