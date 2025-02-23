//Tìm phần tử nhỏ nhất hay lớn nhất đưa về đúng vị trí của nó

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
console.log(selectionSort([5, 4, 7, 6, 3, 2]));
