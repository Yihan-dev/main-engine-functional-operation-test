// 저작권 및 라이센스 표시 공간
import * as engine from "./engine.js";

const 임시게임데이터 = [
  
]




const sub_canvas = document.getElementById('sub_canvas');
const sub_ctx = sub_canvas.getContext("2d");
// sub_canvas.width = 1000;
// // console.log( sub_canvas.toDataURL() );
sub_ctx.fillStyle = 'SaddleBrown';
sub_ctx.fillRect(0, 0, 100, 100);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

class 좌표 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  x = 0;
  y = 0;
}

let 기준캔버스좌표 = new 좌표(0 ,0);
let 이동캔버스좌표 = new 좌표(0 ,0);
let 휠클릭좌표 = new 좌표(0 ,0);
let 마우스좌표 = new 좌표(0 ,0);
let 휠클릭 = false;
let 출력크기비율 = 1;
출력();



function 출력() {
  ctx.clearRect(0, 0, 1000, 1000);
  ctx.drawImage(sub_canvas, 이동캔버스좌표.x, 이동캔버스좌표.y, 1000*출력크기비율, 1000*출력크기비율);
}

function mousedown(event) {
  switch (event.button) {
    case 0: // 좌클릭
      break;

    case 1: // 휠클릭
      if (event.target.id == 'canvas') {
        휠클릭좌표 = new 좌표(event.offsetX ,event.offsetY);
        휠클릭 = true;
      }
      break;

    case 2: // 우클릭
      break;
  }
}
function mouseup(event) {
  switch (event.button) {
    case 0: // 좌클릭
      break;

    case 1: // 휠클릭
      if (휠클릭) {
        휠클릭 = false;
        기준캔버스좌표 = new 좌표(이동캔버스좌표.x, 이동캔버스좌표.y);
      }
      break;

    case 2: // 우클릭
      break;
  }
}
function mousemove(event) {
  if (event.target.id == 'canvas') {
    마우스좌표 = new 좌표(event.offsetX ,event.offsetY);
    if (휠클릭) {
      이동캔버스좌표.x = 기준캔버스좌표.x + 휠클릭좌표.x - 마우스좌표.x;
      이동캔버스좌표.y = 기준캔버스좌표.y + 휠클릭좌표.y - 마우스좌표.y;
      출력();
    }
  }
}
function contextmenu(event) {
  event.preventDefault();
}
function wheel(event) {
  출력크기비율 += event.deltaY * 0.001;
  출력();
}

const key_data = {
  w: false, a: false, s: false, d: false,
  " ": false, Shift: false,
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

function resize(event) {
  
}

addEventListener("mousedown", mousedown);
addEventListener("mouseup", mouseup);
addEventListener('mousemove', mousemove);
addEventListener("contextmenu", contextmenu);
addEventListener("wheel", wheel);
addEventListener("keydown", keydown);
addEventListener("keyup", keyup);
addEventListener("resize", resize);