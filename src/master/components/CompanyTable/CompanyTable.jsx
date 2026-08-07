import { useEffect, useMemo, useState } from "react";
import "./CompanyTable.css";

import companies from "../../data/companies";
import CompanyPagination from "../CompanyPagination/CompanyPagination";
import CompanyDetails from "../CompanyDetails/CompanyDetails";
import CompanyForm from "../CompanyForm/CompanyForm";

const ITEMS_PER_PAGE = 5;

export default function CompanyTable() {

  const [companyList, setCompanyList] = useState(companies);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [plan, setPlan] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);
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

  }, [companyList, search, status, plan]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredCompanies.length / ITEMS_PER_PAGE
    )
  );

  useEffect(() => {

    setCurrentPage(1);

  }, [search, status, plan]);

  useEffect(() => {

    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }

  }, [currentPage, totalPages]);

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const visibleCompanies =
    filteredCompanies.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );

  const handleView = (company) => {

    setSelectedCompany(company);

};
  
const handleEditCompany = (company) => {
  setEditingCompany(company);
};

  
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

  return (

    <section className="company-table">

      {/* ==========================
          Header
      ========================== */}

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
          onClick={() => setShowAddForm(true)}
        >
          + Add Company
        </button>

      </div>


      {/* ==========================
          Search & Filters
      ========================== */}

      <div className="company-table-controls">

        <div className="company-table-search">

          <input
            type="text"
            placeholder="Search company, owner, email or phone..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

        </div>


        <select
          value={status}
          onChange={(event) =>
            setStatus(event.target.value)
          }
          className="company-table-filter"
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

      </div>


      {/* ==========================
          Result Count
      ========================== */}

      <div className="company-table-result">

        Showing{" "}

        {filteredCompanies.length === 0
          ? 0
          : startIndex + 1}

        {" - "}

        {Math.min(
          startIndex + ITEMS_PER_PAGE,
          filteredCompanies.length
        )}

        {" "}

        of {filteredCompanies.length} companies

      </div>


      {/* ==========================
          Table
      ========================== */}

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
                      className={`status-badge ${company.status.toLowerCase()}`}
                    >
                      {company.status}
                    </span>

                  </td>

                  <td>

                    <button
                      type="button"
                      className="company-view-button"
                      onClick={() =>
                        handleView(company)
                      }
                    >
                      View
                    </button>
 <button
  type="button"
  className="company-edit-button"
  onClick={() =>
    handleEditCompany(company)
  }
>
  Edit
</button>





                    
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="5"
                  className="company-table-empty"
                >
                  No companies found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>


      {/* ==========================
          Pagination
      ========================== */}

      <CompanyPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />


      {/* ==========================
          Company Details
      ========================== */}

      {selectedCompany && (

        <CompanyDetails
          company={selectedCompany}
        />

      )}


      {/* ==========================
          Add Company Form
      ========================== */}

      {showAddForm && (

        <CompanyForm
          onClose={() =>
            setShowAddForm(false)
          }
          onSave={handleAddCompany}
        />

      )}

    </section>


{editingCompany && (

  <CompanyForm
    company={editingCompany}
    onClose={() =>
      setEditingCompany(null)
    }
    onSave={(updatedCompany) => {

      setCompanyList((current) =>
        current.map((company) =>
          company.id === updatedCompany.id
            ? updatedCompany
            : company
        )
      );

      setSelectedCompany(null);
      setEditingCompany(null);

    }}
  />

)}
    
  );

}
