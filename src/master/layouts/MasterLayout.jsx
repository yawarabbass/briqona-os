cat > src/master/layouts/MasterLayout.jsx <<'EOF'
import { useState } from "react";

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import "../styles/master.css";

export default function MasterLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="master-layout">

      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
      />

      <div
        className={`master-overlay ${
          sidebarOpen ? "show" : ""
        }`}
        onClick={closeSidebar}
      />

      <div className="master-main">

        <Header
          openSidebar={openSidebar}
        />

        <main className="master-content">
          {children}
        </main>

      </div>

    </div>
  );
}
EOF
