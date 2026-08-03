/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Master Layout
|--------------------------------------------------------------------------
|
| Platform Owner Layout
| Used by all Master Panel pages.
|
*/

export default function MasterLayout({ children }) {
  return (
    <div className="master-layout">

      {/* Sidebar */}
      <aside className="master-sidebar">

      </aside>

      {/* Main Area */}
      <div className="master-main">

        {/* Header */}
        <header className="master-header">

        </header>

        {/* Page Content */}
        <main className="master-content">
          {children}
        </main>

      </div>

    </div>
  );
}
