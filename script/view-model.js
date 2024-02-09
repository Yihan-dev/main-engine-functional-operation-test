// 저작권 및 라이센스 표시 공간
import * as model from "./model.js";

const 타일지름 = 40;
const 타일반지름 = 타일지름 / 2;

const offscreen_canvas = document.createElement("canvas");
offscreen_canvas.height = 10000;
offscreen_canvas.width = 10000;
const offscreen_ctx = offscreen_canvas.getContext("2d");
offscreen_ctx.fillStyle = '#959595';
offscreen_ctx.fillRect(0, 0, 40, 40);

export function 데이터불러오기( 데이터 ) {

}
export function 화면반환() {
  return offscreen_canvas
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