const flowerData = [
  {
    image: "/flowers/amyflower_transparent.png",
    description: "Drawn by Aminata Ndiaye",
    x: 20,
    y: 34,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/andrewBroflower_transparent.png",
    description: "Drawn by Andrew Tran (brother)",
    x: 52,
    y: 12,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/andrewNotBroflower_black_removed.png",
    description: "Drawn by Andrew Tran (the other one)",
    x: 15,
    y: 15,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/Aubreyflower_black_removed.png",
    description: "Drawn by Aubrey",
    x: 80,
    y: 48,
    rotation: "0deg",
    scale: 0.6,
    zIndex: 1
  },
  {
    image: "/flowers/Binhflower_transparent.png",
    description: "Drawn by Binh",
    x: 53, // set so it overlaps pond area in background
    y: 35,
    rotation: 0,
    layer: "front"
  },
  {
    image: "/flowers/bradyflower_transparent.PNG",
    description: "Drawn by Brady",
    x: 68,
    y: 13,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/brandonflower_transparent.png",
    description: "Drawn by Brandon Hoang",
    x: 45,
    y: 42,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/chudeflower_transparent.png",
    description: "Drawn by Dad",
    x: 50,
    y: 20,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/coviflower_transparent.png",
    description: "Drawn by Mom",
    x: 56,
    y: 20,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/gabriella_flower_transparent.png",
    description: "Drawn by Gabriella Bernal",
    x: 70,
    y: 36,
    rotation: "0deg",
    scale: 0.7,
    zIndex: 1
  },
  {
    image: "/flowers/hanflower_transparent.png",
    description: "Drawn by Han Nguyen",
    x: 87,
    y: 39,
    rotation: "0deg",
    scale: 0.5,
    zIndex: 1
  },
  {
    image: "/flowers/Huyflowers_black_removed.png",
    description: "Drawn by Huy",
    x: 56,
    y: 40,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/jaynaflower_transparent.png",
    description: "Drawn by Jayna Rybner",
    x: 20,
    y: 43,
    rotation: "0deg",
    zIndex: 1
  },  
  {
    image: "/flowers/johnflower_transparent.png",
    description: "Drawn by John \"ToeKnee\" Nguyen",
    x: 10,
    y: 33,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/Juiceflower_black_removed.png",
    description: "Drawn by Justin \"Juice\" Tran",
    x: 7,
    y: 18,
    rotation: "0deg",
    scale: 0.6,
    zIndex: 1
  },
  {
    image: "/flowers/kaitlynnflower_black_removed.png",
    description: "Drawn by Kaitlynn Nguyen",
    x: 37,
    y: 17,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/kathflower_transparent.png",
    description: "Drawn by Kath \"Trang\" Tran",
    x: 32,
    y: 32,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/kathleenflower_black_removed.png",
    description: "Drawn by Kathleen Nguyen",
    x: 88,
    y: 30,
    rotation: 44,
    zIndex: 1
  },
  {
    image: "/flowers/katieflower_black_removed.png",
    description: "Drawn by Katie Nguyen",
    x: 0,
    y: 39,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/katrinaflower_black_removed.png",
    description: "Drawn by Katrina Nguyen",
    x: 29,
    y: 7,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/kaylin1.PNG",
    description: "Drawn by Kaylin",
    x: 86,
    y: 7,
    rotation: "0deg",
    zIndex: 3
  },
  {
    image: "/flowers/kaylin2.PNG",
    description: "Drawn by Kaylin too",
    x: 89.5,
    y: 8,
    rotation: "0deg",
    zIndex: 2
  },
  {
    image: "/flowers/kaylin3.PNG",
    description: "Also drawn by Kaylin",
    x: 92,
    y: 9,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/kristyflower_black_removed.png",
    description: "Drawn by Kristy Nguyen",
    x: 27,
    y: 45,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/Lylaflower_transparent.PNG",
    description: "Drawn by Lyla",
    x: 8,
    y: 48,
    rotation: "0deg",
    scale: 0.7,
    zIndex: 1
  },
  {
    image: "/flowers/mateoflower_transparent.png",
    description: "Drawn by Mateo Do",
    x: 93,
    y: 48,
    rotation: "0deg",
    scale: 0.6,
    zIndex: 1
  },
  {
    image: "/flowers/ryanflower_transparent.png",
    description: "Drawn by Ryan (You know the one)",
    x: 7,
    y: 2,
    rotation: "0deg",
    scale: 1.6,
    zIndex: 1
  },
  {
    image: "/flowers/sandraflower_black_removed.png",
    description: "Drawn by Sandra Le",
    x: 76,
    y: 20,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/terranflower_transparent.png",
    description: "Drawn by Terran Tran",
    x: 44,
    y: 3,
    rotation: "0deg",
    zIndex: 1
  },
  {
    image: "/flowers/fight_on_flower_transparent.png",
    description: "Drawn by Michaela Chang",
    x: 70,
    y: 3,
    rotation: 20,
    scale: 1.9,
    zIndex: 1
  }
];

export default flowerData;
