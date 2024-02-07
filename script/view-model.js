// 저작권 및 라이센스 표시 공간
import * as model from "./model.js";

export const offscreen_canvas = document.createElement("canvas");
offscreen_canvas.height = 1000;
offscreen_canvas.width = 1000;
const offscreen_ctx = offscreen_canvas.getContext("2d");
offscreen_ctx.fillStyle = 'SaddleBrown';
offscreen_ctx.fillRect(0, 0, 50, 50);
// console.log( offscreen_ctx.toDataURL() );

const 임시게임데이터 = [
  
]
