
import "./Industries.css";

import IndustrySearch from "../../components/IndustrySearch/IndustrySearch";
import IndustryFilters from "../../components/IndustryFilters/IndustryFilters";
import IndustryTable from "../../components/IndustryTable/IndustryTable";

export default function Industries() {
  return (
    

      <section className="master-industries">

        <div className="master-page-header">

          <h1>Industries</h1>

          <p>
            Manage industries and their assigned modules.
          </p>

        </div>

        <div className="industries-toolbar">

          <IndustrySearch />

          <IndustryFilters />

        </div>

        <IndustryTable />

      </section>

    
  );
}
