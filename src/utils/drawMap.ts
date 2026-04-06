export function drawMap(
  ctx: CanvasRenderingContext2D,
  map: number[][],
  tiles: HTMLImageElement[],
  tileSize: number,
  cameraOffsetX: number = 0,
  cameraOffsetY: number = 0,
) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const tileIndex = map[y][x];
      ctx.drawImage(
        tiles[tileIndex],
        x * tileSize - cameraOffsetX,
        y * tileSize - cameraOffsetY,
        tileSize,
        tileSize,
      );
    }
  }
}
