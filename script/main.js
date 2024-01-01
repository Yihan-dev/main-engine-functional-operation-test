// 저작권 및 라이센스 표시 공간
import * as engine from "./engine.js";

const 임시게임데이터 = {

}

function mousedown(event) {
  switch (event.button) {
    case 0:
      // 좌클릭
      break;
  
    case 1:
      // 휠클릭
      break;

    case 2:
      // 우클릭
      break;
  }
}
function mouseup(event) {

}
function mousemove(event) {

}
function contextmenu(event) {
  event.preventDefault();
}
function wheel(event) {
  // console.log(event.deltaY);
}

const key_data = {
  w: false, a: false, s: false, d: false,
  " ": false,
  q: false, e: false, r: false,
}
function keydown(event) {
  if (event.key in key_data) {
      key_data[event.key] = true;
  }
}
function keyup(event) {
  if (event.key in key_data) {
      key_data[event.key] = false;
  }
}

const sub_canvas = document.getElementById('sub_canvas');
const sub_ctx = sub_canvas.getContext("2d");
// sub_canvas.width = 1000;
// // console.log( sub_canvas.toDataURL() );
// sub_ctx.fillStyle = 'SaddleBrown';
// sub_ctx.fillRect(0, 0, 100, 100);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
// ctx.drawImage(sub_canvas, 100, 0);


addEventListener("mousedown", mousedown);
addEventListener("mouseup", mouseup);
addEventListener('mousemove', mousemove);
addEventListener("contextmenu", contextmenu);
addEventListener("wheel", wheel);
addEventListener("keydown", keydown);
addEventListener("keyup", keyup);