// 인터페이스
interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void;
  // sayHi: (a: number, b: number) => void; // error 오버로딩 불가
  sayHi(): void;
  sayHi(a: number, b: number): void;
} // |, & // error

const person: Person = {
  name: "민욱",
  age: 27,
  sayHi: function () {
    console.log("hi");
  },
};

person.sayHi();
person.sayHi(1, 2);