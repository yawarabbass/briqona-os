import { useMemo, useState } from "react";
import "./Modules.css";

import modules from "../../data/modules";

import ModuleSearch from "../../components/ModuleSearch/ModuleSearch";
import ModuleFilters from "../../components/ModuleFilters/ModuleFilters";
import ModuleTable from "../../components/ModuleTable/ModuleTable";
import ModuleForm from "../../components/ModuleForm/ModuleForm";

export default function Modules() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All Industries");

  const [showForm, setShowForm] = useState(false);
  const [editingModule, setEditingModule] = useState(null);

  const filteredModules = useMemo(() => {
    const search = String(searchTerm || "")
      .trim()
      .toLowerCase();

    return modules.filter((module) => {
      const name = String(module.name || "").toLowerCase();
      const industry = String(module.industry || "").toLowerCase();
      const version = String(module.version || "").toLowerCase();
      const status = String(module.status || "").toLowerCase();

      const matchesSearch =
        !search ||
        name.includes(search) ||
        industry.includes(search) ||
        version.includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        status === String(statusFilter).toLowerCase();

      const matchesIndustry =
        industryFilter === "All Industries" ||
        industry === String(industryFilter).toLowerCase();

      return (
        matchesSearch &&
        matchesStatus &&
        matchesIndustry
      );
    });
  }, [searchTerm, statusFilter, industryFilter]);

  const handleAddModule = () => {
    setEditingModule(null);
    setShowForm(true);
  };

  const handleEditModule = (module) => {
    setEditingModule(module);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingModule(null);
  };

  return (
    <section className="master-modules">

      <div className="master-page-header">

        <div className="master-page-header-content">

          <div>
            <span className="master-page-eyebrow">
              MODULE MANAGEMENT
            </span>

            <h1>Modules</h1>

            <p>
              Manage all application modules and their versions.
            </p>
          </div>

          <button
            type="button"
            className="module-add-button"
            onClick={handleAddModule}
          >
            + Add Module
          </button>

        </div>

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
        modules={filteredModules}
        searchTerm={searchTerm}
        statusFilter={statusFilter}
        industryFilter={industryFilter}
        onEdit={handleEditModule}
      />

      {showForm && (
        <div className="module-form-overlay">

          <div className="module-form-modal">

            <div className="module-form-modal-header">

              <div>
                <span className="module-form-eyebrow">
                  {editingModule
                    ? "EDIT MODULE"
                    : "NEW MODULE"}
                </span>

                <h2>
                  {editingModule
                    ? "Edit Module"
                    : "Add Module"}
                </h2>
              </div>

              <button
                type="button"
                className="module-form-close"
                onClick={handleCloseForm}
                aria-label="Close module form"
              >
                ×
              </button>

            </div>

            <ModuleForm
              module={editingModule}
              onCancel={handleCloseForm}
            />

          </div>

        </div>
      )}

    </section>
  );
}
