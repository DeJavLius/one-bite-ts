// 함수 타입 정의
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수 타입 정의
const add = (a: number, b: number) => a + b;

// 함수 매개변수
function introduce(name = "민욱", age: number, tall?: number) {
  console.log(`name: ${name}`);

  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}

introduce("나", 10, 175);

introduce("나", 10);

function getSum(...re: number[]) {
  return re.reduce((a, sum = 0) => { return sum += a })
}

console.log(getSum(1, 2, 3)); // 6

function getOverSum(...re: [number, number, number]) {
  return re.reduce((a, sum = 0) => { return sum += a })
}
// console.log(getOverSum(1, 2, 3, 4, 5)); // 15 // error