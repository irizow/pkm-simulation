export const tiles = [
  {
    name: "grass",
    src: "/pkm-simulation/tiles/grass.png",
    collides: false,
  },
  {
    name: "water",
    src: "/pkm-simulation/tiles/water.png",
    collides: true,
  },
  {
    name: "water-left-edge",
    src: "/pkm-simulation/tiles/water-left-edge.png",
    collides: true,
  },
  {
    name: "water-right-edge",
    src: "/pkm-simulation/tiles/water-right-edge.png",
    collides: true,
  },
  {
    name: "water-bottom-edge",
    src: "/pkm-simulation/tiles/water-bottom-edge.png",
    collides: true,
  },
  {
    name: "water-top-edge",
    src: "/pkm-simulation/tiles/water-top-edge.png",
    collides: true,
  },
  {
    name: "path",
    src: "/pkm-simulation/tiles/path.png",
    collides: false,
  },
  {
    name: "path-left-edge",
    src: "/pkm-simulation/tiles/path-left-edge.png",
    collides: false,
  },
  {
    name: "path-right-edge",
    src: "/pkm-simulation/tiles/path-right-edge.png",
    collides: false,
  },
  {
    name: "path-bottom-edge",
    src: "/pkm-simulation/tiles/path-bottom-edge.png",
    collides: false,
  },
  {
    name: "path-top-edge",
    src: "/pkm-simulation/tiles/path-top-edge.png",
    collides: false,
  },
  {
    name: "tall-tree",
    src: "/pkm-simulation/tiles/tall-tree.png",
    collides: true,
  },
  {
    name: "house-floor",
    src: "/pkm-simulation/tiles/house-floor.png",
    collides: false,
  },
  {
    name: "sand",
    src: "/pkm-simulation/tiles/sand.png",
    collides: false,
  },
  {
    name: "sea",
    src: "/pkm-simulation/tiles/sea.png",
    collides: false,
  },
  {
    name: "sea-edge",
    src: "/pkm-simulation/tiles/sea-edge.png",
    collides: true,
  },
  {
    name: "rail",
    src: "/pkm-simulation/tiles/rail.png",
    collides: false,
  },
  {
    name: "rail-sand",
    src: "/pkm-simulation/tiles/rail-sand.png",
    collides: false,
  },
  {
    name: "rail-grass",
    src: "/pkm-simulation/tiles/rail-grass.png",
    collides: false,
  },
  {
    name: "street-left-edge",
    src: "/pkm-simulation/tiles/street-left-edge.png",
    collides: false,
  },
  {
    name: "street-right-edge",
    src: "/pkm-simulation/tiles/street-right-edge.png",
    collides: false,
  },
  {
    name: "street-grass-corner-left",
    src: "/pkm-simulation/tiles/street-grass-corner-left.png",
    collides: false,
  },
  {
    name: "street-grass-corner-right",
    src: "/pkm-simulation/tiles/street-grass-corner-right.png",
    collides: false,
  },
];

export const tileImages: HTMLImageElement[] = tiles.map((t) => {
  const img = new Image();
  img.src = t.src;
  return img;
});

//0: grass, 1: water, 2: water-left-edge, 3: water-right-edge, 4: water-bottom-edge,
// 5: water-top-edge, 6: path, 7: path-left-edge, 8: path-right-edge, 9: path-bottom-edge,
// 10: path-top-edge, 11: tall-tree, 12: house-floor, 13: sand, 14: sea, 15: sea edge, 16: rail, 17: rail-sand, 18: rail-grass
// 19: street left edge, 20: street right edge, 21: street grass corner left, 22: street grass corner right

export const tileMapTown = [
  [0, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1],
  [0, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1],
  [0, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4],
  [0, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [18, 21, 22, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
  [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
  [17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
  [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
  [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
  [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
  [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
];

export const tileMapMyHouse = [
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
];
