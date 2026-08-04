import "./QuickActions.css";

const actions = [
  "Add Company",
  "Create User",
  "Create Plan",
  "Generate Report",
  "Open AI Center",
  "System Settings",
];

export default function QuickActions() {
  return (
    <section className="quick-actions">

      <h3>Quick Actions</h3>

      <div className="quick-actions-grid">

        {actions.map((action) => (
          <button
            key={action}
            className="quick-action-btn"
          >
            {action}
          </button>
        ))}

      </div>

    </section>
  );
}
