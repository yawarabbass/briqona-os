import { useMemo } from "react";
import "./IndustryTable.css";

import industries from "../../data/industries";

export default function IndustryTable({
  searchTerm = "",
  statusFilter = "All",
}) {
  const visibleIndustries = useMemo(() => {
    const search = String(searchTerm || "")
      .trim()
      .toLowerCase();

    return industries.filter((industry) => {

      const matchesSearch =
        !search ||
        String(industry.name || "")
          .toLowerCase()
          .includes(search) ||
        String(industry.modules || "")
          .toLowerCase()
          .includes(search) ||
        String(industry.companies || "")
          .toLowerCase()
          .includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        String(industry.status || "").toLowerCase() ===
          String(statusFilter).toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const hasFilters =
    String(searchTerm || "").trim() !== "" ||
    statusFilter !== "All";

  return (
    <section className="industry-table">

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="industry-table-header">

        <div className="industry-table-heading">

          <span className="industry-table-label">
            INDUSTRY MANAGEMENT
          </span>

          <h2>
            Industries
          </h2>

          <p>
            Manage industries and their assigned modules.
          </p>

        </div>

      </div>


      {/* ======================================================
          RESULT
      ====================================================== */}

      <div className="industry-table-result">

        Showing{" "}

        <strong>
          {visibleIndustries.length}
        </strong>

        {" "}

        {visibleIndustries.length === 1
          ? "industry"
          : "industries"
        }

        {hasFilters && (
          <>
            {" "}
            <span>
              matching your filters
            </span>
          </>
        )}

      </div>


      {/* ======================================================
          TABLE
      ====================================================== */}

      <div className="industry-table-wrapper">

        <table className="industry-table-grid">

          <thead>

            <tr>

              <th>
                Industry
              </th>

              <th>
                Modules
              </th>

              <th>
                Companies
              </th>

              <th>
                Status
              </th>

            </tr>

          </thead>


          <tbody>

            {visibleIndustries.length > 0 ? (

              visibleIndustries.map((industry) => (

                <tr key={industry.id}>

                  <td data-label="Industry">

                    <strong className="industry-name">
                      {industry.name}
                    </strong>

                  </td>


                  <td data-label="Modules">
                    {industry.modules}
                  </td>


                  <td data-label="Companies">
                    {industry.companies}
                  </td>


                  <td data-label="Status">

                    <span
                      className={`industry-status ${
                        String(industry.status)
                          .toLowerCase()
                      }`}
                    >
                      {industry.status}
                    </span>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="4"
                  className="industry-table-empty"
                >
                  No industries found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </section>
  );
}
