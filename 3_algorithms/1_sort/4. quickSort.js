function quickSort(arr) {
  let n = arr.length; //8
  if (n <= 0) return arr;
  const pivot = arr[n - 1];

  let left = [];
  let right = [];
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else {
      right.push(arr[i]);
    }
  }
  //console.log(quickSort(left));
  //console.log(quickSort(right));

  return quickSort(left).concat(pivot, quickSort(right));
  //return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([1, 5, 3, 2, 2, 5, 6, 3]));
