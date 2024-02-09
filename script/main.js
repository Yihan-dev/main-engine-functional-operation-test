// 저작권 및 라이센스 표시 공간
import * as view_model from "./view-model.js";

const plan_canvas = document.createElement('canvas');
const plan_ctx = plan_canvas.getContext("2d");
plan_canvas.width = 100;
plan_canvas.height = 100;

const unit_canvas = document.createElement('canvas');
const unit_ctx = unit_canvas.getContext("2d");
unit_canvas.width = 100;
unit_canvas.height = 100;

const tile_canvas = document.createElement('canvas');
const tile_ctx = tile_canvas.getContext("2d");
tile_canvas.width = 100;
tile_canvas.height = 100;
tile_ctx.fillStyle = '#959595';
tile_ctx.fillRect(0, 0, 40, 40);

const offscreen_canvas = document.createElement("canvas");
const offscreen_ctx = offscreen_canvas.getContext("2d");
offscreen_canvas.height = 100;
offscreen_canvas.width = 100;
offscreen_ctx.drawImage(plan_canvas, 0, 0);
offscreen_ctx.drawImage(unit_canvas, 0, 0);
offscreen_ctx.drawImage(tile_canvas, 0, 0);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const 타일지름 = 40;
const 타일반지름 = 타일지름 / 2;

let 기준X = 0;
let 기준Y = 0;
let 이동X = 0;
let 이동Y = 0;
let 휠클릭X = 0;
let 휠클릭Y = 0;
let 마우스X = 0;
let 마우스Y = 0;
let 휠클릭 = false;

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
resize();

function 출력() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(offscreen_canvas, 이동X, 이동Y);
}

function mousedown(event) {
  switch (event.button) {
    case 0: // 좌클릭
      break;

    case 1: // 휠클릭
      // console.log(event.offsetX, event.offsetY)
      휠클릭X = event.clientX;
      휠클릭Y = event.clientY;
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
        기준X = 이동X;
        기준Y = 이동Y;
      }
      break;

    case 2: // 우클릭
      break;
  }
}
function mousemove(event) {
  마우스X = event.clientX;
  마우스Y = event.clientY;

  if (event.target.id == 'canvas') {
    const 좌표Y위치 = Math.floor( 마우스Y / 타일지름 );
    const 좌표X위치 = Math.floor( ( 마우스X - ( (좌표Y위치 & 1) * 타일반지름 ) ) / 타일지름 );
  }

  if (휠클릭) {
    이동X = 기준X - 휠클릭X + 마우스X;
    이동Y = 기준Y - 휠클릭Y + 마우스Y;
    출력();
  }
}
function contextmenu(event) {
  event.preventDefault();
}
function wheel(event) {
  // 출력크기비율 += event.deltaY * 0.001;
  // 출력();
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
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  출력();
}

addEventListener("mousedown", mousedown);
addEventListener("mouseup", mouseup);
addEventListener('mousemove', mousemove);
addEventListener("contextmenu", contextmenu);
addEventListener("wheel", wheel);
addEventListener("keydown", keydown);
addEventListener("keyup", keyup);
addEventListener("resize", resize);