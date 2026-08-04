import "./RecentActivity.css";

const activities = [
  {
    id: 1,
    title: "New company registered",
    time: "2 minutes ago",
  },
  {
    id: 2,
    title: "New user created",
    time: "15 minutes ago",
  },
  {
    id: 3,
    title: "Subscription upgraded",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "System backup completed",
    time: "Today",
  },
];

export default function RecentActivity() {
  return (
    <section className="recent-activity">

      <h3>Recent Activity</h3>

      <div className="activity-list">

        {activities.map((activity) => (
          <div
            key={activity.id}
            className="activity-item"
          >
            <h4>{activity.title}</h4>

            <span>{activity.time}</span>
          </div>
        ))}

      </div>

    </section>
  );
}
