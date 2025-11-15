export function drawObjects(
  ctx: CanvasRenderingContext2D,
  worldObjects: {
    x: number;
    y: number;
    width: number;
    height: number;
    image: HTMLImageElement | null;
  }[],
) {
  for (const obj of worldObjects) {
    if (!obj.image) continue;
    ctx.drawImage(obj.image, obj.x, obj.y, obj.width, obj.height);
  }
}
