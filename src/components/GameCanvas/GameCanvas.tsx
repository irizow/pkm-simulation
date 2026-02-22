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
import { NPC } from "../../engine/Npc";

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
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      const keysToBlock = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        " ",
      ];

      if (keysToBlock.includes(e.key)) {
        e.preventDefault();
      }
    };

    canvas.addEventListener("keydown", handleKeyDown);

    return () => {
      canvas.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

    const dyanImage = new Image();
    dyanImage.src = "/pkm-simulation/characters/dyan.png";

    heroImage.onload = () => {
      const hero = new Sprite({ x: 200, y: 200, image: heroImage });

      const npcsByMap: { [key: string]: NPC[] } = {
        outside: [],
        myHouse: [
          new NPC({
            x: 200,
            y: 200,
            image: dyanImage,
            dialogue: "If you go out can you get me soy milk?",
          }),
        ],
      };

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
          const currentNpcs = npcsByMap[currentMapName] || [];

          if (justPressed && !interactionCooldownRef.current) {
            if (dialogueRef.current) {
              setDialogue(null);
              lockInteraction();
            } else {
              for (const obj of [
                ...allMapObjects[currentMapName],
                ...currentNpcs,
              ]) {
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
            currentNpcs,
            handleDoorEnter,
          );

          for (const npc of currentNpcs) {
            npc.updateNpc(
              maps[currentMapName],
              tiles,
              32,
              allMapObjects[currentMapName],
              [hero],
            );
          }

          for (const npc of currentNpcs) {
            npc.draw(ctx, 2);
          }
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
        tabIndex={0}
      />
      {dialogue && (
        <DialogueBox dialogue={dialogue} setDialogue={setDialogue} />
      )}
    </>
  );
}
