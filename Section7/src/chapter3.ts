// 제네릭 인터페이스

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key1",
  value: 0,
};

let keyBool: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1", "2", "3"],
};

// 인덱스 시그니처
interface Map<V> {
  [key: string]: V;
}

let stirngMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

// 제네릭 타입 별칭
type MapType<V> = {
  [key: string]: V;
}

let stringMapType: MapType<string> = {
  key: "hi",
};

// 제네릭 인터페이스 활용 예시
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goTo(user: User<Student>) {
  const school = user.profile.school
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "민욱",
  profile: {
    type: "developer",
    skill: "Typescript",
  },
};

const studentUser: User<Student> = {
  name: "킬동",
  profile: {
    type: "student",
    school: "induk university",
  },
}