export const gameobjects = {
  canvas: {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
  },
  player: {
    x: 25,
    y: 0,
    width: 1,
    height: 1,
    direction: 39,
    cells: [],
    speed: 1,
    speedinterval: 10,
    intervalcount: 0,
    initiallength: 5,
  },
  fruit: {
    x: 25,
    y: 25,
    width: 1,
    height: 1,
  },
  game: {
    score: 0,
  },
};

export const cell = (i) => ({
  x: gameobjects.player.x - i * gameobjects.player.width,
  y: 0,
});
