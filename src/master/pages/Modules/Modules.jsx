import { useState } from "react";
import "./Modules.css";

import ModuleSearch from "../../components/ModuleSearch/ModuleSearch";
import ModuleFilters from "../../components/ModuleFilters/ModuleFilters";
import ModuleTable from "../../components/ModuleTable/ModuleTable";
import ModuleForm from "../../components/ModuleForm/ModuleForm";
import ModuleDetails from "../../components/ModuleDetails/ModuleDetails";

export default function Modules() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All Industries");

  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const [editingModule, setEditingModule] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);

  const handleAdd = () => {
    setEditingModule(null);
    setShowDetails(false);
    setShowForm(true);
  };

  const handleView = (module) => {
    setSelectedModule(module);
    setShowForm(false);
    setShowDetails(true);
  };

  const handleEdit = (module) => {
    setEditingModule(module);
    setShowDetails(false);
    setShowForm(true);
  };

  const handleDelete = (module) => {
    const confirmed = window.confirm(
      `Delete "${module.name}" module?`
    );

    if (!confirmed) return;

    // Backend/API delete yahan baad mein connect hoga.
    console.log("Delete module:", module);
  };

  const handleClosePanel = () => {
    setShowForm(false);
    setShowDetails(false);
    setEditingModule(null);
    setSelectedModule(null);
  };

  return (
    <section className="master-modules">

      <div className="master-page-header">

        <div>
          <h1>Modules</h1>

          <p>
            Manage all application modules and their versions.
          </p>
        </div>

        <button
          type="button"
          className="master-page-primary-button"
          onClick={handleAdd}
        >
          + Add Module
        </button>

      </div>

      <div className="modules-toolbar">

        <ModuleSearch
          value={searchTerm}
          onChange={setSearchTerm}
        />

        <ModuleFilters
          status={statusFilter}
          industry={industryFilter}
          onStatusChange={setStatusFilter}
          onIndustryChange={setIndustryFilter}
        />

      </div>

      <ModuleTable
        searchTerm={searchTerm}
        statusFilter={statusFilter}
        industryFilter={industryFilter}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {showForm && (
        <div className="module-panel">

          <div className="module-panel-header">

            <div>
              <span className="module-panel-label">
                MODULE MANAGEMENT
              </span>

              <h2>
                {editingModule
                  ? "Edit Module"
                  : "Add Module"}
              </h2>
            </div>

            <button
              type="button"
              className="module-panel-close"
              onClick={handleClosePanel}
              aria-label="Close"
            >
              ×
            </button>

          </div>

          <ModuleForm
            module={editingModule}
            onClose={handleClosePanel}
          />

        </div>
      )}

      {showDetails && selectedModule && (
        <div className="module-panel">

          <div className="module-panel-header">

            <div>
              <span className="module-panel-label">
                MODULE DETAILS
              </span>

              <h2>
                View Module
              </h2>
            </div>

            <button
              type="button"
              className="module-panel-close"
              onClick={handleClosePanel}
              aria-label="Close"
            >
              ×
            </button>

          </div>

          <ModuleDetails
            module={selectedModule}
          />

        </div>
      )}

    </section>
  );
}
