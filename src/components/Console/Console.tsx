import type React from "react";
import styles from "./console.module.css";
import Controller from "../Controller/Controller";
import type { InputHandler } from "../../engine/InputHandler";
import { createBind } from "../Controller/createBind";

export default function Console({
  children,
  input,
}: {
  children: React.ReactNode;
  input: InputHandler;
}) {
  return (
    <div className={styles.console}>
      <div className={`${styles.handle} ${styles.left}`}>
        <Controller inputHandler={input} />
        <div className={`${styles.top_button}`}></div>
        <div className={styles.round_shape}></div>
      </div>
      <div className={styles.screen}>{children}</div>
      <div className={`${styles.handle} ${styles.right}`}>
        <div className={styles.buttonbox}>
          <button className={styles.a} {...createBind("interact", input)}>
            B
          </button>
          <button className={styles.b}>A</button>
        </div>
        <div className={`${styles.top_button}`}></div>
        <div className={styles.round_shape}></div>
      </div>
    </div>
  );
}
