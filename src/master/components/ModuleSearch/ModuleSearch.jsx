import "./ModuleSearch.css";
 
export default function ModuleSearch({
  value = "",
  onChange,
}) {
  return (
    <div className="module-search">

      <input
        type="text"
        className="module-search-input"
        placeholder="Search modules..."
        aria-label="Search modules"
        value={value}
        onChange={(event) =>
          onChange?.(event.target.value)
        }
      />

      <button
        type="button"
        className="module-search-button"
      >
        Search
      </button>

    </div>
  );
}
