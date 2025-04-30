// void
function func1() {
    console.log("hello");
    // return undefined; // error
}
function func2() {
    console.log("hello");
    // return ""; error
    // return;
    // return undefined;
}
let a;
// a = 1; // error
// a = ""; // error
// a = {}; // error
a = undefined;
// a = null; // error, option: strictNullChecks: false, no error
// never
function func3() {
    while (true) { }
}
function func4() {
    throw new Error();
}
let b; // any type either
export {};
// b = 1; // error
// b = ""; // error
// b = {}; // error
// b = undefined; // error
// b = null; // option 영향 없음
