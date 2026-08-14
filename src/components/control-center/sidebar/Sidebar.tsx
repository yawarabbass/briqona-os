import styles from "./Sidebar.module.css";

export default function Sidebar({
  open = false,
}: {
  open?: boolean;
}) {
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
    <aside
      className={`${styles.sidebar} ${
        open ? styles.open : ""
      }`}
    >
      {menu.map((item) => (
        <div key={item}>
          {item}
        </div>
      ))}
    </aside>
  );
}
