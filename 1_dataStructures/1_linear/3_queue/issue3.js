class RateLimitedQueue {
  constructor(interval) {
    this.queue = [];
    this.interval = interval;
    this.processing = false;
  }

  enqueue(task) {
    this.queue.push(task);
    this.processNext();
  }

  processNext() {
    if (this.processing || this.queue.length === 0) return;

    this.processing = true;
    const task = this.queue.shift();

    setTimeout(async () => {
      try {
        await task();
      } catch (error) {
        console.error("API request failed:", error);
      }
      this.processing = false;
      this.processNext();
    }, this.interval);
  }
}

// Example usage: Rate limit of 1 second per request
const apiQueue = new RateLimitedQueue(1000);

apiQueue.enqueue(() =>
  fetch("https://api.example.com/data1")
    .then((res) => res.json())
    .then((data) => console.log("Received:", data))
);
apiQueue.enqueue(() =>
  fetch("https://api.example.com/data2")
    .then((res) => res.json())
    .then((data) => console.log("Received:", data))
);
apiQueue.enqueue(() =>
  fetch("https://api.example.com/data3")
    .then((res) => res.json())
    .then((data) => console.log("Received:", data))
);

// API requests will be sent every 1 second, avoiding rate-limit issues.
/*
Why Is This Useful?
Prevents exceeding API rate limits.

Ensures smooth data fetching without errors.

Works well for social media APIs, payment systems, or any limited endpoint.

This method is handy when working with services like Twitter or OpenAI APIs that enforce strict request limits. Want another queue-related issue? I’ve got plenty!
*/
