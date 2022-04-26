import { animationFrames, interval } from 'rxjs';
import { ctx } from '../index';
import { gameobjects } from './gameobjects';

export class renderer {
  constructor() {
    // interval(1000 / 2).subscribe(this.render);
    animationFrames().subscribe(this.render);
  }

  render() {
    const { player, fruit, canvas } = gameobjects;
    ctx.fillStyle = '#ffff';
    ctx.fillRect(canvas.x, canvas.y, canvas.width, canvas.height);
    ctx.fillStyle = 'Black';
    ctx.fillRect(player.x, player.y, player.width, player.height);

    ctx.fillRect(fruit.x, fruit.y, fruit.width, fruit.height);

    player.cells.forEach((e) => {
      ctx.fillRect(e.x, e.y, player.width, player.height);
    });
  }
}
