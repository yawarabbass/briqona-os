import { Routes, Route, Navigate } from "react-router-dom";
 
import WorkspaceLayout from "../../workspace/layouts/WorkspaceLayout";

export default function WorkspaceRoutes() {
  return (
    <WorkspaceLayout>
      <Routes>

        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<h2>Workspace Dashboard</h2>} />
        <Route path="crm" element={<h2>CRM</h2>} />
        <Route path="hr" element={<h2>HR</h2>} />
        <Route path="finance" element={<h2>Finance</h2>} />
        <Route path="inventory" element={<h2>Inventory</h2>} />
        <Route path="pos" element={<h2>POS</h2>} />
        <Route path="school" element={<h2>School</h2>} />
        <Route path="hospital" element={<h2>Hospital</h2>} />
        <Route path="restaurant" element={<h2>Restaurant</h2>} />
        <Route path="reports" element={<h2>Reports</h2>} />
        <Route path="settings" element={<h2>Settings</h2>} />

      </Routes>
    </WorkspaceLayout>
  );
                                            }
