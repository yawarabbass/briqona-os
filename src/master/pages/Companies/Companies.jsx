import MasterLayout from "../../layouts/MasterLayout";
import "./Companies.css";

import CompanySearch from "../../components/CompanySearch/CompanySearch";
import CompanyFilters from "../../components/CompanyFilters/CompanyFilters";
import CompanyTable from "../../components/CompanyTable/CompanyTable";

export default function Companies() {
  return (
    <MasterLayout>

      <section className="master-companies">

        <div className="master-page-header">

          <h1>Companies</h1>

          <p>
            Manage all registered companies from one place.
          </p>

        </div>

        <div className="companies-toolbar">

          <CompanySearch />

          <CompanyFilters />

        </div>

        <CompanyTable />

      </section>

    </MasterLayout>
  );
}
