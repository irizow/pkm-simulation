import { useEffect, useRef } from "react";
import { InputHandler } from "../engine/InputHandler";
import { Sprite } from "../engine/Sprite";
import { tileImages, tileMapTown, tiles } from "../engine/tiles";
import { drawMap } from "../utils/drawMap";
import { drawObjects } from "../utils/drawObjects";
import { townObjects } from "../engine/objects";

const maps: { [key: string]: number[][] } = {
  outside: tileMapTown,
};

const currentMap: number[][] = maps.outside;

export default function GameCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;

    const input = new InputHandler();

    const heroImage = new Image();
    heroImage.src = "/characters/hero.png";

    heroImage.onload = () => {
      const hero = new Sprite({ x: 200, y: 200, image: heroImage });
      function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawMap(ctx, currentMap, tileImages, 32);
        drawObjects(ctx, townObjects);
        hero.update(input, currentMap, tiles, 32, townObjects);
        hero.draw(ctx, 2);

        requestAnimationFrame(gameLoop);
      }

      gameLoop();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      style={{ border: "1px solid #000" }}
    />
  );
}
