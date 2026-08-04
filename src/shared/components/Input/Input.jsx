import "./Input.css";

export default function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  disabled = false,
  required = false,
}) {
  return (
    <div className="input-group">

      {label && (
        <label className="input-label">
          {label}
        </label>
      )}

      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
      />

    </div>
  );
}
