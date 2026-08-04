/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Master Dashboard
|--------------------------------------------------------------------------
*/

import MasterLayout from "../../layouts/MasterLayout";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <MasterLayout>

      <section className="master-dashboard">

        <h1 className="master-dashboard-title">
          Master Dashboard
        </h1>

        <p className="master-dashboard-subtitle">
          Welcome to the BRIQONA OS Master Panel.
        </p>

      </section>

    </MasterLayout>
  );
}
