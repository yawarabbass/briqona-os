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
     UPDATE INDUSTRY
  ====================================================== */

  const handleUpdateIndustry = (updatedIndustry) => {

    setIndustryList((current) =>
      current.map((industry) =>
        industry.id === updatedIndustry.id
          ? updatedIndustry
          : industry
      )
    );
  };


  /* ======================================================
     DELETE INDUSTRY
  ====================================================== */

  const handleDeleteIndustry = (industryId) => {

    setIndustryList((current) =>
      current.filter(
        (industry) =>
          industry.id !== industryId
      )
    );
  };


  return (

    <section className="master-industries">


      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <div className="master-page-header">

        <div className="master-page-heading">

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
          onClick={() =>
            setShowAddForm(true)
          }
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
          TABLE
      ================================================== */}

      <IndustryTable
        industries={industryList}
        searchTerm={searchTerm}
        statusFilter={statusFilter}
        onUpdate={handleUpdateIndustry}
        onDelete={handleDeleteIndustry}
      />


      {/* ==================================================
          ADD FORM
      ================================================== */}

      {showAddForm && (

        <IndustryForm
          onClose={() =>
            setShowAddForm(false)
          }
          onSave={handleAddIndustry}
        />

      )}

    </section>

  );
}
