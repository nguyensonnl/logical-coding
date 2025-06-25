class Person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  addAdress(add) {
    this.add = add;
  }
  getDetail() {
    console.log(`Name is ${this.name}, Address is: ${this.add}`);
  }
}

let Person1 = new Person("Ngọc HUyền", 1);
Person1.addAdress("Thủ Đức");
Person1.getDetail();
