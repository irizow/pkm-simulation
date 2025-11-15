import type { Sprite } from "./Sprite";

export function startGameLoop(ctx: CanvasRenderingContext2D, sprite: Sprite) {
  function step() {
    ctx.clearRect(0, 0, 500, 500);

    sprite.draw(ctx);

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}
