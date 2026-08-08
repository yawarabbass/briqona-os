import { useMemo, useState } from "react";
import "./IndustryTable.css";

import IndustryForm from "../IndustryForm/IndustryForm";

export default function IndustryTable({
  industries = [],
  searchTerm = "",
  statusFilter = "All",
  onUpdate,
  onDelete,
}) {

  const [selectedIndustry, setSelectedIndustry] =
    useState(null);

  const [editingIndustry, setEditingIndustry] =
    useState(null);

  const [deletingIndustry, setDeletingIndustry] =
    useState(null);


  /* ======================================================
     FILTER
  ====================================================== */

  const visibleIndustries = useMemo(() => {

    const search = String(searchTerm || "")
      .trim()
      .toLowerCase();

    return industries.filter((industry) => {

      const name =
        String(industry.name || "")
          .toLowerCase();

      const modules =
        String(industry.modules || "")
          .toLowerCase();

      const companies =
        String(industry.companies || "")
          .toLowerCase();

      const status =
        String(industry.status || "")
          .toLowerCase();

      const matchesSearch =
        !search ||
        name.includes(search) ||
        modules.includes(search) ||
        companies.includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        status ===
          String(statusFilter).toLowerCase();

      return (
        matchesSearch &&
        matchesStatus
      );

    });

  }, [industries, searchTerm, statusFilter]);


  /* ======================================================
     VIEW
  ====================================================== */

  const handleView = (industry) => {

    setSelectedIndustry(industry);

  };


  /* ======================================================
     EDIT
  ====================================================== */

  const handleEdit = (industry) => {

    setSelectedIndustry(null);

    setEditingIndustry(industry);

  };


  /* ======================================================
     UPDATE
  ====================================================== */

  const handleUpdate = (updatedIndustry) => {

    onUpdate?.(updatedIndustry);

    setEditingIndustry(null);

  };


  /* ======================================================
     DELETE REQUEST
  ====================================================== */

  const handleDeleteRequest = (industry) => {

    setDeletingIndustry(industry);

  };


  /* ======================================================
     DELETE CONFIRM
  ====================================================== */

  const handleDeleteConfirm = () => {

    if (!deletingIndustry) {
      return;
    }

    onDelete?.(deletingIndustry.id);

    setDeletingIndustry(null);

  };


  const hasFilters =
    String(searchTerm || "").trim() !== "" ||
    statusFilter !== "All";


  return (

    <section className="industry-table">


      {/* ==================================================
          TABLE HEADER
      ================================================== */}

      <div className="industry-table-header">

        <div className="industry-table-heading">

          <span className="industry-table-label">
            INDUSTRY MANAGEMENT
          </span>

          <h2>
            Industries
          </h2>

          <p>
            Manage industries and their assigned modules.
          </p>

        </div>

      </div>


      {/* ==================================================
          RESULT
      ================================================== */}

      <div className="industry-table-result">

        Showing{" "}

        <strong>
          {visibleIndustries.length}
        </strong>

        {" "}

        {visibleIndustries.length === 1
          ? "industry"
          : "industries"
        }

        {hasFilters && (
          <>
            {" "}
            <span>
              matching your filters
            </span>
          </>
        )}

      </div>


      {/* ==================================================
          TABLE
      ================================================== */}

      <div className="industry-table-wrapper">

        <table className="industry-table-grid">

          <thead>

            <tr>

              <th>
                Industry
              </th>

              <th>
                Modules
              </th>

              <th>
                Companies
              </th>

              <th>
                Status
              </th>

              <th>
                Action
              </th>

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
                        String(industry.status)
                          .toLowerCase()
                      }`}
                    >
                      {industry.status}
                    </span>

                  </td>


                  {/* ACTION */}

                  <td
                    data-label="Action"
                    className="industry-action-cell"
                  >

                    <div className="industry-table-actions">


                      <button
                        type="button"
                        className="industry-view-button"
                        onClick={() =>
                          handleView(industry)
                        }
                      >
                        View
                      </button>


                      <button
                        type="button"
                        className="industry-edit-button"
                        onClick={() =>
                          handleEdit(industry)
                        }
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


      {/* ==================================================
          VIEW MODAL
      ================================================== */}

      {selectedIndustry && (

        <div className="industry-modal-overlay">

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
                onClick={() =>
                  setSelectedIndustry(null)
                }
              >
                ×
              </button>

            </div>


            <div className="industry-preview-grid">

              <div>
                <span>
                  Industry
                </span>

                <strong>
                  {selectedIndustry.name}
                </strong>
              </div>


              <div>
                <span>
                  Modules
                </span>

                <strong>
                  {selectedIndustry.modules}
                </strong>
              </div>


              <div>
                <span>
                  Companies
                </span>

                <strong>
                  {selectedIndustry.companies}
                </strong>
              </div>


              <div>
                <span>
                  Status
                </span>

                <strong>
                  {selectedIndustry.status}
                </strong>
              </div>

            </div>


            <div className="industry-preview-actions">

              <button
                type="button"
                className="industry-preview-secondary"
                onClick={() =>
                  setSelectedIndustry(null)
                }
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


      {/* ==================================================
          EDIT FORM
      ================================================== */}

      {editingIndustry && (

        <IndustryForm
          industry={editingIndustry}
          onClose={() =>
            setEditingIndustry(null)
          }
          onSave={handleUpdate}
        />

      )}


      {/* ==================================================
          DELETE MODAL
      ================================================== */}

      {deletingIndustry && (

        <div className="industry-modal-overlay">

          <div className="industry-delete-modal">

            <div className="industry-delete-icon">
              !
            </div>

            <span className="industry-preview-label">
              DELETE INDUSTRY
            </span>

            <h3>
              Delete {deletingIndustry.name}?
            </h3>

            <p>
              This frontend action will remove
              the industry from the current list.
            </p>


            <div className="industry-preview-actions">

              <button
                type="button"
                className="industry-preview-secondary"
                onClick={() =>
                  setDeletingIndustry(null)
                }
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
