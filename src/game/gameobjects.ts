export const gameobjects = {
  canvas: {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
  },
  player: {
    x: 23,
    y: 23,
    width: 1,
    height: 1,
    direction: 39,
    cells: [],
    speed: 1,
    speedinterval: 10,
    intervalcount: 0,
    initiallength: 5,
    color: "gray", //"#9fff61",
  },
  fruit: {
    x: 4,
    y: 4,
    width: 1,
    height: 1,
  },
  game: {
    score: 0,
    idle: true,
    spinner: {
      margin: 23,
    },
  },
};

export const cell = (i: number) => ({
  x: gameobjects.player.x - i * gameobjects.player.width,
  y: 0,
});

export const reset = () => {
  gameobjects.game.idle = true;
  gameobjects.player.direction = 39;
  gameobjects.player.x = gameobjects.game.spinner.margin - 5;
  gameobjects.player.y = gameobjects.game.spinner.margin;
  gameobjects.player.cells.length = gameobjects.player.initiallength;
};
