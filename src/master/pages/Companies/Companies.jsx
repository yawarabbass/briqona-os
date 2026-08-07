import "./Companies.css";
import CompanyStats from "../../components/CompanyStats/CompanyStats";
import CompanySearch from "../../components/CompanySearch/CompanySearch";
import CompanyFilters from "../../components/CompanyFilters/CompanyFilters";
import CompanyTable from "../../components/CompanyTable/CompanyTable";

export default function Companies() {

  return (

    <section className="master-companies">

      <div className="master-page-header">

        <div>

          <h1>Companies</h1>

          <p>
            Manage all registered companies from one place.
          </p>

        </div>

        <button className="primary-btn">
          + Add Company
        </button>

      </div>
       <CompanyStats />
      
      <div className="companies-toolbar">

        <CompanySearch />

        <CompanyFilters />

      </div>

      <CompanyTable />

    </section>

  );

}
