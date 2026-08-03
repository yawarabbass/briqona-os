/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Master Layout
|--------------------------------------------------------------------------
|
| Platform Owner Layout
| Used by all Master Panel pages.
|
*/

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

export default function MasterLayout({ children }) {
  return (
    <div className="master-layout">

      <Sidebar />

      <div className="master-main">

        <Header />

        <main className="master-content">
          {children}
        </main>

      </div>

    </div>
  );
}
