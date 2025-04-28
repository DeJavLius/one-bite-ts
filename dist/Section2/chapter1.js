// number
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// string
let str1 = "hello";
let str2 = 'hello';
let str3 = `hello`;
let str4 = `hello ${num1}`;
// boolean
let boo1 = true;
let boo2 = false;
// etc
let nul1 = null;
// undefined
let und1 = undefined;
// 엄격한 null 검사 false로 다른 타입에 null 대입 가능
// let numA: number = null;
// 리터럴 (값)
let rnum = 10;
let rstr = "";
// rnum = 20; // 10만 허용하는 변수가 선언됨
// rstr = "hello" // 위의 정의한 원시 타입의 값으로만 사용할 수 있음
// ?) const n = 10 vs let n: 10 = 10 차이는?
const nc = 10;
let nr = 10;
export {};
