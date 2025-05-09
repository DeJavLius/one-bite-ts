// Mapped 타입
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in 'id' | 'name' | 'age']?: User[key];
}

type BooleanUser = {
  [key in 'id' | 'name' | 'age']: boolean | string;
}

type keyofUser = {
  [key in keyof User]: boolean | string;
}

type readOnlyUser = {
  readonly [key in keyof User]: User[key];
}

function fetchUser(): User {
  return {
    id: 1,
    name: "민욱",
    age: 27,
  };
}

function updateUser(user: PartialUser) {
}

updateUser({
  // id: 1,
  // name: "민욱",
  age: 25,
});