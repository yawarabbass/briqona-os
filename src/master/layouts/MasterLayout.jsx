import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

import "../styles/master.css";

export default function MasterLayout({ children }) {
  return (
    <div className="master-layout">

      <aside className="master-sidebar">
        <Sidebar />
      </aside>

      <div className="master-wrapper">

        <header className="master-header">
          <Header />
        </header>

        <main className="master-content">
          {children}
        </main>

      </div>

    </div>
  );
}
