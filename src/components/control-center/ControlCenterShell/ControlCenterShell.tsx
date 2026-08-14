"use client";

import { ReactNode, useState } from "react";
import styles from "./ControlCenterShell.module.css";

export default function ControlCenterShell({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.shell}>

      <aside className={`${styles.sidebar} ${open ? styles.show : ""}`}>
        <div className={styles.logo}>
          <strong>⬡ BRIQONA OS</strong>
          <span>Control Center</span>
        </div>

        <nav>
          <p>Overview</p>
          <p>User & Access</p>
          <p>Workspace</p>
          <p>Modules & Features</p>
          <p>Support & System</p>
        </nav>
      </aside>

      <div className={styles.main}>

        <header className={styles.header}>
          <button
            className={styles.menu}
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <strong>Control Center</strong>

          <div className={styles.user}>
            YA
          </div>
        </header>

        <main className={styles.content}>
          {children}
        </main>

      </div>

    </div>
  );
}
