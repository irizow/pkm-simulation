import type { RefObject } from "react";

export interface SpriteConfig {
  x: number;
  y: number;
  image: HTMLImageElement;
  frameWidth?: number;
  frameHeight?: number;
  speed?: number;
}

export class Sprite {
  x: number;
  y: number;
  image: HTMLImageElement;

  speed: number;
  frameWidth: number;
  frameHeight: number;

  width: number;
  height: number;

  frameX: number;
  frameY: number;
  frameCount: number;

  constructor({
    x,
    y,
    image,
    frameWidth = 20,
    frameHeight = 20,
    speed = 3,
  }: SpriteConfig) {
    this.x = x;
    this.y = y;
    this.image = image;

    this.speed = speed;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;

    this.width = frameWidth * 2;
    this.height = frameHeight * 2;

    this.frameX = 1;
    this.frameY = 0;
    this.frameCount = 0;
  }

  update(
    input: { left: boolean; right: boolean; up: boolean; down: boolean },
    tileMap: number[][],
    tiles: { collides: boolean }[],
    tileSize: number,
    worldObjects: any[],
    dialogueRef: RefObject<string | null>,
    onDoorEnter?: (target: string, spawn: { x: number; y: number }) => void,
  ) {
    if (dialogueRef.current) return;
    let newX = this.x;
    let newY = this.y;
    let moving = false;

    if (input.left) {
      newX -= this.speed;
      this.frameY = 1;
      moving = true;
    }
    if (input.right) {
      newX += this.speed;
      this.frameY = 2;
      moving = true;
    }
    if (input.up) {
      newY -= this.speed;
      this.frameY = 3;
      moving = true;
    }
    if (input.down) {
      newY += this.speed;
      this.frameY = 0;
      moving = true;
    }

    if (!this.willCollide(newX, this.y, tileMap, tiles, tileSize, worldObjects))
      this.x = newX;
    if (!this.willCollide(this.x, newY, tileMap, tiles, tileSize, worldObjects))
      this.y = newY;

    if (moving) {
      this.frameCount++;
      if (this.frameCount > 12) {
        this.frameX = this.frameX === 0 ? 2 : 0;
        this.frameCount = 0;
      }
    } else {
      this.frameX = 1;
    }

    for (const obj of worldObjects) {
      if (!obj.door) continue;

      const d = obj.door;
      const intersects =
        this.x < d.x + d.width &&
        this.x + this.width > d.x &&
        this.y < d.y + d.height &&
        this.y + this.height > d.y;

      if (intersects && onDoorEnter) {
        onDoorEnter(d.target, d.spawn);
        return;
      }
    }
  }

  willCollide(
    newX: number,
    newY: number,
    tileMap: number[][],
    tiles: { collides: boolean }[],
    tileSize: number,
    worldObjects: any[] = [],
  ) {
    const tileX = Math.floor(newX / tileSize);
    const tileY = Math.floor(newY / tileSize);

    if (tileMap[tileY] && tiles[tileMap[tileY][tileX]]?.collides) return true;

    for (const obj of worldObjects) {
      if (!obj.collides) continue;

      if (
        newX < obj.x + obj.width &&
        newX + this.width > obj.x &&
        newY < obj.y + obj.height &&
        newY + this.height > obj.y
      )
        return true;
    }

    return false;
  }

  draw(ctx: CanvasRenderingContext2D, scale: number = 1) {
    ctx.drawImage(
      this.image,
      this.frameX * this.frameWidth,
      this.frameY * this.frameHeight,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.frameWidth * scale,
      this.frameHeight * scale,
    );
  }
}
