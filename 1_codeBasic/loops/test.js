function tamGiacCanRong() {
  let str = "";

  for (let row = 0; row < 5; row++) {
    for (let space = 0; space < 5 - row; space++) {
      str += " ";
    }

    for (let star = 0; star < 2 * row - 1; star++) {
      str += "*";
    }

    str += "\n";
  }
  return str;
}

const result = tamGiacCanRong();
console.log(result);
