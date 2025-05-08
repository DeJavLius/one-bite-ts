// 클래스
class Employee {
  // field
  // name; // error 암시적 any 발생
  // age; // error 암시적 any 발생
  // position; // error 암시적 any 발생
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // method
  work() {
    console.log("work");
  }
}

class ExcutiveOfficer extends Employee {
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position); // error 생략 시
    this.officeNumber = officeNumber;
  }
}

const employee = new Employee("민욱", 27, "백엔드 개발자");
console.log(employee);

const employeeA: Employee = {
  name: "",
  age: 0,
  position: "",

  work() { }
}