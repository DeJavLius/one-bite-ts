// 선언 합침
interface Person {
  name: string;
}

interface Person {
  // name: number; // error conflict
  age: number;
}

const person: Person = {
  name: "",
  age: 0,
}

// 모듈 보강
// library/module
interface Lib {
  a: number;
  b: number;
}

// my source
interface Lib {
  c: string;
}

const lib = {
  a: 1,
  b: 2,
  c: "3",
}
