// src/workers/feedbackWorker.ts
export {};

self.onmessage = async () => {
  const response = await fetch('http://localhost:3000/feedback');
  const feedbacks = await response.json();
  postMessage(feedbacks);
  console.log(feedbacks)
};
