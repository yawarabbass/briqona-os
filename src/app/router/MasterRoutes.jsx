import { Routes, Route, Navigate } from "react-router-dom";

import MasterLayout from "../../master/layouts/MasterLayout";

import ControlCenter from "../../master/pages/ControlCenter/ControlCenter";
import Companies from "../../master/pages/Companies/Companies";
import Plans from "../../master/pages/Plans/Plans";
import Industries from "../../master/pages/Industries/Industries";
import Modules from "../../master/pages/Modules/Modules";

export default function MasterRoutes() {
  return (
    <MasterLayout>

      <Routes>

        {/* Master Home */}
        <Route
          index
          element={
            <Navigate
              to="control-center"
              replace
            />
          }
        />

        {/* Control Center */}
        <Route
          path="control-center"
          element={<ControlCenter />}
        />

        {/* Companies */}
        <Route
          path="companies"
          element={<Companies />}
        />

        {/* Plans */}
        <Route
          path="plans"
          element={<Plans />}
        />

        {/* Industries */}
        <Route
          path="industries"
          element={<Industries />}
        />

        {/* Modules */}
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

      </Routes>

    </MasterLayout>
  );
}
