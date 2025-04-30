// any
let anyV = 10;
anyV = "hi";
anyV = {};
anyV = true;
anyV = 5;
// anyV.toUpperCase(); // 런타임 error
let num1 = 10;
num1 = anyV;
// unknown
let unV;
unV = 1;
unV = () => { };
let num2 = 10;
// num2 = unV;
// unV.toUpperCase();
if (typeof unV === "number") {
    num2 = unV;
}
export {};
