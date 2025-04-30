// void
function func1(): void {
  console.log("hello");
  // return undefined; // error
}

function func2(): undefined {
  console.log("hello");
  // return ""; error
  // return;
  // return undefined;
}

let a: void;
// a = 1; // error
// a = ""; // error
// a = {}; // error
a = undefined;
// a = null; // error, option: strictNullChecks: false, no error

// never
function func3(): never {
  while (true) { }
}

function func4(): never {
  throw new Error();
}

let b: never; // any type either
// b = 1; // error
// b = ""; // error
// b = {}; // error
// b = undefined; // error
// b = null; // option 영향 없음