import MasterLayout from "../../layouts/MasterLayout";
import "./Modules.css";

import ModuleSearch from "../../components/ModuleSearch/ModuleSearch";
import ModuleFilters from "../../components/ModuleFilters/ModuleFilters";
import ModuleTable from "../../components/ModuleTable/ModuleTable";

export default function Modules() {
  return (
    <MasterLayout>

      <section className="master-modules">

        <div className="master-page-header">

          <h1>Modules</h1>

          <p>
            Manage all application modules and their versions.
          </p>

        </div>

        <div className="modules-toolbar">

          <ModuleSearch />

          <ModuleFilters />

        </div>

        <ModuleTable />

      </section>

    </MasterLayout>
  );
}
