// 타입 추론

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "민욱",
  profile: {
    nickname: "mulee",
  },
};

let { id, name, profile } = c;

let [one, two, three, four] = [a, b, "test", true];

function func(message = "hello") {
  return message.length <= 0 ? "hi" : message;
}

let d; // 암묵적 any
d = 10;

d.toFixed;
// d.toUpperCase(); // error, any로 명시할 경우 not error

d = "string" // 재할당 가능
d.length;
// d.toFixed(); // error, any로 명시할 경우 not error

const num = 10; // 10
const string = "hi"; // "hi"

let arr = [1, "st"];