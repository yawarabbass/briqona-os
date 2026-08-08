import "./PlanDetails.css";

export default function PlanDetails() {
  return (
    <section className="plan-details">

      <div className="plan-details-header">
        <span className="plan-details-label">
          PLAN INFORMATION
        </span>

        <h2>
          Plan Details
        </h2>

        <p>
          View subscription plan configuration and limits.
        </p>
      </div>

      <div className="plan-details-grid">

        <div>
          <span>Plan Name</span>
          <strong>Enterprise</strong>
        </div>

        <div>
          <span>Price</span>
          <strong>Custom</strong>
        </div>

        <div>
          <span>Billing</span>
          <strong>Yearly</strong>
        </div>

        <div>
          <span>Companies</span>
          <strong>Unlimited</strong>
        </div>

        <div>
          <span>Users</span>
          <strong>Unlimited</strong>
        </div>

        <div>
          <span>Status</span>
          <strong>Active</strong>
        </div>

      </div>

    </section>
  );
}
