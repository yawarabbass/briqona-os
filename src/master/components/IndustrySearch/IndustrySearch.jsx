import "./IndustrySearch.css";

export default function IndustrySearch({
  value = "",
  onChange,
}) {
  return (
    <div className="industry-search">

      <input
        type="text"
        className="industry-search-input"
        placeholder="Search industries..."
        aria-label="Search industries"
        value={value}
        onChange={(event) =>
          onChange?.(event.target.value)
        }
      />

      <button
        type="button"
        className="industry-search-button"
        aria-label="Search industries"
      >
        Search
      </button>

    </div>
  );
}
