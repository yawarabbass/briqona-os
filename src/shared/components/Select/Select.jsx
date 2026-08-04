import "./Select.css";

export default function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false,
}) {
  return (
    <div className="select-group">

      {label && (
        <label className="select-label">
          {label}
        </label>
      )}

      <select
        className="select-field"
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

    </div>
  );
}
