import { Observable } from 'rxjs';

import { fromEvent } from 'rxjs';
import { gameobjects } from './gameobjects';
export class engine {
  constructor() {
    fromEvent(document, 'keydown').subscribe(this.keydown);
  }

  keydown(event) {
    gameobjects.player.direction = event.keyCode;
    console.log(event.keyCode);
  }
}
