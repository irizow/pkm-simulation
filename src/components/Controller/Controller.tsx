import styles from "./controller.module.css";
import { createBind } from "./createBind";

export default function Controller({ inputHandler }: { inputHandler: any }) {
  return (
    <div className={`${styles.controller}`}>
      <button
        className={`${styles.arrow} ${styles.left}`}
        {...createBind("left", inputHandler)}
      ></button>
      <button
        className={`${styles.arrow} ${styles.up}`}
        {...createBind("up", inputHandler)}
      ></button>
      <button
        className={`${styles.arrow} ${styles.right}`}
        {...createBind("right", inputHandler)}
      ></button>
      <button
        className={`${styles.arrow} ${styles.down}`}
        {...createBind("down", inputHandler)}
      ></button>
    </div>
  );
}
