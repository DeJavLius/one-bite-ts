/**
 * 논리 연산 타입
 */
// OR
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

type OrDP = Dog | Person;

let or1: OrDP = {
  name: "",
  color: "",
};

let or2: OrDP = {
  name: "",
  language: "",
};

let or3: OrDP = {
  name: "",
  color: "",
  language: "",
};

// let or4: OrDP = { name: "", } // error
// let or4: OrDP = {
//   language: "",
//   color: "",
// } // error

console.log(or1, or2, or3);

// AND
let variable: number & string; // never

type And = Dog & Person;

// let and: And = {
//   name: "",
//   color: "",
//   // language: "", // error
// };

let and: And = {
  name: "",
  color: "",
  language: "",
};