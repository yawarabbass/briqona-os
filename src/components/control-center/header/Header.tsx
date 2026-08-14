import styles from "./Header.module.css";

export default function Header({
  onMenuClick,
}: {
  onMenuClick?: () => void;
}) {
  return (
    <header className={styles.header}>

      <button
        className={styles.menuButton}
        onClick={onMenuClick}
      >
        ☰
      </button>

      <strong>BRIQONA OS</strong>

      <span>
        Control Center
      </span>

    </header>
  );
}
