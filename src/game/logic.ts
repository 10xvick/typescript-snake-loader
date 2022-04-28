import { cell, gameobjects } from "./gameobjects";

export class logic {
  constructor() {
    this.oninit();
  }
  // subscription: Subscription = null;
  interval = null;

  oninit() {
    // this.subscription = interval(1000 / 10).subscribe(() => this.update());
    this.interval = setInterval(() => this.update(), 1000 / 10);

    //animationFrames().subscribe(() => this.update());

    const { player } = gameobjects;

    Array(player.initiallength)
      .fill(0)
      .forEach((e, i) => {
        player.cells.push(cell(i));
      });
  }

  update() {
    const { player, canvas, game } = gameobjects;
    const csize = canvas.width - player.width;
    if (game.idle) this.utility.spinner();

    if (player.x > csize) player.x = 0;
    if (player.y > csize) player.y = 0;
    if (player.x < 0) player.x = csize;
    if (player.y < 0) player.y = csize;

    switch (player.direction) {
      case 37: {
        player.x -= player.speed;
        break;
      }
      case 38: {
        player.y -= player.speed;
        break;
      }
      case 39: {
        player.x += player.speed;
        break;
      }
      case 40: {
        player.y += player.speed;
        break;
      }
    }

    const tail = player.cells[player.cells.length - 1];
    player.cells = this.utility.step(player.cells, player);

    player.intervalcount++;

    if (player.intervalcount > player.speedinterval) {
      player.intervalcount = 0;
      // this.subscription.unsubscribe();
      this.interval && clearInterval(this.interval);
      const increment = Math.min(10 + game.score / 100, 50);
      // this.subscription = interval(1000 / increment).subscribe(() =>
      //   this.update()
      // );
      this.interval = setInterval(() => this.update(), 1000 / increment);
    }

    this.utility.eat(tail);
  }
  utility = {
    spinner: () => {
      const { player, canvas, game } = gameobjects;
      const margin = game.spinner.margin;
      const min = margin;
      const max = canvas.width - player.width - margin;
      if (player.x == min && player.y == min) {
        player.direction = 39;
        // console.log(`${player.x}, ${player.y}`);
      }
      if (player.x == max && player.y == min) {
        player.direction = 40;
        // console.log(`${player.x}, ${player.y}`);
      }
      if (player.x == min && player.y == max) {
        player.direction = 38;
        // console.log(`${player.x}, ${player.y}`);
      }
      if (player.x == max && player.y == max) {
        player.direction = 37;
        // console.log(`${player.x}, ${player.y}`);
      }
    },
    step: function (ar, head) {
      ar = [{ x: head.x, y: head.y }, ...ar.slice(0, -1)];
      return ar;
    },
    speedup: {
      //move speedup logic here
    },
    eat: (tail) => {
      const { player, fruit, game } = gameobjects;
      if (
        player.x >= fruit.x &&
        player.x <= fruit.x &&
        player.y >= fruit.y &&
        player.y <= fruit.y
      ) {
        const csize = gameobjects.canvas.width;
        fruit.x = this.utility.randomrange(2, csize - 2);
        fruit.y = this.utility.randomrange(2, csize - 2);
        game.score++;
        player.cells.push(tail);
      }
    },

    randomrange: function (min, max) {
      const r = Math.random();
      return Math.floor(max * r + min);
    },
  };
}
