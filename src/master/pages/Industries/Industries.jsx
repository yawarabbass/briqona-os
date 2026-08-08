import { useState } from "react";
import "./Industries.css";

import industries from "../../data/industries";

import IndustrySearch from "../../components/IndustrySearch/IndustrySearch";
import IndustryFilters from "../../components/IndustryFilters/IndustryFilters";
import IndustryTable from "../../components/IndustryTable/IndustryTable";
import IndustryForm from "../../components/IndustryForm/IndustryForm";

export default function Industries() {

  const [industryList, setIndustryList] = useState(industries);

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [showAddForm, setShowAddForm] = useState(false);

  /* ======================================================
     ADD INDUSTRY
  ====================================================== */

  const handleAddIndustry = (newIndustry) => {

    const industry = {
      ...newIndustry,
      id: Date.now(),
    };

    setIndustryList((current) => [
      industry,
      ...current,
    ]);

    setShowAddForm(false);
  };

  /* ======================================================
     CLOSE FORM
  ====================================================== */

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  return (

    <section className="master-industries">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <div className="master-page-header">

        <div className="master-page-heading">

          <span className="master-page-label">
            INDUSTRY MANAGEMENT
          </span>

          <h1>
            Industries
          </h1>

          <p>
            Manage industries and their assigned modules.
          </p>

        </div>

        <button
          type="button"
          className="industry-add-button"
          onClick={() => setShowAddForm(true)}
        >
          + Add Industry
        </button>

      </div>


      {/* ==================================================
          TOOLBAR
      ================================================== */}

      <div className="industries-toolbar">

        <IndustrySearch
          value={searchTerm}
          onChange={setSearchTerm}
        />

        <IndustryFilters
          status={statusFilter}
          onStatusChange={setStatusFilter}
        />

      </div>


      {/* ==================================================
          INDUSTRY TABLE
      ================================================== */}

      <IndustryTable
        industries={industryList}
        searchTerm={searchTerm}
        statusFilter={statusFilter}
      />


      {/* ==================================================
          ADD INDUSTRY FORM
      ================================================== */}

      {showAddForm && (

        <IndustryForm
          onClose={handleCloseForm}
          onSave={handleAddIndustry}
        />

      )}

    </section>

  );
}
