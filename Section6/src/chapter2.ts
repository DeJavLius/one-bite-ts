// 접근 제어자
class Employee {
  // protected name: string;
  // public age: number;
  // private position: string;

  // constructor(name: string, age: number, position: string) {
  constructor(protected name: string, public age: number, private position: string) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  work() {
    console.log(`${this.name} working`);
  }
}

class ExcutiveOfficer extends Employee {
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position); // error 생략 시
    this.officeNumber = officeNumber;
  }

  angry() {
    console.log(`${this.name}! 자네 뭐하나!`);
    // console.log(`${this.position}! 자네 뭐하나!`); // error
  }
}

const employee = new Employee("민욱", 27, "백엔드 개발자");
// employee.name = "길동"; // error protected 접근
employee.age = 10;
console.log(employee);
employee.work();
