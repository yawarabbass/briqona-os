import "./PlanSearch.css";

export default function PlanSearch() {
  return (
    <section className="plan-search">

      <input
        type="text"
        className="plan-search-input"
        placeholder="Search plans..."
      />

      <button className="plan-search-button">
        Search
      </button>

    </section>
  );
}
