import { useState } from "react";
import "./Modules.css";

import ModuleSearch from "../../components/ModuleSearch/ModuleSearch";
import ModuleFilters from "../../components/ModuleFilters/ModuleFilters";
import ModuleTable from "../../components/ModuleTable/ModuleTable";

export default function Modules() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All Industries");

  return (
    <section className="master-modules">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <div className="master-page-header">

        <div className="master-page-heading">

          <span className="master-page-label">
            MODULE MANAGEMENT
          </span>

          <h1>
            Modules
          </h1>

          <p>
            Manage all application modules and their versions.
          </p>

        </div>

      </div>


      {/* =====================================================
          TOOLBAR
      ===================================================== */}

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


      {/* =====================================================
          MODULE TABLE
      ===================================================== */}

      <ModuleTable
        searchTerm={searchTerm}
        statusFilter={statusFilter}
        industryFilter={industryFilter}
      />

    </section>
  );
}
