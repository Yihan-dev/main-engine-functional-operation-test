// 저작권 및 라이센스 표시 공간
import * as view_model from "./view-model.js";

class 순서쌍 {
  constructor(X=0, Y=0) {
    this.X = X;
    this.Y = Y;
  }
  변경(X=0, Y=0) {
    this.X = X;
    this.Y = Y;
  }
  이동(dX=0, dY=0) {
    this.X += dX;
    this.Y += dY;
  }
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

let 클릭 = new 순서쌍(0, 0);
let 마우스 = new 순서쌍(0, 0);
let 이동 = new 순서쌍(0, 0);
let 좌표중심 = new 순서쌍(0, 0);

resize();

function resize(event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  출력();
}
function 출력() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(view_model.화면반환(), 이동.X, 이동.Y);
}

const mouse_data = {
  left: false,
  wheel: false,
  right: false,
}
function mousedown(event) {
  클릭.변경(event.clientX, event.clientY);
  switch (event.button) {
    case 0:
      mouse_data.left = true;
      if (event.target.id == 'canvas') {
        view_model.타일클릭(마우스.X - 이동.X, 마우스.Y - 이동.Y);
      }
      break;

    case 1:
      mouse_data.wheel = true;
      break;

    case 2:
      mouse_data.right = true;
      break;
  }
}
function mouseup(event) {
  switch (event.button) {
    case 0:
      mouse_data.left = false;
      break;

    case 1:
      mouse_data.wheel = false;
      좌표중심.이동(
        마우스.X - 클릭.X,
        마우스.Y - 클릭.Y
      );
      break;

    case 2:
      mouse_data.right = false;
      break;
  }
}
function mousemove(event) {
  마우스.변경(event.clientX, event.clientY);
  if (mouse_data.wheel) {
    이동.변경(
      좌표중심.X - 클릭.X + 마우스.X,
      좌표중심.Y - 클릭.Y + 마우스.Y
    );
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

addEventListener("mousedown", mousedown);
addEventListener("mouseup", mouseup);
addEventListener('mousemove', mousemove);
addEventListener("contextmenu", contextmenu);
addEventListener("wheel", wheel);
addEventListener("keydown", keydown);
addEventListener("keyup", keyup);
addEventListener("resize", resize);

document.getElementById("지형변경").addEventListener('click', e => {view_model.지형변경클릭(e); 출력()});