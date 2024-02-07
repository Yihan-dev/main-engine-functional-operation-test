// 저작권 및 라이센스 표시 공간
import * as view_model from "./view-model.js";

const stage = document.getElementById('stage');
const tile_canvas = document.getElementById('tile-layer');
const tile_ctx = tile_canvas.getContext("2d");
const unit_canvas = document.getElementById('unit-layer');
const unit_ctx = unit_canvas.getContext("2d");

class 좌표 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  x = 0;
  y = 0;
}

let 기준캔버스좌표 = new 좌표(0, 0);
let 이동캔버스좌표 = new 좌표(0, 0);
let 휠클릭좌표 = new 좌표(0, 0);
let 마우스좌표 = new 좌표(0, 0);
let 휠클릭 = false;
tile_ctx.drawImage(view_model.offscreen_canvas, 0, 0);



function mousedown(event) {
  switch (event.button) {
    case 0: // 좌클릭
      break;

    case 1: // 휠클릭
      // console.log(event.offsetX, event.offsetY)
      휠클릭좌표 = new 좌표(event.clientX, event.clientY);
      휠클릭 = true;
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
  마우스좌표 = new 좌표(event.clientX, event.clientY);
  if (휠클릭) {
    이동캔버스좌표.x = 기준캔버스좌표.x - 휠클릭좌표.x + 마우스좌표.x;
    이동캔버스좌표.y = 기준캔버스좌표.y - 휠클릭좌표.y + 마우스좌표.y;
    stage.style.transform = `translate(${이동캔버스좌표.x}px, ${이동캔버스좌표.y}px)`;
  }
}
function contextmenu(event) {
  event.preventDefault();
}
function wheel(event) {
  // 출력크기비율 += event.deltaY * 0.001;
  // stage.style.transform = `scale(${출력크기비율}) translate(${이동캔버스좌표.x}px, ${이동캔버스좌표.y}px)`;
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