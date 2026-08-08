import "./PlanSearch.css";

export default function PlanSearch() {
  return (
    <div className="plan-search">
      <input
        type="text"
        className="plan-search-input"
        placeholder="Search plans..."
        aria-label="Search plans"
      />

      <button
        type="button"
        className="plan-search-button"
      >
        Search
      </button>
    </div>
  );
}
