import { engine } from './game/engine';
import { logic } from './game/logic';
import { renderer } from './game/renderer';
import './style.css';

const appDiv = <HTMLCanvasElement>document.getElementById('gamecanvas');
export const ctx = appDiv.getContext('2d');

const _logic = new logic();
const _render = new renderer();
const _engine = new engine();

// const _stats = document.getElementById('stats');
// _stats.innerHTML = 'abc';

// export const stats = (e) => {
//   _stats.innerHTML = e;
// };
