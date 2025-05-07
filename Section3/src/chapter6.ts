// 타입 단언
type Person = {
  name: string;
  age: number;
}

let person = {} as Person;
person.name = '민욱'
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

// let dog: Dog = {
//   name: "돌돌이",
//   color: "brown",
//   breed: "진도", // 초과 프로퍼티 검사 발생
// };

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", // 초과 프로퍼티 검사 발생
} as Dog;

// 타입 단언 규칙
let num1 = 10 as never; // 10 > never
let num2 = 10 as unknown; // 10 < unknown

// let num3 = 10 as string; // error
let num3 = 10 as unknown as string; // error

// const 단언
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

const concat = {
  name: "야옹이",
  color: "yellow",
}

// cat.name = ''; // error

// cat = { name: "wow", color: "rainbow" }

// non null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글",
  author: "민욱"
};

const len: number = post.author!.length; // 옵셔널 체이닝