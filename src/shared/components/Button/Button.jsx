import "./Button.css";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn btn-${variant} btn-${size}`}
    >
      {children}
    </button>
  );
}
