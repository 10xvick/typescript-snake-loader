import { gameobjects } from "./gameobjects";
import { ctx } from "../index";

export class renderer {
  constructor() {
    // interval(1000 / 2).subscribe(this.render);
    // animationFrames().subscribe(this.render);
    this.animationframe();
  }

  animationframe() {
    requestAnimationFrame(() => this.animationframe());
    this.render();
  }

  render() {
    const { canvas, player, fruit } = gameobjects;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = gameobjects.player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    ctx.fillRect(fruit.x, fruit.y, fruit.width, fruit.height);

    player.cells.forEach((e) => {
      ctx.fillRect(e.x, e.y, player.width, player.height);
    });
  }
}
