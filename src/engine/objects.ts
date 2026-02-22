export interface TownObjects {
  name?: string;
  x: number;
  y: number;
  src: string;
  width: number;
  height: number;
  image: HTMLImageElement;
  collides: boolean;
  door?: Door;
  dialogue?: string;
}
export interface Door {
  x: number;
  y: number;
  width: number;
  height: number;
  target: string;
  spawn?: { x: number; y: number };
}

export const allMapObjects: Record<string, TownObjects[]> = {
  outside: [
    {
      x: 28 * 16,
      y: 13 * 16,
      src: "/pkm-simulation/tiles/tall-tree.png",
      width: 42,
      height: 64,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
    {
      x: 23 * 16,
      y: 3 * 16,
      src: "/pkm-simulation/tiles/tall-tree.png",
      width: 32,
      height: 48,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
    {
      x: 1 * 16,
      y: 20 * 17,
      src: "/pkm-simulation/tiles/town-sign.png",
      width: 32,
      height: 24,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
    {
      name: "houseDoor",
      x: 18 * 16,
      y: 7 * 16,
      src: "/pkm-simulation/tiles/my-purple-home.png",
      width: 164,
      height: 164,
      image: null as unknown as HTMLImageElement,
      collides: true,
      door: {
        x: 20 * 16,
        y: 17 * 16,
        width: 16,
        height: 16,
        target: "myHouse",
        spawn: { x: 15 * 16, y: 27 * 16 },
      },
    },
    {
      x: 16 * 16,
      y: 15 * 16,
      src: "/pkm-simulation/tiles/mailbox-purple.png",
      width: 32,
      height: 32,
      image: null as unknown as HTMLImageElement,
      collides: true,
      dialogue: "I'll have another look at the end of the month...",
    },
    {
      x: 3 * 32,
      y: 0 * 16,
      src: "/pkm-simulation/tiles/house-blue-roof.png",
      width: 148,
      height: 148,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
    {
      x: 6 * 32,
      y: 4 * 32,
      src: "/pkm-simulation/tiles/mailbox-red.png",
      width: 32,
      height: 32,
      image: null as unknown as HTMLImageElement,
      collides: true,
      dialogue: "So many good offers at Lidl this month!",
    },
  ],
  myHouse: [
    {
      x: 13 * 16,
      y: 27 * 16,
      src: "/pkm-simulation/tiles/plant.png",
      width: 24,
      height: 56,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
    {
      x: 19 * 16,
      y: 27 * 16,
      src: "/pkm-simulation/tiles/plant.png",
      width: 24,
      height: 56,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
    {
      x: 15 * 16,
      y: 29 * 16,
      src: "/pkm-simulation/tiles/entrance-carpet.png",
      width: 48,
      height: 24,
      image: null as unknown as HTMLImageElement,
      collides: false,
      door: {
        x: 16 * 16 + 16,
        y: 29 * 16 + 16,
        width: 16,
        height: 16,
        target: "outside",
        spawn: { x: 19 * 16 + 16, y: 18 * 16 + 16 },
      },
    },
    {
      x: 2 * 16,
      y: 7 * 16,
      src: "/pkm-simulation/tiles/rug.png",
      width: 128,
      height: 64,
      image: null as unknown as HTMLImageElement,
      collides: false,
    },
    {
      x: 2 * 16,
      y: 10 * 16,
      src: "/pkm-simulation/tiles/sofa.png",
      width: 128,
      height: 64,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
    {
      x: 3 * 16,
      y: 0 * 16,
      src: "/pkm-simulation/tiles/tv.png",
      width: 110,
      height: 86,
      image: null as unknown as HTMLImageElement,
      collides: true,
      dialogue: "Looks like there is a train strike again...",
    },
  ],
};

Object.values(allMapObjects).forEach((list) => {
  list.forEach((obj) => {
    const img = new Image();
    img.src = obj.src;
    obj.image = img;
  });
});
