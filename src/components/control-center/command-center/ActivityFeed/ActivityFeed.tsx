import styles from "./ActivityFeed.module.css";

const activities = [
  {
    title: "New company workspace created",
    time: "2 minutes ago",
  },
  {
    title: "Subscription upgraded to enterprise plan",
    time: "18 minutes ago",
  },
  {
    title: "Security audit completed successfully",
    time: "1 hour ago",
  },
];

export default function ActivityFeed() {
  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <h2>Recent Activity</h2>
        <span>Platform Timeline</span>
      </div>

      <div className={styles.timeline}>
        {activities.map((activity) => (
          <div key={activity.title} className={styles.item}>
            <h3>{activity.title}</h3>
            <p>{activity.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
