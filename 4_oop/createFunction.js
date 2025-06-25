function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getName = function () {
  console.log(this.name);
};

let person1 = new Person("Ngoc huyen", 15);
person1.getName();
