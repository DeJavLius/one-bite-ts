// 함수 타입 표현식
type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multi: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// call(호출) 시그니처
type OperSign = {
  (a: number, b: number): number;
  name: string;
}

const addSign: OperSign = (a, b) => a + b;
const subSign: OperSign = (a, b) => a - b;
const multiSign: OperSign = (a, b) => a * b;
const divideSign: OperSign = (a, b) => a / b;

addSign.name;