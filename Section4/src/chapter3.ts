// 함수 오버로딩
function func(a: number): void;
function func(a: number, b: number, c: number): void;

function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a);
  }
}

// func();
func(1);
// func(1, 2);
func(1, 2, 3);