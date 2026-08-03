export default function Sidebar() {
  return (
    <aside
      style={{
        width: "280px",
        minHeight: "100vh",
        background: "#111827",
        color: "#ffffff",
        padding: "24px",
        boxSizing: "border-box"
      }}
    >
      <h2>BRIQONA OS</h2>

      <hr />

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          marginTop: "24px"
        }}
      >
        <span>Dashboard</span>

        <span>Companies</span>

        <span>Plans</span>

        <span>Industries</span>

        <span>Modules</span>

        <span>Users</span>

        <span>Billing</span>

        <span>AI</span>

        <span>Reports</span>

        <span>Settings</span>
      </nav>
    </aside>
  );
}
