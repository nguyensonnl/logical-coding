function tamGiacCanRong() {
  let str = "";
  for (let row = 1; row <= 5; row++) {
    for (let space = 1; space <= 5 - row; space++) {
      str += " ";
    }

    for (let star = 1; star <= 2 * row - 1; star++) {
      if (star === 1 || star === 2 * row - 1 || row === 5) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += `\n`;
  }
  console.log(str);
}
tamGiacCanRong();
