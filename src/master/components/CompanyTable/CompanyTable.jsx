import { useEffect, useMemo, useState } from "react";
import "./CompanyTable.css";

import companies from "../../data/companies";
import CompanyPagination from "../CompanyPagination/CompanyPagination";
import CompanyDetails from "../CompanyDetails/CompanyDetails";
import CompanyForm from "../CompanyForm/CompanyForm";

const ITEMS_PER_PAGE = 5;

export default function CompanyTable() {

  /* ==========================================================
     COMPANY DATA
  ========================================================== */

  const [companyList, setCompanyList] = useState(companies);

  /* ==========================================================
     SEARCH & FILTERS
  ========================================================== */

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [plan, setPlan] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);

  /* ==========================================================
     MODALS
  ========================================================== */

  const [selectedCompany, setSelectedCompany] = useState(null);

  const [showAddForm, setShowAddForm] = useState(false);

  const [editingCompany, setEditingCompany] = useState(null);

  const [deletingCompany, setDeletingCompany] = useState(null);

  /* ==========================================================
     FILTERED COMPANIES
  ========================================================== */

  const filteredCompanies = useMemo(() => {

    const keyword = search.trim().toLowerCase();

    return companyList.filter((company) => {

      const matchesSearch =
        !keyword ||
        company.company?.toLowerCase().includes(keyword) ||
        company.owner?.toLowerCase().includes(keyword) ||
        company.email?.toLowerCase().includes(keyword) ||
        company.phone?.toLowerCase().includes(keyword);

      const matchesStatus =
        status === "all" ||
        company.status === status;

      const matchesPlan =
        plan === "all" ||
        company.plan === plan;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPlan
      );

    });

  }, [
    companyList,
    search,
    status,
    plan,
  ]);

  /* ==========================================================
     PAGINATION
  ========================================================== */

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredCompanies.length / ITEMS_PER_PAGE
    )
  );

  useEffect(() => {

    setCurrentPage(1);

  }, [
    search,
    status,
    plan,
  ]);

  useEffect(() => {

    if (currentPage > totalPages) {

      setCurrentPage(totalPages);

    }

  }, [
    currentPage,
    totalPages,
  ]);

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const visibleCompanies =
    filteredCompanies.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );

  /* ==========================================================
     VIEW COMPANY
  ========================================================== */

  const handleView = (company) => {

    setSelectedCompany(company);

  };

  /* ==========================================================
     CLOSE COMPANY DETAILS
  ========================================================== */

  const handleCloseDetails = () => {

    setSelectedCompany(null);

  };

  /* ==========================================================
     ADD COMPANY
  ========================================================== */

  const handleAddCompany = (company) => {

    const newCompany = {

      ...company,

      id: Date.now(),

    };

    setCompanyList((current) => [

      newCompany,

      ...current,

    ]);

    setCurrentPage(1);

    setShowAddForm(false);

  };

  /* ==========================================================
     EDIT COMPANY
  ========================================================== */

  const handleEditCompany = (company) => {

    setSelectedCompany(null);

    setEditingCompany(company);

  };

  /* ==========================================================
     UPDATE COMPANY
  ========================================================== */

  const handleUpdateCompany = (updatedCompany) => {

    setCompanyList((current) =>

      current.map((company) =>

        company.id === updatedCompany.id

          ? updatedCompany

          : company

      )

    );

    setSelectedCompany(null);

    setEditingCompany(null);

  };

  /* ==========================================================
     DELETE REQUEST
  ========================================================== */

  const handleDeleteRequest = (company) => {

    setSelectedCompany(null);

    setDeletingCompany(company);

  };

  /* ==========================================================
     DELETE COMPANY
  ========================================================== */

  const handleDeleteCompany = () => {

    if (!deletingCompany) {
      return;
    }

    setCompanyList((current) =>

      current.filter(
        (company) =>
          company.id !== deletingCompany.id
      )

    );

    setDeletingCompany(null);

    setCurrentPage(1);

  };

  /* ==========================================================
     CANCEL DELETE
  ========================================================== */

  const handleCancelDelete = () => {

    setDeletingCompany(null);

  };

  /* ==========================================================
     RESET FILTERS
  ========================================================== */

  const handleResetFilters = () => {

    setSearch("");

    setStatus("all");

    setPlan("all");

    setCurrentPage(1);

  };

  /* ==========================================================
     RESULT RANGE
  ========================================================== */

  const resultStart =
    filteredCompanies.length === 0
      ? 0
      : startIndex + 1;

  const resultEnd =
    Math.min(
      startIndex + ITEMS_PER_PAGE,
      filteredCompanies.length
    );

  /* ==========================================================
     RENDER
  ========================================================== */

  return (

    <section className="company-table">

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="company-table-header">

        <div>

          <span className="company-table-label">
            Companies
          </span>

          <h2>
            Company Directory
          </h2>

        </div>

        <button
          type="button"
          className="company-table-button"
          onClick={() => {

            setEditingCompany(null);

            setSelectedCompany(null);

            setShowAddForm(true);

          }}
        >
          + Add Company
        </button>

      </div>


      {/* ======================================================
          SEARCH & FILTERS
      ====================================================== */}

      <div className="company-table-controls">

        <div className="company-table-search">

          <input
            type="text"
            placeholder="Search company, owner, email or phone..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            aria-label="Search companies"
          />

        </div>


        <select
          value={status}
          onChange={(event) =>
            setStatus(event.target.value)
          }
          className="company-table-filter"
          aria-label="Filter by status"
        >

          <option value="all">
            All Status
          </option>

          <option value="Active">
            Active
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Suspended">
            Suspended
          </option>

        </select>


        <select
          value={plan}
          onChange={(event) =>
            setPlan(event.target.value)
          }
          className="company-table-filter"
          aria-label="Filter by plan"
        >

          <option value="all">
            All Plans
          </option>

          <option value="Starter">
            Starter
          </option>

          <option value="Business">
            Business
          </option>

          <option value="Professional">
            Professional
          </option>

          <option value="Enterprise">
            Enterprise
          </option>

        </select>


        {(search ||
          status !== "all" ||
          plan !== "all") && (

          <button
            type="button"
            className="company-reset-button"
            onClick={handleResetFilters}
          >
            Reset
          </button>

        )}

      </div>


      {/* ======================================================
          RESULT COUNT
      ====================================================== */}

      <div className="company-table-result">

        Showing{" "}

        {resultStart}

        {" - "}

        {resultEnd}

        {" "}

        of{" "}

        {filteredCompanies.length}

        {" "}companies

      </div>


      {/* ======================================================
          TABLE
      ====================================================== */}

      <div className="company-table-wrapper">

        <table className="company-table-grid">

          <thead>

            <tr>

              <th>
                Company
              </th>

              <th>
                Owner
              </th>

              <th>
                Plan
              </th>

              <th>
                Status
              </th>

              <th>
                Action
              </th>

            </tr>

          </thead>


          <tbody>

            {visibleCompanies.length > 0 ? (

              visibleCompanies.map((company) => (

                <tr
                  key={company.id}
                >

                  <td>
                    {company.company}
                  </td>

                  <td>
                    {company.owner}
                  </td>

                  <td>
                    {company.plan}
                  </td>

                  <td>

                    <span
                      className={`status-badge ${company.status?.toLowerCase()}`}
                    >
                      {company.status}
                    </span>

                  </td>

                  <td>

                    <div className="company-table-actions">

                      {/* VIEW */}

                      <button
                        type="button"
                        className="company-view-button"
                        onClick={() =>
                          handleView(company)
                        }
                      >
                        View
                      </button>


                      {/* EDIT */}

                      <button
                        type="button"
                        className="company-edit-button"
                        onClick={() =>
                          handleEditCompany(company)
                        }
                      >
                        Edit
                      </button>


                      {/* DELETE */}

                      <button
                        type="button"
                        className="company-delete-button"
                        onClick={() =>
                          handleDeleteRequest(company)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="5"
                  className="company-table-empty"
                >

                  <div className="company-empty-content">

                    <strong>
                      No companies found
                    </strong>

                    <span>
                      Try changing your search or filters.
                    </span>

                    {(search ||
                      status !== "all" ||
                      plan !== "all") && (

                      <button
                        type="button"
                        className="company-reset-empty"
                        onClick={handleResetFilters}
                      >
                        Reset Filters
                      </button>

                    )}

                  </div>

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>


      {/* ======================================================
          PAGINATION
      ====================================================== */}

      <CompanyPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />


      {/* ======================================================
          COMPANY DETAILS
      ====================================================== */}

      {selectedCompany && (

        <CompanyDetails
          company={selectedCompany}
          onClose={handleCloseDetails}
          onEdit={handleEditCompany}
          onDelete={handleDeleteRequest}
        />

      )}


      {/* ======================================================
          ADD COMPANY
      ====================================================== */}

      {showAddForm && (

        <CompanyForm
          onClose={() =>
            setShowAddForm(false)
          }
          onSave={handleAddCompany}
        />

      )}


      {/* ======================================================
          EDIT COMPANY
      ====================================================== */}

      {editingCompany && (

        <CompanyForm
          company={editingCompany}
          onClose={() =>
            setEditingCompany(null)
          }
          onSave={handleUpdateCompany}
        />

      )}


      {/* ======================================================
          DELETE CONFIRMATION
      ====================================================== */}

      {deletingCompany && (

        <div
          className="company-delete-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="company-delete-title"
        >

          <div className="company-delete-modal">

            <div className="company-delete-icon">
              !
            </div>

            <div className="company-delete-content">

              <span className="company-delete-label">
                COMPANY MANAGEMENT
              </span>

              <h3 id="company-delete-title">
                Delete Company?
              </h3>

              <p>

                Are you sure you want to remove{" "}

                <strong>
                  {deletingCompany.company}
                </strong>

                {" "}from the company directory?

              </p>

              <small>
                This frontend action is for testing.
                The API/database will be connected later.
              </small>

            </div>


            <div className="company-delete-actions">

              <button
                type="button"
                className="company-delete-cancel"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>

              <button
                type="button"
                className="company-delete-confirm"
                onClick={handleDeleteCompany}
              >
                Delete Company
              </button>

            </div>

          </div>

        </div>

      )}

    </section>

  );

}
