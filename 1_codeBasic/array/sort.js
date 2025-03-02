function temp(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp(arr, i, j);
      }
    }
  }

  return arr;
}

let afterSort = sort([5, 2, 4, 1, 3]);
console.log(afterSort);

let arr1 = [4, 2, 4, 2, 5, 2, 1, 4];
let resutlt = arr1.sort((a, b) => b - a);
console.log(resutlt);
