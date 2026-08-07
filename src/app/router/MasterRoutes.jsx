import { Routes, Route, Navigate } from "react-router-dom";

import MasterLayout from "../../master/layouts/MasterLayout";

import MasterLogin from "../../master/pages/MasterLogin/MasterLogin";

import ControlCenter from "../../master/pages/ControlCenter/ControlCenter";
import Companies from "../../master/pages/Companies/Companies";
import Plans from "../../master/pages/Plans/Plans";
import Industries from "../../master/pages/Industries/Industries";
import Modules from "../../master/pages/Modules/Modules";

function MasterAuthGuard({ children }) {
  const authenticated =
    localStorage.getItem("briqona_master_auth") === "true";

  if (!authenticated) {
    return <Navigate to="/master/login" replace />;
  }

  return children;
}

export default function MasterRoutes() {
  return (
    <Routes>

      {/* ==============================
          MASTER LOGIN
      ============================== */}

      <Route
        path="login"
        element={<MasterLogin />}
      />

      {/* ==============================
          PROTECTED MASTER CONTROL CENTER
      ============================== */}

      <Route
        element={
          <MasterAuthGuard>
            <MasterLayout />
          </MasterAuthGuard>
        }
      >

        <Route
          index
          element={
            navigate
            ("/master/control-center", {
             replace: true,
               });

        <Route
          path="control-center"
          element={<ControlCenter />}
        />

        <Route
          path="companies"
          element={<Companies />}
        />

        <Route
          path="plans"
          element={<Plans />}
        />

        <Route
          path="industries"
          element={<Industries />}
        />

        <Route
          path="modules"
          element={<Modules />}
        />

        {/* Future Pages */}

        <Route
          path="users"
          element={<h2>Users</h2>}
        />

        <Route
          path="billing"
          element={<h2>Billing</h2>}
        />

        <Route
          path="reports"
          element={<h2>Reports</h2>}
        />

        <Route
          path="ai"
          element={<h2>AI Center</h2>}
        />

        <Route
          path="settings"
          element={<h2>Settings</h2>}
        />

      </Route>

      {/* Unknown master route */}

      <Route
        path="*"
        element={
          <Navigate
            to="login"
            replace
          />
        }
      />

    </Routes>
  );
}
