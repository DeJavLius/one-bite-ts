// 인터페이스 확장
interface Animal {
  name: string;
  age: number;
  color: string;
}

interface Dog extends Animal {
  name: string; // "Dog"; // error // number; // error
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  age: 10,
  color: "red",
  isBark: true,
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {
  isMixed: boolean;
}

const dogCat: DogCat = {
  name: "",
  age: 10,
  color: "red",
  isBark: true,
  isScratch: true,
  isMixed: true,
}