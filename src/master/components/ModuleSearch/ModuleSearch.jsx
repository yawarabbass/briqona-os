import "./ModuleSearch.css";

export default function ModuleSearch() {
  return (
    <section className="module-search">

      <input
        type="text"
        className="module-search-input"
        placeholder="Search modules..."
      />

      <button className="module-search-button">
        Search
      </button>

    </section>
  );
}
