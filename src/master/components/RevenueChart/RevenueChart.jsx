/*  
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Revenue Chart
|--------------------------------------------------------------------------
| Enterprise Revenue Widget
|--------------------------------------------------------------------------
*/

import { DollarSign } from "lucide-react";

import "./RevenueChart.css";

export default function RevenueChart() {

  return (

    <section className="revenue-chart">

      <div className="revenue-header">

        <div>

          <span className="revenue-label">

            Revenue Analytics

          </span>

          <h3>

            Revenue Overview

          </h3>

        </div>

        <div className="revenue-icon">

          <DollarSign size={22} />

        </div>

      </div>

      <div className="revenue-body">

        <div className="revenue-bar">

          <span>January</span>

          <div className="bar">

            <div style={{width:"68%"}}></div>

          </div>

        </div>

        <div className="revenue-bar">

          <span>February</span>

          <div className="bar">

            <div style={{width:"84%"}}></div>

          </div>

        </div>

        <div className="revenue-bar">

          <span>March</span>

          <div className="bar">

            <div style={{width:"92%"}}></div>

          </div>

        </div>

        <div className="revenue-bar">

          <span>April</span>

          <div className="bar">

            <div style={{width:"76%"}}></div>

          </div>

        </div>

      </div>

      <div className="revenue-footer">

        <strong>$84,200</strong>

        <span>Monthly Revenue</span>

      </div>

    </section>

  );

}
