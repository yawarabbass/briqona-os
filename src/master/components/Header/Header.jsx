/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Master Header
|--------------------------------------------------------------------------
*/

import "./Header.css";

export default function Header() {
  return (
    <header className="master-header">

      <div className="master-header-left">
        <h1 className="master-page-title">
          Dashboard
        </h1>
      </div>

      <div className="master-header-center">

      </div>

      <div className="master-header-right">

        <button className="master-header-btn">
          Notifications
        </button>

        <button className="master-header-btn">
          Profile
        </button>

      </div>

    </header>
  );
}
