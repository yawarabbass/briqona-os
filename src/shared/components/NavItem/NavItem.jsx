/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Navigation Item
|--------------------------------------------------------------------------
*/

export default function NavItem({
  icon,
  title,
  active = false,
  onClick,
}) {
  return (
    <button
      className={`nav-item ${active ? "active" : ""}`}
      onClick={onClick}
      type="button"
    >
      <span className="nav-item-icon">
        {icon}
      </span>

      <span className="nav-item-title">
        {title}
      </span>
    </button>
  );
}
