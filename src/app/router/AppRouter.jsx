import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";
import MasterRoutes from "./MasterRoutes";
import WorkspaceRoutes from "./WorkspaceRoutes";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Website */}
        <Route path="/*" element={<PublicRoutes />} />

        {/* Master Dashboard */}
        <Route path="/master/*" element={<MasterRoutes />} />

        {/* Workspace Dashboard */}
        <Route path="/workspace/*" element={<WorkspaceRoutes />} />

      </Routes>
    </BrowserRouter>
  );
        }
