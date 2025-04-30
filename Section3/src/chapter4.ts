/**
 * 대수 타입
 */
// 합집합
let a: string | number | boolean;
a = "";
a = 10;
a = true;

let arr: (number | string | boolean)[] = [1, "s", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type UnionDP = Dog | Person;

let union1: UnionDP = {
  name: "",
  color: "",
};

let union2: UnionDP = {
  name: "",
  language: "",
};

let union3: UnionDP = {
  name: "",
  color: "",
  language: "",
};

// let union4: UnionDP = { name: "", } // error
// let union4: UnionDP = {
//   language: "",
//   color: "",
// } // error

console.log(union1, union2, union3);

// 교집합
let variable: number & string; // never

type Interscetion = Dog & Person;

// let inster: Interscetion = {
//   name: "",
//   color: "",
//   // language: "", // error
// };

let inster: Interscetion = {
  name: "",
  color: "",
  language: "",
};