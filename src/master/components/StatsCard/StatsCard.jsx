/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Statistics Card
|--------------------------------------------------------------------------
*/

import "./StatsCard.css";

export default function StatsCard({
  title,
  value,
  description,
}) {
  return (
    <div className="stats-card">

      <h4 className="stats-card-title">
        {title}
      </h4>

      <h2 className="stats-card-value">
        {value}
      </h2>

      <p className="stats-card-description">
        {description}
      </p>

    </div>
  );
}
