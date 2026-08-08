import "./ModuleSearch.css";

export default function ModuleSearch({
  value,
  onChange,
}) {
  return (
    <div className="module-search">

      <input
        type="search"
        className="module-search-input"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder="Search modules..."
        aria-label="Search modules"
      />

    </div>
  );
}
