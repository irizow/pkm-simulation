import type React from "react";
import styles from "./console.module.css";

export default function Console({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.console}>
      <div className={styles.screen}>{children}</div>
    </div>
  );
}
