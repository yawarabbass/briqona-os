import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const menu = [
    "Command Center",
    "Company Management",
    "Industry Management",
    "Subscription Management",
    "Module Management",
    "Access Control",
    "System Health",
    "Platform Configuration",
  ];

  return (
    <aside className={styles.sidebar}>
      {menu.map((item) => (
        <div key={item}>
          {item}
        </div>
      ))}
    </aside>
  );
}
