import "./IndustryDetails.css";

export default function IndustryDetails() {
  return (
    <section className="industry-details">

      <h2>Industry Details</h2>

      <div className="industry-details-grid">

        <div>
          <span>Industry</span>
          <strong>Technology</strong>
        </div>

        <div>
          <span>Total Modules</span>
          <strong>12</strong>
        </div>

        <div>
          <span>Total Companies</span>
          <strong>84</strong>
        </div>

        <div>
          <span>Status</span>
          <strong>Active</strong>
        </div>

      </div>

    </section>
  );
}
