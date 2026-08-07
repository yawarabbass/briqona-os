import MasterLayout from "../../layouts/MasterLayout";
import "./Companies.css";

import CompanyTable from "../../components/CompanyTable/CompanyTable";

export default function Companies() {

  return (

    <MasterLayout>

      <section className="master-companies">

        <div className="master-page-header">

          <div>

            <span className="master-page-eyebrow">
              MASTER PANEL
            </span>

            <h1>
              Companies
            </h1>

            <p>
              Manage all registered companies from one place.
            </p>

          </div>

        </div>

        <CompanyTable />

      </section>

    </MasterLayout>

  );

}
