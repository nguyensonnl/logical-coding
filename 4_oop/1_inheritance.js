class Person {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return `Name of person: ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, id) {
    super(name), (this.id = id);
  }
  toString() {
    return `${super.toString()}, Student id: ${this.id}`;
  }
}

let student1 = new Student("Ngọc hUyền", 22);
console.log(student1.toString());
