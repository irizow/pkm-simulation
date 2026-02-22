import { useEffect, useRef } from "react";
import { InputHandler } from "../../engine/InputHandler";
import { Sprite } from "../../engine/Sprite";
import {
  tileImages,
  tileMapMyHouse,
  tileMapTown,
  tiles,
} from "../../engine/tiles";
import { drawMap } from "../../utils/drawMap";
import { allMapObjects } from "../../engine/objects";
import { drawObjects } from "../../utils/drawObjects";

const maps: { [key: string]: number[][] } = {
  outside: tileMapTown,
  myHouse: tileMapMyHouse,
};

export default function GameCanvas({ input }: { input: InputHandler }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let currentMapName = "outside";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;

    const heroImage = new Image();
    heroImage.src = "/pkm-simulation/characters/hero.png";

    heroImage.onload = () => {
      const hero = new Sprite({ x: 200, y: 200, image: heroImage });

      function handleDoorEnter(
        target: string,
        spawn: { x: number; y: number },
      ) {
        currentMapName = target;
        hero.x = spawn.x;
        hero.y = spawn.y;
      }

      function gameLoop() {
        if (canvas && ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          drawMap(ctx, maps[currentMapName], tileImages, 32);
          drawObjects(ctx, allMapObjects[currentMapName]);

          hero.update(
            input,
            maps[currentMapName],
            tiles,
            32,
            allMapObjects[currentMapName],
            handleDoorEnter,
          );
          hero.draw(ctx, 2);

          requestAnimationFrame(gameLoop);
        }
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
