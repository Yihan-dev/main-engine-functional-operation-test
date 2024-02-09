// 저작권 및 라이센스 표시 공간
import * as model from "./model.js";

class OffscreenCcanvas {
  constructor(width, height) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext("2d");
  }
}

const 타일지름 = 40;
const 타일반지름 = 타일지름 / 2;

// 상대위치 = Math.floor( ( 새좌표계.이동.Y ) / view_model.타일지름 );
// 상대위치 = Math.floor( ( 새좌표계.이동.X - ( (타일Y위치 & 1) * view_model.타일반지름 ) ) / view_model.타일지름 );

const plan = new OffscreenCcanvas(100, 100);
const unit = new OffscreenCcanvas(100, 100);
const tile = new OffscreenCcanvas(100, 100);
tile.ctx.fillStyle = '#959595';
tile.ctx.fillRect(0, 0, 타일지름, 타일지름);

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.height = 100;
canvas.width = 100;

[plan, unit, tile].forEach( offscreen => ctx.drawImage(offscreen.canvas, 0, 0) );

export function 화면() {
  return canvas;
}

export function 데이터불러오기( 데이터 ) {
  model.모델불러오기()
}
export function 유닛생성클릭() {
  
}
export function 유닛수치변경클릭() {
  
}
export function 타일클릭(x, y) {
  // n = x + yX
}
export function 계획처리클릭() {
  
}

function 유닛시야범위() {

}
function 유닛이동범위() {

}