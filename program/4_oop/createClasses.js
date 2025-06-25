class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    console.log(this.name);
  }
}

let person = new Person("Ngoc Huyen", 25);
person.getName();
