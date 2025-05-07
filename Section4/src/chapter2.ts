// 함수 타입 호환성
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // error 리터럴 타입으로 number 타입 대입 불가

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => { };
let d: D = (value) => { };

// c = d; // error 
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let aniFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// aniFunc = dogFunc; // error
dogFunc = aniFunc;

let testFunc1 = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); // error
}

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
}

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => { };
let func2: Func2 = (a) => { };

func1 = func2;
// func2 = func1; // error