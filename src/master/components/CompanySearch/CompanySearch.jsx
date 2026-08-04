import "./CompanySearch.css";

export default function CompanySearch() {
  return (
    <section className="company-search">

      <input
        type="text"
        placeholder="Search company, owner or email..."
        className="company-search-input"
      />

      <button
        className="company-search-button"
      >
        Search
      </button>

    </section>
  );
}
