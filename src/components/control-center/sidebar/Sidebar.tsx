import styles from "./Sidebar.module.css";

export default function Sidebar({
  open = false,
  onClose,
}: {
  open?: boolean;
  onClose?: () => void;
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
    <>
      {open && (
        <div
          className={styles.overlay}
          onClick={onClose}
        />
      )}

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
    </>
  );
}
