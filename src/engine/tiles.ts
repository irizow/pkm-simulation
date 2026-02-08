export const tiles = [
  {
    name: "grass",
    src: "/tiles/grass.png",
    collides: false,
  },
  {
    name: "water",
    src: "/tiles/water.png",
    collides: true,
  },
  {
    name: "water-left-edge",
    src: "/tiles/water-left-edge.png",
    collides: true,
  },
  {
    name: "water-right-edge",
    src: "/tiles/water-right-edge.png",
    collides: true,
  },
  {
    name: "water-bottom-edge",
    src: "/tiles/water-bottom-edge.png",
    collides: true,
  },
  {
    name: "water-top-edge",
    src: "/tiles/water-top-edge.png",
    collides: true,
  },
  {
    name: "path",
    src: "/tiles/path.png",
    collides: false,
  },
  {
    name: "path-left-edge",
    src: "/tiles/path-left-edge.png",
    collides: false,
  },
  {
    name: "path-right-edge",
    src: "/tiles/path-right-edge.png",
    collides: false,
  },
  {
    name: "path-bottom-edge",
    src: "/tiles/path-bottom-edge.png",
    collides: false,
  },
  {
    name: "path-top-edge",
    src: "/tiles/path-top-edge.png",
    collides: false,
  },
  {
    name: "tall-tree",
    src: "/tiles/tall-tree.png",
    collides: true,
  },
  { name: "house-floor", src: "/tiles/house-floor.png", collides: false },
];

// -------------------------------
// IMAGE LOADING
// -------------------------------
export const tileImages: HTMLImageElement[] = tiles.map((t) => {
  const img = new Image();
  img.src = t.src;
  return img;
});

//0: grass, 1: water, 2: water-left-edge, 3: water-right-edge, 4: water-bottom-edge,
// 5: water-top-edge, 6: path, 7: path-left-edge, 8: path-right-edge, 9: path-bottom-edge,
// 10: path-top-edge, 11: tall-tree, 12: house-floor

export const tileMapTown = [
  [0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1],
  [0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1],
  [0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4],
  [0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [10, 6, 6, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
