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
      x: 14 * 32,
      y: 7 * 32,
      src: "/tiles/tall-tree.png",
      width: 42,
      height: 64,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
    {
      x: 23 * 16,
      y: 3 * 16,
      src: "/tiles/tall-tree.png",
      width: 32,
      height: 48,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
    {
      name: "houseDoor",
      x: 9 * 32,
      y: 4 * 32,
      src: "/tiles/my-purple-home.png",
      width: 164,
      height: 164,
      image: null as unknown as HTMLImageElement,
      collides: true,
      door: {
        x: 19 * 16 + 16,
        y: 16.5 * 16 + 16,
        width: 16,
        height: 16,
        target: "myHouse",
        spawn: { x: 14 * 16 + 16, y: 26 * 16 + 16 },
      },
    },
    {
      x: 8 * 32,
      y: 8 * 32,
      src: "/tiles/mailbox-purple.png",
      width: 32,
      height: 32,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
    {
      x: 3 * 32,
      y: 0 * 16,
      src: "/tiles/house-blue-roof.png",
      width: 148,
      height: 148,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
    {
      x: 6 * 32,
      y: 4 * 32,
      src: "/tiles/mailbox-red.png",
      width: 32,
      height: 32,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
  ],
  myHouse: [
    {
      x: 13 * 16,
      y: 27 * 16,
      src: "/tiles/plant.png",
      width: 24,
      height: 56,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
    {
      x: 19 * 16,
      y: 27 * 16,
      src: "/tiles/plant.png",
      width: 24,
      height: 56,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
    {
      x: 15 * 16,
      y: 29 * 16,
      src: "/tiles/entrance-carpet.png",
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
      src: "/tiles/rug.png",
      width: 128,
      height: 64,
      image: null as unknown as HTMLImageElement,
      collides: false,
    },
    {
      x: 2 * 16,
      y: 10 * 16,
      src: "/tiles/sofa.png",
      width: 128,
      height: 64,
      image: null as unknown as HTMLImageElement,
      collides: true,
    },
    {
      x: 3 * 16,
      y: 0 * 16,
      src: "/tiles/tv.png",
      width: 110,
      height: 86,
      image: null as unknown as HTMLImageElement,
      collides: true,
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
