// 클래스
class Student {
  // field
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // method
  study() {
    console.log("게으른");
  }
  introduce() {
    console.log(`${this.name} 입니다.`);
  }
}

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill} 코딩 중..`);
  }
}

let student = new Student("민욱", "A+", 10);
console.log(student);
student.study();
student.introduce();

const studentDeveloper = new StudentDeveloper("민욱", "A++", 10, "java");
console.log(studentDeveloper);
studentDeveloper.study();
studentDeveloper.introduce();
studentDeveloper.programming();