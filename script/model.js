// 저작권 및 라이센스 표시 공간

export let X최대 = 20;
export let Y최대 = 20;
export let 타일_지형 = [
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,

  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,

  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,

  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0,
];

export const 유닛시야범위 = new Set();
export const 유닛이동범위 = new Set();
export let 유닛_타일 = 0;
export let 유닛_행동력 = 5;
export let 유닛_시야거리 = 10;

export function 지형변경(N) {
  if (타일_지형[N] == 0) {
    타일_지형[N] = 1;
  } else {
    타일_지형[N] = 0;
  }
  console.log('지형변경', N, 타일_지형.length);
  시야유효검사();
}
function 시야유효검사() {

}
function 이동유효검사() {

}
export function 이동() {

}