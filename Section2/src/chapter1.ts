// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let boo1: boolean = true;
let boo2: boolean = false;

// etc
let nul1: null = null;

// undefined
let und1: undefined = undefined;

// 엄격한 null 검사 false로 다른 타입에 null 대입 가능
// let numA: number = null;

// 리터럴 (값)
let rnum: 10 = 10;
let rstr: "" = "";

// rnum = 20; // 10만 허용하는 변수가 선언됨
// rstr = "hello" // 위의 정의한 원시 타입의 값으로만 사용할 수 있음
// ?) const n = 10 vs let n: 10 = 10 차이는?
const nc = 10;
let nr: 10 = 10;