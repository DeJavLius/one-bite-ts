// case 1
function swap<T, U, K>(a: T, b: U, c: K) {
  return [c, b, a];
}

const [a, b, c] = swap("1", 2, false);

// case 2
function reFirstValue<T>(data: [T, ...unknown[]], index: number) {
  return data[index];
}

const index = 1;
let num = reFirstValue([0, 1, 2], index);
let str = reFirstValue([1, "b", false], index);

console.log(num);
console.log(str);
console.log(typeof str); // 인덱스별로 타입임

// case 3
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });
// let var4 = getLength(10); // error

console.log(`v1: ${var1}, v2: ${var2}, v3: ${var3}`);