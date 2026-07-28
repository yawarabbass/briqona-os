import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="main-area">
        <Topbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
