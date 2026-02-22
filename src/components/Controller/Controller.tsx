import styles from "./controller.module.css";

export default function Controller({ inputHandler }: { inputHandler: any }) {
  const createBind = (direction: "left" | "right" | "up" | "down") => {
    const handleDown = (e: React.SyntheticEvent) => {
      if (e.type === "touchstart") e.preventDefault();
      inputHandler[direction] = true;
    };

    const handleUp = (e: React.SyntheticEvent) => {
      if (e.type === "touchend") e.preventDefault();
      inputHandler[direction] = false;
    };

    return {
      onMouseDown: handleDown,
      onMouseUp: handleUp,
      onMouseLeave: handleUp,
      onTouchStart: handleDown,
      onTouchEnd: handleUp,
      style: { touchAction: "none" } as React.CSSProperties,
    };
  };
  return (
    <div className={`${styles.controller}`}>
      <button
        className={`${styles.arrow} ${styles.left}`}
        {...createBind("left")}
      ></button>
      <button
        className={`${styles.arrow} ${styles.up}`}
        {...createBind("up")}
      ></button>
      <button
        className={`${styles.arrow} ${styles.right}`}
        {...createBind("right")}
      ></button>
      <button
        className={`${styles.arrow} ${styles.down}`}
        {...createBind("down")}
      ></button>
    </div>
  );
}
