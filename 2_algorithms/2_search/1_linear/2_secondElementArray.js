function secondElement(arr) {
  let first = 0;
  let second = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      first = arr[i]; //100
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second;
}

console.log("The second: " + secondElement([4, 3, 1, 2, 5, 100, 88]));
