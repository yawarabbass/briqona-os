import "./AppShell.css";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

export default function AppShell({
  children,
}) {

  return (

    <div className="app-shell">

      <Sidebar />

      <div className="app-shell-main">

        <Header />

        <main className="app-shell-content">

          {children}

        </main>

      </div>

    </div>

  );

}
