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