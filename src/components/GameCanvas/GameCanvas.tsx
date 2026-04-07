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
  const prevInteractRef = useRef(false);

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

    const dadImage = new Image();
    dadImage.src = "/pkm-simulation/characters/papa.png";

    const brotherImage = new Image();
    brotherImage.src = "/pkm-simulation/characters/germana.png";

    heroImage.onload = () => {
      const hero = new Sprite({ x: 200, y: 200, image: heroImage });

      const npcsByMap: { [key: string]: NPC[] } = {
        outside: [
          new NPC({
            x: 200,
            y: 500,
            image: dadImage,
            dialogue: [
              "... ... ... Oh, Iris! Where are you going?",
              "We're trying to fix your brother's bike, then we will go to the mountain",
              "Just saw your grandma in the café",
              "Where did you leave Dyan?",
            ],
            speed: 2,
            isLazy: false,
          }),
          new NPC({
            x: 300,
            y: 500,
            image: brotherImage,
            dialogue: [
              "Hey, where are you going?",
              "I don't know whats wrong, the bike is making strange noises...",
              "We just got a new piece for the bike, we're gonna try it out",
              "I forgot to bring the house keys...",
            ],
            speed: 2,
            isLazy: false,
          }),
        ],
        myHouse: [
          new NPC({
            x: 200,
            y: 200,
            image: dyanImage,
            dialogue: [
              "If you go out can you get me soy milk?",
              "We should do some laundry",
              "I'm gonna make music! ... In a while ...",
              "Have you seen my phone?!?!?!",
              "Hiii Chasssss!!!<3",
              "I'm very very hungry... and my break is over :(",
            ],
            isLazy: true,
          }),
        ],
      };

      function handleDoorEnter(
        target: string,
        spawn: { x: number; y: number },
        direction: "left" | "right" | "up" | "down" | null,
      ) {
        hero.x = spawn.x;
        hero.y = spawn.y;
        currentMapName = target;
        console.log(
          "spawned at:",
          spawn,
          "hero coords at:",
          hero.x,
          hero.y,
          "direction:",
          direction,
        );

        // Check what world objects exist at spawn location
        const objectsAtSpawn = allMapObjects[target].filter((obj) => {
          return (
            hero.x < obj.x + obj.width &&
            hero.x + hero.width > obj.x &&
            hero.y < obj.y + obj.height &&
            hero.y + hero.height > obj.y
          );
        });
        console.log("Objects at spawn location:", objectsAtSpawn);
      }

      function gameLoop() {
        if (canvas && ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Calculate camera position - center on hero for outdoor maps only
          let cameraOffsetX = 0;
          let cameraOffsetY = 0;

          const mapWidth = maps[currentMapName][0].length * 32;
          const mapHeight = maps[currentMapName].length * 32;

          // Center camera on hero for any map
          cameraOffsetX = hero.x + hero.width / 2 - canvas.width / 2;
          cameraOffsetY = hero.y + hero.height / 2 - canvas.height / 2;

          // Clamp camera to map bounds
          cameraOffsetX = Math.max(
            0,
            Math.min(cameraOffsetX, Math.max(0, mapWidth - canvas.width)),
          );
          cameraOffsetY = Math.max(
            0,
            Math.min(cameraOffsetY, Math.max(0, mapHeight - canvas.height)),
          );

          drawMap(
            ctx,
            maps[currentMapName],
            tileImages,
            32,
            cameraOffsetX,
            cameraOffsetY,
          );
          drawObjects(
            ctx,
            allMapObjects[currentMapName],
            cameraOffsetX,
            cameraOffsetY,
          );

          const prevInteract = prevInteractRef.current;
          const justPressed = input.interact && !prevInteract;
          function lockInteraction() {
            interactionCooldownRef.current = true;

            setTimeout(() => {
              interactionCooldownRef.current = false;
            }, 500);
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
                  const dialogueText =
                    obj instanceof NPC
                      ? obj.getDialogue()
                      : Array.isArray(obj.dialogue)
                        ? obj.dialogue[
                            Math.floor(Math.random() * obj.dialogue.length)
                          ]
                        : obj.dialogue;

                  setDialogue(dialogueText ?? null);
                  lockInteraction();
                  break;
                }
              }
            }
          }

          prevInteractRef.current = input.interact;

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
            npc.draw(ctx, 2, cameraOffsetX, cameraOffsetY);
          }
          hero.draw(ctx, 2, cameraOffsetX, cameraOffsetY);

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
