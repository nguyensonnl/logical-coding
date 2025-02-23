//Bắt đầu bằng element thứ 2
//So sánh element hiện tại vói element trước đó
//Di chuyển các phần tử nhỏ hơn lên một vị trí để tạo chô trống
//Chèn phẩn tử hiện tại vào vị trí thích hợp
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i]; //key = 2
    let j = i - 1; // j = 0

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j]; //trước: 2, sau: 5
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}

// Example usage
let arr = [5, 2, 9, 1, 5, 6];
console.log("Sorted array:", insertionSort(arr));
