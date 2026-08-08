import { useMemo, useState } from "react";
import "./Modules.css";

import ModuleSearch from "../../components/ModuleSearch/ModuleSearch";
import ModuleFilters from "../../components/ModuleFilters/ModuleFilters";
import ModuleTable from "../../components/ModuleTable/ModuleTable";
import ModuleForm from "../../components/ModuleForm/ModuleForm";
import ModuleDetails from "../../components/ModuleDetails/ModuleDetails";

import initialModules from "../../data/modules";

export default function Modules() {
  const [modules, setModules] = useState(initialModules);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All Industries");

  const [showForm, setShowForm] = useState(false);
  const [editingModule, setEditingModule] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);

  const filteredModules = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return modules.filter((module) => {
      const matchesSearch =
        !searchValue ||
        module.name.toLowerCase().includes(searchValue) ||
        module.industry.toLowerCase().includes(searchValue) ||
        module.version.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" ||
        module.status === statusFilter;

      const matchesIndustry =
        industryFilter === "All Industries" ||
        module.industry === industryFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesIndustry
      );
    });
  }, [
    modules,
    search,
    statusFilter,
    industryFilter,
  ]);

  const handleAddModule = () => {
    setEditingModule(null);
    setSelectedModule(null);
    setShowForm(true);
  };

  const handleEdit = (module) => {
    setEditingModule(module);
    setSelectedModule(null);
    setShowForm(true);
  };

  const handleView = (module) => {
    setSelectedModule(module);
    setShowForm(false);
  };

  const handleDelete = (module) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${module.name}"?`
    );

    if (!confirmed) {
      return;
    }

    setModules((currentModules) =>
      currentModules.filter(
        (item) => item.id !== module.id
      )
    );

    if (selectedModule?.id === module.id) {
      setSelectedModule(null);
    }
  };

  const handleSave = (moduleData) => {
    if (editingModule) {
      setModules((currentModules) =>
        currentModules.map((module) =>
          module.id === editingModule.id
            ? {
                ...module,
                ...moduleData,
              }
            : module
        )
      );
    } else {
      const newModule = {
        id: Date.now(),
        ...moduleData,
      };

      setModules((currentModules) => [
        ...currentModules,
        newModule,
      ]);
    }

    setShowForm(false);
    setEditingModule(null);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingModule(null);
  };

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setIndustryFilter("All Industries");
  };

  return (
    <section className="master-modules">

      <div className="master-page-header">
        <div>
          <span className="page-eyebrow">
            MODULE MANAGEMENT
          </span>

          <h1>Modules</h1>

          <p>
            Manage all application modules and their
            versions.
          </p>
        </div>

        <button
          type="button"
          className="modules-add-button"
          onClick={handleAddModule}
        >
          + Add Module
        </button>
      </div>

      <div className="modules-toolbar">

        <ModuleSearch
          value={search}
          onChange={setSearch}
        />

        <ModuleFilters
          status={statusFilter}
          industry={industryFilter}
          onStatusChange={setStatusFilter}
          onIndustryChange={setIndustryFilter}
        />

      </div>

      {(search ||
        statusFilter !== "All" ||
        industryFilter !== "All Industries") && (
        <div className="modules-filter-summary">

          <span>
            Showing {filteredModules.length} of{" "}
            {modules.length} modules
          </span>

          <button
            type="button"
            onClick={clearFilters}
          >
            Clear filters
          </button>

        </div>
      )}

      {showForm && (
        <ModuleForm
          module={editingModule}
          onSubmit={handleSave}
          onCancel={handleCancelForm}
        />
      )}

      {selectedModule && (
        <ModuleDetails
          module={selectedModule}
          onClose={() => setSelectedModule(null)}
        />
      )}

      <ModuleTable
        modules={filteredModules}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </section>
  );
}
