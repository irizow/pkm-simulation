import { Sprite } from "./Sprite";

export class NPC extends Sprite {
  direction: "left" | "right" | "up" | "down" | "idle" = "idle";

  maxTiles: number = 3; // never move more than x tiles
  movingTiles: number = 0; // how m tiles left to move
  pixelsMoved: number = 0; // how many px moved in current tile
  tileSize: number = 16;
  dialogue: string = "";

  constructor(config: {
    x: number;
    y: number;
    image: HTMLImageElement;
    dialogue: string;
  }) {
    super({ ...config, speed: 1 });
    this.dialogue = config.dialogue;
  }

  chooseNewDirection() {
    const directions = ["left", "right", "up", "down", "idle"];
    const weights = [1, 1, 1, 1, 3];

    let total = weights.reduce((a, b) => a + b, 0);
    let rand = Math.random() * total;

    for (let i = 0; i < directions.length; i++) {
      if (rand < weights[i]) {
        this.direction = directions[i] as any;
        break;
      }
      rand -= weights[i];
    }

    if (this.direction === "idle") {
      this.movingTiles = 0;
    } else {
      // 1–3 tiles max
      this.movingTiles = Math.floor(Math.random() * this.maxTiles) + 1;
      this.pixelsMoved = 0;
    }
  }

  updateNpc(
    tileMap: number[][],
    tiles: any[],
    tileSize: number,
    worldObjects: any[],
    characters: Sprite[],
  ) {
    this.tileSize = tileSize;

    if (this.direction === "idle") {
      this.frameX = 1;

      if (Math.random() < 0.005) {
        this.chooseNewDirection();
      }
      return;
    }

    let newX = this.x;
    let newY = this.y;

    switch (this.direction) {
      case "left":
        newX -= this.speed;
        this.frameY = 1;
        break;
      case "right":
        newX += this.speed;
        this.frameY = 2;
        break;
      case "up":
        newY -= this.speed;
        this.frameY = 3;
        break;
      case "down":
        newY += this.speed;
        this.frameY = 0;
        break;
    }

    if (
      !this.willCollide(
        newX,
        newY,
        tileMap,
        tiles,
        tileSize,
        worldObjects,
        characters,
      )
    ) {
      this.x = newX;
      this.y = newY;

      this.pixelsMoved += this.speed;

      if (this.pixelsMoved >= this.tileSize) {
        this.movingTiles--;
        this.pixelsMoved = 0;
      }
    } else {
      this.movingTiles = 0;
    }

    // Animation
    this.frameCount++;
    if (this.frameCount > 12) {
      this.frameX = this.frameX === 0 ? 2 : 0;
      this.frameCount = 0;
    }

    if (this.movingTiles <= 0) {
      this.direction = "idle";
    }
  }
}
