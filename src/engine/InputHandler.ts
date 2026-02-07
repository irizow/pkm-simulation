export class InputHandler {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;

  constructor() {
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.left = true;
      if (e.key === "ArrowRight") this.right = true;
      if (e.key === "ArrowUp") this.up = true;
      if (e.key === "ArrowDown") this.down = true;
    });

    window.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft") this.left = false;
      if (e.key === "ArrowRight") this.right = false;
      if (e.key === "ArrowUp") this.up = false;
      if (e.key === "ArrowDown") this.down = false;
    });
  }

  bindButtons(
    leftBtn: HTMLElement,
    rightBtn: HTMLElement,
    upBtn: HTMLElement,
    downBtn: HTMLElement,
  ) {
    const setupButton = (
      btn: HTMLElement,
      action: "left" | "right" | "up" | "down",
    ) => {
      btn.addEventListener("mousedown", () => {
        this[action] = true;
      });

      btn.addEventListener("mouseup", () => {
        this[action] = false;
      });

      btn.addEventListener("mouseleave", () => {
        this[action] = false;
      });

      btn.addEventListener(
        "touchstart",
        (e) => {
          e.preventDefault();
          this[action] = true;
        },
        { passive: false },
      );

      btn.addEventListener("touchend", (e) => {
        e.preventDefault();
        this[action] = false;
      });
    };

    setupButton(leftBtn, "left");
    setupButton(rightBtn, "right");
    setupButton(upBtn, "up");
    setupButton(downBtn, "down");
  }
}
