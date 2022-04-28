import { canvas } from "../index";
import { gameobjects, reset } from "./gameobjects";
export class engine {
  constructor() {
    window.addEventListener("keydown", this.keydown);
    document.addEventListener("mouseenter", this.mousein);
    document.addEventListener("mouseout", this.mouseout);
    // fromEvent(document, "keydown").subscribe(this.keydown);
  }

  keydown(event: any) {
    gameobjects.player.direction = event.keyCode;
  }

  mousein() {
    canvas.style.transform = "scale(1)";
    gameobjects.game.idle = false;
    // alert();
    canvas.click();
    canvas.focus();
    canvas.autofocus = true;

    // console.log("in");
  }

  mouseout() {
    // canvas.style.transform = "scale(5)";
    reset();
    // console.log("out");
  }
}
