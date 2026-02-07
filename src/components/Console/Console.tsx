import type React from "react";
import styles from "./console.module.css";

export default function Console({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.console}>
      <div className={`${styles.handle} ${styles.left}`}>
        <div className={`${styles.controller}`}>
          <button className={`${styles.arrow} ${styles.left}`}></button>
          <button className={`${styles.arrow} ${styles.up}`}></button>
          <button className={`${styles.arrow} ${styles.right}`}></button>
          <button className={`${styles.arrow} ${styles.down}`}></button>
        </div>
        <div className={`${styles.top_button}`}></div>
        <div className={styles.round_shape}></div>
      </div>
      <div className={styles.screen}>{children}</div>
      <div className={`${styles.handle} ${styles.right}`}>
        <div className={styles.buttonbox}>
          <button className={styles.a}></button>
          <button className={styles.b}></button>
        </div>
        <div className={`${styles.top_button}`}></div>
        <div className={styles.round_shape}></div>
      </div>
    </div>
  );
}
