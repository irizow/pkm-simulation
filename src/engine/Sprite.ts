// src/engine/Sprite.ts

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

    this.frameX = 1;
    this.frameY = 0;
    this.frameCount = 0;
  }

  update(
    input: { left: boolean; right: boolean; up: boolean; down: boolean },
    tileMap: number[][],
    tiles: { collides: boolean }[],
    tileSize: number,
    worldObjects: {
      x: number;
      y: number;
      width: number;
      height: number;
      collides: boolean;
    }[] = [],
  ) {
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

    if (
      !this.willCollide(newX, this.y, tileMap, tiles, tileSize, worldObjects)
    ) {
      this.x = newX;
    }
    if (
      !this.willCollide(this.x, newY, tileMap, tiles, tileSize, worldObjects)
    ) {
      this.y = newY;
    }

    if (moving) {
      this.frameCount++;
      if (this.frameCount > 12) {
        this.frameX = this.frameX === 0 ? 2 : 0;
        this.frameCount = 0;
      }
    } else {
      this.frameX = 1;
    }
  }

  willCollide(
    newX: number,
    newY: number,
    tileMap: number[][],
    tiles: { collides: boolean }[],
    tileSize: number,
    worldObjects: {
      x: number;
      y: number;
      width: number;
      height: number;
      collides: boolean;
    }[] = [],
  ) {
    const tileX = Math.floor(newX / tileSize);
    const tileY = Math.floor(newY / tileSize);

    const tileIndex = tileMap[tileY][tileX];
    if (tiles[tileIndex].collides) return true;

    for (const obj of worldObjects) {
      if (!obj.collides) continue;

      const objLeft = obj.x;
      const objRight = obj.x + obj.width;
      const objTop = obj.y;
      const objBottom = obj.y + obj.height;

      if (
        newX < objRight &&
        newX + this.frameWidth > objLeft &&
        newY < objBottom &&
        newY + this.frameHeight > objTop
      ) {
        return true;
      }
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
