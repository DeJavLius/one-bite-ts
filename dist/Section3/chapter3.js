// Unknown 타입
function UnknownExam() {
    let a = 1;
    let b = "";
    let c = true;
    let d = null;
    let e = undefined;
    let unVar;
    // let num: number = unVar; // upcasting error
    // let str: string = unVar; // upcasting error
    // let boo: boolean = unVar; // upcasting error
}
// Never
function neverExam() {
    // 공집합, 반환 가능 값이 없음
    function neverFunc() {
        while (true) { }
    }
    let num = neverFunc();
    let str = neverFunc();
    let boo = neverFunc();
    // let nev1: never = 10; // downcasting error
    // let nev2: never = "";
    // let nev3: never = true;
}
// Void
function voidExam() {
    function voidFunc() {
        console.log("hi");
        return undefined;
    }
    let voidVar = undefined; // 업 캐스팅 가능
}
// Any
function anyExam() {
    let unkVar;
    let anyVar;
    let undVar;
    let nevVar;
    anyVar = unkVar; // 업 캐스팅
    undVar = anyVar; // 다운 캐스팅
    // nevVar = anyVar; // 다운 캐스팅 불가
    anyVar = nevVar;
}
export {};
