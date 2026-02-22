import { useEffect, useRef, useState } from "react";
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
import DialogueBox from "../DialogueBox/DialogueBox";

const maps: { [key: string]: number[][] } = {
  outside: tileMapTown,
  myHouse: tileMapMyHouse,
};

export default function GameCanvas({ input }: { input: InputHandler }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let currentMapName = "outside";
  const [dialogue, setDialogue] = useState<string | null>(null);
  const dialogueRef = useRef<string | null>(null);
  const interactionCooldownRef = useRef(false);

  useEffect(() => {
    dialogueRef.current = dialogue;
  }, [dialogue]);

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

          let prevInteract = false;

          const justPressed = input.interact && !prevInteract;
          function lockInteraction() {
            interactionCooldownRef.current = true;

            setTimeout(() => {
              interactionCooldownRef.current = false;
            }, 1000);
          }

          if (justPressed && !interactionCooldownRef.current) {
            if (dialogueRef.current) {
              setDialogue(null);
              lockInteraction();
            } else {
              for (const obj of allMapObjects[currentMapName]) {
                if (!obj.dialogue) continue;

                const near =
                  hero.x < obj.x + obj.width + 20 &&
                  hero.x + hero.width > obj.x - 20 &&
                  hero.y < obj.y + obj.height + 20 &&
                  hero.y + hero.height > obj.y - 20;

                if (near) {
                  setDialogue(obj.dialogue);
                  lockInteraction();
                  break;
                }
              }
            }
          }

          prevInteract = input.interact;

          hero.update(
            input,
            maps[currentMapName],
            tiles,
            32,
            allMapObjects[currentMapName],
            dialogueRef,
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
    <>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        style={{ border: "1px solid #000" }}
      />
      {dialogue && (
        <DialogueBox dialogue={dialogue} setDialogue={setDialogue} />
      )}
    </>
  );
}
