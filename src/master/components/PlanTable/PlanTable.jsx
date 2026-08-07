import { useMemo, useState } from "react";
import "./PlanTable.css";

import plans from "../../data/plans";

export default function PlanTable() {

  const [planList, setPlanList] = useState(plans);

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [editingPlan, setEditingPlan] = useState(null);

  const [deletePlan, setDeletePlan] = useState(null);

  const visiblePlans = useMemo(() => {
    return planList;
  }, [planList]);

  const handleView = (plan) => {
    setSelectedPlan(plan);
  };

  const handleEdit = (plan) => {
    setEditingPlan(plan);
  };

  const handleDeleteRequest = (plan) => {
    setDeletePlan(plan);
  };

  const handleDeleteConfirm = () => {

    if (!deletePlan) {
      return;
    }

    setPlanList((current) =>
      current.filter(
        (plan) => plan.id !== deletePlan.id
      )
    );

    setDeletePlan(null);

  };

  const handleCloseView = () => {
    setSelectedPlan(null);
  };

  const handleCloseEdit = () => {
    setEditingPlan(null);
  };

  return (

    <section className="plan-table">

      {/* ==========================
          HEADER
      ========================== */}

      <div className="plan-table-header">

        <div>

          <span className="plan-table-label">
            PLAN MANAGEMENT
          </span>

          <h2>
            Plans
          </h2>

          <p>
            Manage subscription plans and their limits.
          </p>

        </div>

      </div>


      {/* ==========================
          RESULT
      ========================== */}

      <div className="plan-table-result">

        Showing{" "}

        <strong>
          {visiblePlans.length}
        </strong>

        {" "}

        {visiblePlans.length === 1
          ? "plan"
          : "plans"}

      </div>


      {/* ==========================
          TABLE
      ========================== */}

      <div className="plan-table-wrapper">

        <table className="plan-table-grid">

          <thead>

            <tr>

              <th>
                Plan
              </th>

              <th>
                Price
              </th>

              <th>
                Billing
              </th>

              <th>
                Companies
              </th>

              <th>
                Users
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

            {visiblePlans.length > 0 ? (

              visiblePlans.map((plan) => (

                <tr key={plan.id}>

                  <td data-label="Plan">

                    <div className="plan-name-cell">

                      <strong>
                        {plan.name}
                      </strong>

                    </div>

                  </td>


                  <td data-label="Price">

                    <strong className="plan-price">
                      {plan.price}
                    </strong>

                  </td>


                  <td data-label="Billing">

                    {plan.billing}

                  </td>


                  <td data-label="Companies">

                    {plan.companies}

                  </td>


                  <td data-label="Users">

                    {plan.users}

                  </td>


                  <td data-label="Status">

                    <span
                      className={`plan-status ${
                        String(plan.status)
                          .toLowerCase()
                      }`}
                    >
                      {plan.status}
                    </span>

                  </td>


                  <td
                    data-label="Action"
                    className="plan-action-cell"
                  >

                    <div className="plan-table-actions">

                      <button
                        type="button"
                        className="plan-view-button"
                        onClick={() =>
                          handleView(plan)
                        }
                      >
                        View
                      </button>


                      <button
                        type="button"
                        className="plan-edit-button"
                        onClick={() =>
                          handleEdit(plan)
                        }
                      >
                        Edit
                      </button>


                      <button
                        type="button"
                        className="plan-delete-button"
                        onClick={() =>
                          handleDeleteRequest(plan)
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
                  colSpan="7"
                  className="plan-table-empty"
                >
                  No plans found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>


      {/* ==========================
          VIEW PANEL
      ========================== */}

      {selectedPlan && (

        <div className="plan-preview-overlay">

          <div className="plan-preview-modal">

            <div className="plan-preview-header">

              <div>

                <span className="plan-preview-label">
                  PLAN DETAILS
                </span>

                <h3>
                  {selectedPlan.name}
                </h3>

              </div>


              <button
                type="button"
                className="plan-preview-close"
                onClick={handleCloseView}
                aria-label="Close"
              >
                ×
              </button>

            </div>


            <div className="plan-preview-grid">

              <div>
                <span>
                  Price
                </span>

                <strong>
                  {selectedPlan.price}
                </strong>
              </div>


              <div>
                <span>
                  Billing
                </span>

                <strong>
                  {selectedPlan.billing}
                </strong>
              </div>


              <div>
                <span>
                  Companies
                </span>

                <strong>
                  {selectedPlan.companies}
                </strong>
              </div>


              <div>
                <span>
                  Users
                </span>

                <strong>
                  {selectedPlan.users}
                </strong>
              </div>


              <div>
                <span>
                  Status
                </span>

                <strong>
                  {selectedPlan.status}
                </strong>
              </div>

            </div>


            <div className="plan-preview-actions">

              <button
                type="button"
                className="plan-preview-secondary"
                onClick={handleCloseView}
              >
                Close
              </button>

              <button
                type="button"
                className="plan-preview-primary"
                onClick={() => {

                  setEditingPlan(selectedPlan);
                  setSelectedPlan(null);

                }}
              >
                Edit Plan
              </button>

            </div>

          </div>

        </div>

      )}


      {/* ==========================
          EDIT TEST PANEL
      ========================== */}

      {editingPlan && (

        <div className="plan-preview-overlay">

          <div className="plan-preview-modal">

            <div className="plan-preview-header">

              <div>

                <span className="plan-preview-label">
                  PLAN MANAGEMENT
                </span>

                <h3>
                  Edit {editingPlan.name}
                </h3>

              </div>


              <button
                type="button"
                className="plan-preview-close"
                onClick={handleCloseEdit}
                aria-label="Close"
              >
                ×
              </button>

            </div>


            <div className="plan-edit-message">

              <p>
                Plan editing form will be connected
                in the next step with
                <strong> PlanForm </strong>.
              </p>

              <span>
                The current plan is selected correctly
                and ready for the final form integration.
              </span>

            </div>


            <div className="plan-preview-actions">

              <button
                type="button"
                className="plan-preview-secondary"
                onClick={handleCloseEdit}
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}


      {/* ==========================
          DELETE CONFIRMATION
      ========================== */}

      {deletePlan && (

        <div className="plan-preview-overlay">

          <div className="plan-delete-modal">

            <div className="plan-delete-icon">
              !
            </div>

            <span className="plan-preview-label">
              DELETE PLAN
            </span>

            <h3>
              Delete {deletePlan.name}?
            </h3>

            <p>
              This frontend test action will remove
              the plan from the current list.
            </p>


            <div className="plan-preview-actions">

              <button
                type="button"
                className="plan-preview-secondary"
                onClick={() =>
                  setDeletePlan(null)
                }
              >
                Cancel
              </button>


              <button
                type="button"
                className="plan-delete-confirm"
                onClick={handleDeleteConfirm}
              >
                Delete Plan
              </button>

            </div>

          </div>

        </div>

      )}

    </section>

  );
}
