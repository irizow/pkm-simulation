import type React from "react";
import styles from "./console.module.css";

export default function Console({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.console}>
      <div className={`${styles.handle} ${styles.left}`}>
        <div className={`${styles.top_button}`}></div>
        <div className={styles.round_shape}></div>
      </div>
      <div className={styles.screen}>{children}</div>
      <div className={`${styles.handle} ${styles.right}`}>
        <div className={`${styles.top_button}`}></div>
        <div className={styles.round_shape}></div>
      </div>
    </div>
  );
}
