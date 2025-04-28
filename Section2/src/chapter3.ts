// object
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이민욱",
};

// let dog: {
//   name: string;
//   color: string;
// } = {
//   name: "바둑이",
//   color: "brown"
// };

// user.id;
// dog.name;

user = {
  name: "홍길동",
}

let config: {
  readonly apiKey: string
} = {
  apiKey: 'My API Key'
};

// config.apiKey = "changed" // error, readonly로 변경 불가