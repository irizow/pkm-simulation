import type { InputHandler } from "../../engine/InputHandler";

export const createBind = (
  action: "left" | "right" | "up" | "down" | "interact",
  inputHandler: InputHandler,
) => {
  const handleDown = (e: React.SyntheticEvent) => {
    if (e.type === "touchstart") e.preventDefault();
    inputHandler[action] = true;
  };

  const handleUp = (e: React.SyntheticEvent) => {
    if (e.type === "touchend") e.preventDefault();
    inputHandler[action] = false;
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
