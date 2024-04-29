class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    // Return the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  }
  
  const stack = new Stack();
  const stackElement = document.getElementById('stack');
  
  function pushElement() {
    const element = prompt('Enter an element to push:');
    stack.push(element);
    updateStackVisualization();
  }
  
  function popElement() {
    const poppedElement = stack.pop();
    if (poppedElement !== null) {
      alert(`Popped element: ${poppedElement}`);
      updateStackVisualization();
    } else {
      alert('Stack is empty!');
    }
  }
  
  function updateStackVisualization() {
    stackElement.innerHTML = '';
    for (let i = stack.size() - 1; i >= 0; i--) {
      const elementDiv = document.createElement('div');
      elementDiv.className = 'stack-element';
      elementDiv.textContent = stack.items[i];
      stackElement.appendChild(elementDiv);
    }
  }