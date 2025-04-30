// 객체 타입 호환성
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
}

let dog: Dog = {
  name: "돌돌",
  color: "gray",
  breed: "진도",
};

animal = dog; // upcasting
// dog = animal; // downcasting error

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let pb: ProgrammingBook = {
  name: "한 입 크기 타입",
  price: 33000,
  skill: "typescript",
};

book = pb;
// pb = book; // error

// 초과 프로퍼티 검사
let book2: Book = {
  name: "한 입 크기 타입",
  price: 33000,
  // skill: "typescript", // error
}

let book3: Book = pb;

console.log(book3);

function func(book: Book) { }

func({
  name: "한 입 크기 타입",
  price: 33000,
  // skill: "typescript", // error
});

func(pb);