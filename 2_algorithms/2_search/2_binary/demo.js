function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === x) return mid;

    if (arr[mid] > x) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5];
const result = binarySearch(arr, (x = 1));
if (result === -1) {
  console.log("Element is not present in array");
} else {
  console.log(result);
}
