function reverse(num) {
  let result = 0;
  while (num > 0) {
    let a = num % 10;
    result = result * 10 + a;
    num = Math.floor(num / 10);
  }
  console.log(result);
}

reverse(12345);
