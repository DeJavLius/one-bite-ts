// 제네릭 클래스

class List<T> {
  constructor(private list: T[]) { }

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const num = new List([1, 2, 3]);
num.pop();
num.push(4);
num.print();

const str = new List(["A", "B", "C"]);
str.pop();
str.push("D");
str.print();