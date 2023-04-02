import { index } from './src/game';

export const canvas = <HTMLCanvasElement>document.getElementById('gamecanvas');
export const ctx = canvas.getContext('2d');

console.log(ctx)
new index(canvas, <HTMLElement>document.getElementById('spec'), ctx);
