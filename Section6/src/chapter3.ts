// 인터페이스 + 클래스
interface ICharacter {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements ICharacter {
  // constructor(private name: string, private moveSpeed: number) { // error
  constructor(public name: string, public moveSpeed: number, private extra: string) { }

  move(): void {
    console.log(`${this.moveSpeed} 속도 이동`);
  }
}