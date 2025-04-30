// Unknown 타입
function UnknownExam() {
  let a: unknown = 1;
  let b: unknown = "";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unVar: unknown;

  // let num: number = unVar; // upcasting error
  // let str: string = unVar; // upcasting error
  // let boo: boolean = unVar; // upcasting error
}

// Never
function neverExam() {

  // 공집합, 반환 가능 값이 없음
  function neverFunc(): never {
    while (true) { }
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let boo: boolean = neverFunc();

  // let nev1: never = 10; // downcasting error
  // let nev2: never = "";
  // let nev3: never = true;
}

// Void
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined; // 업 캐스팅 가능
}

// Any
function anyExam() {
  let unkVar: unknown;
  let anyVar: any;
  let undVar: undefined;
  let nevVar: never;

  anyVar = unkVar; // 업 캐스팅
  undVar = anyVar; // 다운 캐스팅
  // nevVar = anyVar; // 다운 캐스팅 불가
  // anyVar = nevVar; // never는 할당되기 전 사용 불가 외 오류 없음음
}