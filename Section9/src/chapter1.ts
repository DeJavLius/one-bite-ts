// 분산적 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;

type NoSwitch<T> = [T] extends [number] ? string : number;
let nD: NoSwitch<boolean | number | string>;

type Exclude<T, U> = T extends U ? never : T;

let eA: Exclude<number, 0>;
let eB: Exclude<number | string | boolean, string>;
let eC: Exclude<number, "1">;
let eD: Exclude<1, number>;

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;