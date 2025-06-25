//định nghĩa
let dev = {
  name: "Ngọc Huyền",
  age: 30,

  greet() {
    console.log("Hello world");
  },

  skills: ["JS", "React", "Node", "Express", "Mongodb", "Mysql"],
  position: {
    frontend: ["React"],
    backend: ["PHP"],
    fullstack: true,
  },
};

let dev2 = new Object();
dev2.name = "Ngọc Huyền";
dev2.age = 30;
dev2.greet = function () {
  console.log("Hello world");
};
dev2.skills = ["react"];
dev2.position = {
  frontend: "React",
  backend: "php",
  fullstack: true,
};

//truy cập
dev.name;
dev["name"];

//thêm sửa xóa
dev.gender = "female";
dev.age = 10;
delete dev.skills;

//lặp qua các thuộc tính đói tượng//for in
//đối tượng của các thuộc tính là method function
