//sắp xếp các cặp số hay giá trị liền kề nhau bằng cách so sánh và hoán đổi giá trị 2 số đó
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function bubbleSort(arr) {
  const size = arr.length;
  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

const arr = [5, 3, 1, 4, 3, 6];
console.log(bubbleSort(arr));
