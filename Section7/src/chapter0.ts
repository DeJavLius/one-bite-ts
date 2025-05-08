// 제네릭
function func(value: unknown) {
  return value;
}

let num = func(10);
if (typeof num === "number") {
  num.toFixed();
}

let boo = func(true);

// 제네릭 함수
function funcGen<T>(value: T): T {
  return value;
}

let numGen = funcGen(10);
let booGen = funcGen(true);
let arr = funcGen<[number, number, number]>([1, 2, 3]);