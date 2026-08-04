import "./AppShell.css";
import { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

export default function AppShell({
  children,
}) {

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const toggleSidebar = () => {

    setSidebarOpen(
      !sidebarOpen
    );

  };

  const closeSidebar = () => {

    setSidebarOpen(false);

  };

  return (

    <div className="app-shell">

      <Sidebar

        sidebarOpen={sidebarOpen}

        closeSidebar={closeSidebar}

      />

      <div

        className={
          sidebarOpen
            ? "mobile-overlay active"
            : "mobile-overlay"
        }

        onClick={closeSidebar}

      />

      <div className="app-shell-main">

        <Header

          toggleSidebar={toggleSidebar}

        />

        <main className="app-shell-content">

          {children}

        </main>

      </div>

    </div>

  );

}
