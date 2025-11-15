export const townObjects = [
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
    x: 9 * 32,
    y: 4 * 32,
    src: "/tiles/my-purple-home.png",
    width: 164,
    height: 164,
    image: null as unknown as HTMLImageElement,
    collides: true,
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
];

const objectImages: HTMLImageElement[] = [];

townObjects.forEach((obj) => {
  const img = new Image();
  img.src = obj.src;
  obj.image = img;
  objectImages.push(img);
});
