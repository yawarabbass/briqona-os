/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Master Control Center
|--------------------------------------------------------------------------
*/

import "./ControlCenter.css";

import ControlHero from "../../components/ControlHero/ControlHero";
import KpiCards from "../../components/KpiCards/KpiCards";
import DashboardCharts from "../../components/DashboardCharts/DashboardCharts";
import LatestCompanies from "../../components/LatestCompanies/LatestCompanies";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import QuickActions from "../../components/QuickActions/QuickActions";
import SystemStatus from "../../components/SystemStatus/SystemStatus";

export default function ControlCenter(){

return(

<div className="control-center">

<ControlHero />

<KpiCards />

<DashboardCharts />

<div className="cc-grid">

<div className="cc-left">

<LatestCompanies />

<RecentActivity />

</div>

<div className="cc-right">

<QuickActions />

<SystemStatus />

</div>

</div>

</div>

);

}
