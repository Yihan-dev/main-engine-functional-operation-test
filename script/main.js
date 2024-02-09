// 저작권 및 라이센스 표시 공간
import * as view_model from "./view-model.js";

const stage = document.getElementById('stage');
const plan_canvas = document.getElementById('plan-layer');
const tile_canvas = document.getElementById('tile-layer');
const unit_canvas = document.getElementById('unit-layer');
const plan_ctx = plan_canvas.getContext("2d");
const tile_ctx = tile_canvas.getContext("2d");
const unit_ctx = unit_canvas.getContext("2d");

const 화면타일지름 = 40;
const 화면타일반지름 = 화면타일지름 / 2;

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
plan_canvas.width = 10000;
tile_canvas.width = 10000;
unit_canvas.width = 10000;
plan_canvas.height = 10000;
tile_canvas.height = 10000;
unit_canvas.height = 10000;
tile_ctx.drawImage(view_model.화면반환(), 0, 0);

view_model.데이터불러오기( [
  // X, Y,
  // [타일_높이],

  // [유닛_타일],

  // [유닛_체력],
  // [유닛_공격력],

  // [유닛_사거리],
  // [유닛_시야거리],
  // [유닛_높이],

  // {비활성화_유닛키},
] );

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

  if (event.target.id == 'plan-layer') {
    const 좌표Y위치 = Math.floor( event.offsetY / 화면타일지름 );
    const 좌표X위치 = Math.floor( ( event.offsetX - ( (좌표Y위치 & 1) * 화면타일반지름 ) ) / 화면타일지름 );
  }

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