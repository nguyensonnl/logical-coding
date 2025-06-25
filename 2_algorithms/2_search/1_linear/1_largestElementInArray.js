//input: [10, 20, 4]
//ouput: 20

function largestElemet(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

const arr1 = [10, 324, 45, 90, 9000];
console.log(largestElemet(arr1));

function findMax(arr, i) {
  if (i === arr.length - 1) {
    return arr[i];
  }

  let recMax = findMax(arr, i + 1);

  return Math.max(recMax, arr[i]);
}

function largest(arr) {
  return findMax(arr, 0);
}

const arr = [10, 324, 45, 90, 9000];
console.log(largest(arr));

function largest1(arr) {
  return Math.max(...arr);
}
const arr2 = [10, 324, 45, 90, 9800];
console.log(largest1(arr2));
