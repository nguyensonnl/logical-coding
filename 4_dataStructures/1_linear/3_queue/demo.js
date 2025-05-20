/*
first in frist out (FIFS)
enqueue(): chèn element vào cuối queue
dequeue(): loại bỏ element ở đầu queue
*/

class Queue {
  constructor(capacity) {
    this.queue = [];
    this.capacity = capacity;
  }

  enqueue(element) {
    if (this.isFull()) return false;
    this.queue.push(element);
  }

  dequeue(element) {
    if (this.isEmpty()) return true;
    return this.queue.shift();
  }

  peak() {
    if (this.isEmpty()) return true;
    return this.queue[0];
  }

  isEmpty() {
    return !this.queue.length;
  }

  isFull() {
    return this.size === this.capacity;
  }
}

const q = new Queue(5);
for (let i = 1; i <= 1000; i++) {
  q.enqueue(i);
}
console.log(q.queue);

let arr = [];
for (let i = 1; i <= 1000; i++) {
  console.log(arr.push(i));
}
