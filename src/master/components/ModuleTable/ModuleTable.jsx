import { useState } from "react";
import "./ModuleTable.css";

import modulesData from "../../data/modules";

import ModuleDetails from "../ModuleDetails/ModuleDetails";
import ModuleForm from "../ModuleForm/ModuleForm";

export default function ModuleTable() {
  const [moduleList, setModuleList] = useState(modulesData);

  const [selectedModule, setSelectedModule] = useState(null);
  const [editingModule, setEditingModule] = useState(null);
  const [deletingModule, setDeletingModule] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  /* ==========================================================
     VIEW
  ========================================================== */

  const handleView = (module) => {
    setSelectedModule(module);
  };

  /* ==========================================================
     EDIT
  ========================================================== */

  const handleEdit = (module) => {
    setEditingModule(module);
  };

  /* ==========================================================
     DELETE
  ========================================================== */

  const handleDelete = (module) => {
    setDeletingModule(module);
  };

  const confirmDelete = () => {
    if (!deletingModule) return;

    setModuleList((current) =>
      current.filter(
        (module) => module.id !== deletingModule.id
      )
    );

    setDeletingModule(null);
  };

  /* ==========================================================
     ADD
  ========================================================== */

  const handleAdd = (moduleData) => {
    const newModule = {
      ...moduleData,
      id: Date.now(),
    };

    setModuleList((current) => [
      newModule,
      ...current,
    ]);

    setShowAddForm(false);
  };

  /* ==========================================================
     UPDATE
  ========================================================== */

  const handleUpdate = (updatedData) => {
    setModuleList((current) =>
      current.map((module) =>
        module.id === editingModule.id
          ? {
              ...module,
              ...updatedData,
              id: editingModule.id,
            }
          : module
      )
    );

    setEditingModule(null);
  };

  return (
    <section className="module-table">

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="module-table-header">

        <div className="module-table-heading">

          <span className="module-table-label">
            MODULE MANAGEMENT
          </span>

          <h2>
            Application Modules
          </h2>

          <p>
            Manage modules, industries, versions and status.
          </p>

        </div>

        <button
          type="button"
          className="module-add-button"
          onClick={() => setShowAddForm(true)}
        >
          + Add Module
        </button>

      </div>

      {/* ======================================================
          RESULT
      ====================================================== */}

      <div className="module-table-result">

        Showing{" "}

        <strong>
          {moduleList.length}
        </strong>

        {" "}

        {moduleList.length === 1
          ? "module"
          : "modules"
        }

      </div>

      {/* ======================================================
          TABLE
      ====================================================== */}

      <div className="module-table-wrapper">

        <table className="module-table-grid">

          <thead>

            <tr>

              <th>
                Module
              </th>

              <th>
                Industry
              </th>

              <th>
                Version
              </th>

              <th>
                Status
              </th>

              <th className="module-actions-heading">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {moduleList.length > 0 ? (

              moduleList.map((module) => (

                <tr key={module.id}>

                  <td data-label="Module">

                    <strong className="module-name">
                      {module.name}
                    </strong>

                  </td>

                  <td data-label="Industry">
                    {module.industry}
                  </td>

                  <td data-label="Version">
                    <span className="module-version">
                      {module.version}
                    </span>
                  </td>

                  <td data-label="Status">

                    <span
                      className={`module-status ${
                        String(module.status || "")
                          .toLowerCase()
                      }`}
                    >
                      {module.status}
                    </span>

                  </td>

                  <td
                    data-label="Actions"
                    className="module-actions-cell"
                  >

                    <div className="module-actions">

                      <button
                        type="button"
                        className="module-action view"
                        onClick={() =>
                          handleView(module)
                        }
                      >
                        View
                      </button>

                      <button
                        type="button"
                        className="module-action edit"
                        onClick={() =>
                          handleEdit(module)
                        }
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="module-action delete"
                        onClick={() =>
                          handleDelete(module)
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
                  className="module-table-empty"
                >
                  <strong>
                    No modules found.
                  </strong>

                  <span>
                    Add a module to get started.
                  </span>

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* ======================================================
          VIEW DETAILS
      ====================================================== */}

      {selectedModule && (

        <div className="module-modal-backdrop">

          <div className="module-modal">

            <button
              type="button"
              className="module-modal-close"
              onClick={() =>
                setSelectedModule(null)
              }
              aria-label="Close"
            >
              ×
            </button>

            <ModuleDetails
              module={selectedModule}
            />

          </div>

        </div>

      )}

      {/* ======================================================
          ADD FORM
      ====================================================== */}

      {showAddForm && (

        <div className="module-modal-backdrop">

          <div className="module-modal">

            <button
              type="button"
              className="module-modal-close"
              onClick={() =>
                setShowAddForm(false)
              }
              aria-label="Close"
            >
              ×
            </button>

            <div className="module-modal-title">

              <span>
                MODULE MANAGEMENT
              </span>

              <h2>
                Add Module
              </h2>

              <p>
                Create a new application module.
              </p>

            </div>

            <ModuleForm
              onSubmit={handleAdd}
              onCancel={() =>
                setShowAddForm(false)
              }
            />

          </div>

        </div>

      )}

      {/* ======================================================
          EDIT FORM
      ====================================================== */}

      {editingModule && (

        <div className="module-modal-backdrop">

          <div className="module-modal">

            <button
              type="button"
              className="module-modal-close"
              onClick={() =>
                setEditingModule(null)
              }
              aria-label="Close"
            >
              ×
            </button>

            <div className="module-modal-title">

              <span>
                MODULE MANAGEMENT
              </span>

              <h2>
                Edit Module
              </h2>

              <p>
                Update module information.
              </p>

            </div>

            <ModuleForm
              module={editingModule}
              onSubmit={handleUpdate}
              onCancel={() =>
                setEditingModule(null)
              }
            />

          </div>

        </div>

      )}

      {/* ======================================================
          DELETE CONFIRMATION
      ====================================================== */}

      {deletingModule && (

        <div className="module-modal-backdrop">

          <div className="module-delete-modal">

            <div className="module-delete-icon">
              !
            </div>

            <h2>
              Delete Module?
            </h2>

            <p>
              Are you sure you want to delete{" "}
              <strong>
                {deletingModule.name}
              </strong>
              ? This action cannot be undone.
            </p>

            <div className="module-delete-actions">

              <button
                type="button"
                className="module-cancel-button"
                onClick={() =>
                  setDeletingModule(null)
                }
              >
                Cancel
              </button>

              <button
                type="button"
                className="module-confirm-delete"
                onClick={confirmDelete}
              >
                Delete Module
              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}
