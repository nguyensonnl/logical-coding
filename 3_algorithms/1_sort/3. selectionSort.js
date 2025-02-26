//Tìm phần tử nhỏ nhất hay lớn nhất đưa về đúng vị trí của nó

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  console.log(arr);
}
const array = [4, 3, 8, 7, 3];
selectionSort(array);
