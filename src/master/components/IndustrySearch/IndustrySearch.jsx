import "./IndustrySearch.css";

export default function IndustrySearch() {
  return (
    <section className="industry-search">

      <input
        type="text"
        className="industry-search-input"
        placeholder="Search industries..."
      />

      <button className="industry-search-button">
        Search
      </button>

    </section>
  );
}
