class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the rear of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    // Return the front element of the queue without removing it
    front() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  }
  
  const queue = new Queue();
  const queueElement = document.getElementById('queue');
  
  function enqueueElement() {
    const element = prompt('Enter an element to enqueue:');
    queue.enqueue(element);
    updateQueueVisualization();
  }
  
  function dequeueElement() {
    const dequeuedElement = queue.dequeue();
    if (dequeuedElement !== null) {
      alert(`Dequeued element: ${dequeuedElement}`);
      updateQueueVisualization();
    } else {
      alert('Queue is empty!');
    }
  }
  
  function updateQueueVisualization() {
    queueElement.innerHTML = '';
    for (let i = 0; i < queue.size(); i++) {
      const elementDiv = document.createElement('div');
      elementDiv.className = 'queue-element';
      elementDiv.textContent = queue.items[i];
      queueElement.appendChild(elementDiv);
    }
  }