export function drawMap(
  ctx: CanvasRenderingContext2D,
  map: number[][],
  tiles: HTMLImageElement[],
  tileSize: number,
) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const tileIndex = map[y][x];
      ctx.drawImage(
        tiles[tileIndex],
        x * tileSize,
        y * tileSize,
        tileSize,
        tileSize,
      );
    }
  }
}
