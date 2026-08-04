import "./AppShell.css";

export default function AppShell({
  sidebar,
  header,
  children,
  footer,
}) {
  return (
    <div className="app-shell">

      <aside className="app-shell-sidebar">
        {sidebar}
      </aside>

      <div className="app-shell-main">

        <header className="app-shell-header">
          {header}
        </header>

        <main className="app-shell-content">
          {children}
        </main>

        <footer className="app-shell-footer">
          {footer}
        </footer>

      </div>

    </div>
  );
}
