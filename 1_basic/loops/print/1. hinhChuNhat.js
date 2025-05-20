function hinhChuNhat(dai, rong) {
  let str = "";
  if (dai < rong) {
    console.log("Dài phải lớn hơn rọng");
  } else {
    for (let i = 1; i <= rong; i++) {
      for (let j = 1; j <= dai; j++) {
        str += "*";
      }
      str += "\n";
    }
    console.log(str);
  }
}

hinhChuNhat(7, 6);
