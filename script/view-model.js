// 저작권 및 라이센스 표시 공간
import * as model from "./model.js";

class OffscreenCanvas {
  constructor(width, height) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext("2d");
  }
}

const 타일지름 = 40;
const 타일반지름 = 타일지름 / 2;

const width = model.X최대 * 타일지름 + 타일반지름;
const height = model.Y최대 * 타일지름;

const plan = new OffscreenCanvas(width, height);
const fog  = new OffscreenCanvas(width, height);
const unit = new OffscreenCanvas(width, height);
const tile = new OffscreenCanvas(width, height);

const 타일색상표 = [
  '#959595',
  '#393939',
]

tile.ctx.fillStyle = 타일색상표[0];
for (let i = model.Y최대 - 1; i >= 0; i--) {
  for (let j = model.X최대 - 1; j >= 0; j--) {
    tile.ctx.fillRect(j * 타일지름 + (i & 1) * 타일반지름, i * 타일지름, 타일지름, 타일지름);
  }
}
유닛그리기();
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = width;
canvas.height = height;

let 선택타일 = 0;
다시그리기();

export function 화면반환() {
  return canvas;
}

export function 타일클릭(X, Y) {
  // n = x + yX
  const 타일Y = Math.floor( Y / 타일지름 );
  const 타일X = Math.floor( ( X - ( (타일Y & 1) * 타일반지름 ) ) / 타일지름 );
  if (
    0 <= 타일X && 타일X < model.X최대 &&
    0 <= 타일Y && 타일Y < model.Y최대
    ) {
    선택타일 = 타일X + 타일Y * model.X최대;
  }
  console.log(타일X, 타일Y, 선택타일);

  if (false) { // 선택타일이 유닛 이동범위에 포함.
    model.이동(선택타일);
    // 유닛 위치 재검사하기();
    유닛그리기();
    다시그리기();
  }
}

function 유닛그리기() {
  unit.ctx.fillStyle = '#FFFFFF';
  unit.ctx.beginPath();
  unit.ctx.arc(
    (model.유닛_타일 % model.X최대) * 타일지름 + (Math.floor(model.유닛_타일 / model.X최대) & 1) * 타일반지름 + 타일반지름,
    Math.floor(model.유닛_타일 / model.X최대) * 타일지름 + 타일반지름,
    타일반지름, 0, Math.PI * 2
    );
  unit.ctx.fill();
}
export function 지형변경클릭() {
  if (model.타일_지형[선택타일] == 0) {
    tile.ctx.fillStyle = 타일색상표[1];
  } else {
    tile.ctx.fillStyle = 타일색상표[0];
  }
  tile.ctx.fillRect((선택타일 % model.X최대) * 타일지름 + (Math.floor(선택타일 / model.X최대) & 1) * 타일반지름, Math.floor(선택타일 / model.X최대) * 타일지름, 타일지름, 타일지름);
  model.지형변경(선택타일);
  안개그리기();
}
function 안개그리기() {
  다시그리기();
}
function 다시그리기() {
  [tile, unit, fog, plan].forEach( offscreen => ctx.drawImage(offscreen.canvas, 0, 0) );
}