import { animationFrames, interval, Subscription } from 'rxjs';
import { stats } from '../index';
import { cell, gameobjects } from './gameobjects';

export class logic {
  constructor() {
    this.oninit();
    this.subscription = interval(1000 / 10).subscribe(() => this.update());

    //animationFrames().subscribe(() => this.update());

    const { player } = gameobjects;

    Array(player.initiallength)
      .fill(0)
      .forEach((e, i) => {
        player.cells.push(cell(i));
      });
  }
  subscription: Subscription = null;

  oninit() {}

  update() {
    const { player, canvas, game } = gameobjects;

    if (player.x >= canvas.width - player.width) player.x = 0;
    if (player.y >= canvas.height - player.height) player.y = 0;
    if (player.x + player.width <= 0) player.x = canvas.width - player.width;
    if (player.y + player.height <= 0) player.y = canvas.height - player.height;

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

    player.cells = this.step(player.cells, player);

    if (game.score < 0) {
      console.log(
        'pc',
        player.cells.map((e) => e.x)
      );
    }
    stats(game.score);

    player.intervalcount++;

    if (player.intervalcount > player.speedinterval) {
      player.intervalcount = 0;
      this.subscription.unsubscribe();
      const increment = Math.min(10 + game.score / 100, 50);
      this.subscription = interval(1000 / increment).subscribe(() =>
        this.update()
      );
    }

    this.utility.eat(tail);
  }

  step(ar, head) {
    ar = [{ x: head.x, y: head.y }, ...ar.slice(0, -1)];
    return ar;
  }

  utility = {
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
        fruit.x = this.utility.randomrange(0, gameobjects.canvas.width);
        fruit.y = this.utility.randomrange(0, gameobjects.canvas.height);
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
