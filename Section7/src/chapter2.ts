// map
const arr = [1, 2, 3];

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2);
console.log(map(["hi", "hello"], (it) => parseInt(it)));

// forEach
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr, (it) => {
  console.log(it.toFixed());
});

forEach(["hi", "hello"], (it) => {
  console.log(it.toUpperCase());
});