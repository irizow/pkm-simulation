export function drawObjects(
  ctx: CanvasRenderingContext2D,
  worldObjects: {
    x: number;
    y: number;
    width: number;
    height: number;
    image: HTMLImageElement | null;
  }[],
  cameraOffsetX: number = 0,
  cameraOffsetY: number = 0,
) {
  for (const obj of worldObjects) {
    if (!obj.image) continue;
    ctx.drawImage(
      obj.image,
      obj.x - cameraOffsetX,
      obj.y - cameraOffsetY,
      obj.width,
      obj.height,
    );
  }
}
