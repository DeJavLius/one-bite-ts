// 배열
// way - 1
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "i'm", "mulee"];
// way - 2
let booArr: Array<boolean> = [true, false, true];

// multi type array
let multiArr: (string | number | boolean)[] = ["hello", 1, false];

// deep index array
let deepNumArr: number[][] = [[1, 2, 3], [4, 5]];
// multi deep index array
let deepMultiW1Arr: (number | string | (number | string)[])[][] = [["hi", 1], [[1], [""]]];
let deepMultiW2Arr: Array<(number | string | Array<(number | string)>)[]> = [["hi", 1], [[1], [""]]];

// 튜플
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; // error
// tup1 = [1, "2"]; // error
let tup2: [number, string, boolean] = [1, "2", false];
// tup2 = ["1", 2, false]; // error
// tup1.push(1);
// tup1.pop();
// tup1.pop();
// tup1.pop();
// console.log(tup1);

// const users: [string, number][] = [["이민욱", 1], ["홍길동", 2], ["김무개", 3], ["이무개", 4], [5, "누구냐"]];