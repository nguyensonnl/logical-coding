/*
handling asynchronous operations properly, especially when dealing with promises.
Here's an example of an async queue that processes tasks sequentially:
*/
//Managing Async Tasks in Order

class AsyncQueue {
  constructor() {
    this.queue = [];
    this.processing = false;
  }

  enqueue(task) {
    this.queue.push(task);
    this.processNext();
  }

  async processNext() {
    if (this.processing || this.queue.length === 0) return;

    this.processing = true;
    const task = this.queue.shift();

    try {
      await task();
    } catch (error) {
      console.error("Task failed:", error);
    }

    this.processing = false;
    this.processNext();
  }
}

// Example usage
const queue = new AsyncQueue();

queue.enqueue(
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("Task 1 complete");
        resolve();
      }, 1000)
    )
);

queue.enqueue(
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("Task 2 complete");
        resolve();
      }, 500)
    )
);

queue.enqueue(
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("Task 3 complete");
        resolve();
      }, 800)
    )
);

// Output:
// After 1 sec -> "Task 1 complete"
// After 1.5 sec -> "Task 2 complete"
// After 2.3 sec -> "Task 3 complete"
/*
Why Is This Useful?
Ensures tasks execute in sequence (avoiding race conditions).

Prevents simultaneous execution that might overwhelm resources.

Handles errors gracefully.

This approach is super handy for processing API requests or background tasks in order.
*/

//without queue
const queue1 = new Promise((resolve) =>
  setTimeout(() => {
    console.log("Task 1 complete");
    resolve();
  }, 1000)
);

const queue2 = new Promise((resolve) =>
  setTimeout(() => {
    console.log("Task 2 complete");
    resolve();
  }, 500)
);

const queue3 = new Promise((resolve) =>
  setTimeout(() => {
    console.log("Task 3 complete");
    resolve();
  }, 800)
);
