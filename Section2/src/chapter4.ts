// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function func() {
  type User = {}; // 재 선언 가능
}

let user: User = {
  id: 1,
  name: "이민욱",
  nickname: "mulee",
  birth: "1999.03.03",
  bio: "introduce myself",
  location: "seoul",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "gdhong",
  birth: "1990.01.01",
  bio: "introduce myself",
  location: "seoul",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
}

let contryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
}

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
}

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410, // 생략 시 오류
  UnitedState: 840,
  UnitedKingdom: 826,
}