import { Routes, Route, Navigate } from "react-router-dom";

import MasterLogin from "../../master/pages/MasterLogin/MasterLogin";

import MasterLayout from "../../master/layouts/MasterLayout";

import ControlCenter from "../../master/pages/ControlCenter/ControlCenter";
import Companies from "../../master/pages/Companies/Companies";
import Plans from "../../master/pages/Plans/Plans";
import Industries from "../../master/pages/Industries/Industries";
import Modules from "../../master/pages/Modules/Modules";

export default function MasterRoutes() {
  return (
    <Routes>

      {/* =========================================
          MASTER LOGIN
          URL: /master/login

          Login page has NO Header / Sidebar.
      ========================================= */}

      <Route
        path="login"
        element={<MasterLogin />}
      />


      {/* =========================================
          MASTER HOME
          URL: /master

          Always open Master Login first.
      ========================================= */}

      <Route
        index
        element={
          <Navigate
            to="login"
            replace
          />
        }
      />


      {/* =========================================
          CONTROL CENTER
          URL: /master/control-center
      ========================================= */}

      <Route
        path="control-center"
        element={
          <MasterLayout>
            <ControlCenter />
          </MasterLayout>
        }
      />


      {/* =========================================
          COMPANIES
          URL: /master/companies
      ========================================= */}

      <Route
        path="companies"
        element={
          <MasterLayout>
            <Companies />
          </MasterLayout>
        }
      />


      {/* =========================================
          PLANS
          URL: /master/plans
      ========================================= */}

      <Route
        path="plans"
        element={
          <MasterLayout>
            <Plans />
          </MasterLayout>
        }
      />


      {/* =========================================
          INDUSTRIES
          URL: /master/industries
      ========================================= */}

      <Route
        path="industries"
        element={
          <MasterLayout>
            <Industries />
          </MasterLayout>
        }
      />


      {/* =========================================
          MODULES
          URL: /master/modules
      ========================================= */}

      <Route
        path="modules"
        element={
          <MasterLayout>
            <Modules />
          </MasterLayout>
        }
      />


      {/* =========================================
          FUTURE MASTER PAGES
      ========================================= */}

      <Route
        path="users"
        element={
          <MasterLayout>
            <h2>Users</h2>
          </MasterLayout>
        }
      />

      <Route
        path="billing"
        element={
          <MasterLayout>
            <h2>Billing</h2>
          </MasterLayout>
        }
      />

      <Route
        path="reports"
        element={
          <MasterLayout>
            <h2>Reports</h2>
          </MasterLayout>
        }
      />

      <Route
        path="ai"
        element={
          <MasterLayout>
            <h2>AI Center</h2>
          </MasterLayout>
        }
      />

      <Route
        path="settings"
        element={
          <MasterLayout>
            <h2>Settings</h2>
          </MasterLayout>
        }
      />


      {/* =========================================
          UNKNOWN MASTER ROUTE
          Example:
          /master/abc

          → Login
      ========================================= */}

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
