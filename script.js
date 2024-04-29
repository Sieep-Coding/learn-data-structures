class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Add a node to the end of the list
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    // Remove a node from the list
    remove(value) {
      if (!this.head) return;
      if (this.head.value === value) {
        this.head = this.head.next;
        this.size--;
        return;
      }
      let current = this.head;
      while (current.next) {
        if (current.next.value === value) {
          current.next = current.next.next;
          this.size--;
          return;
        }
        current = current.next;
      }
    }
  
    // Traverse the list and print the values
    traverse() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  const linkedList = new LinkedList();
  const linkedListElement = document.getElementById('linkedList');
  
  function appendNode() {
    const value = prompt('Enter a value to append:');
    linkedList.append(value);
    updateVisualization();
  }
  
  function removeNode() {
    const value = prompt('Enter a value to remove:');
    linkedList.remove(value);
    updateVisualization();
  }
  
  function updateVisualization() {
    linkedListElement.innerHTML = '';
    let current = linkedList.head;
    while (current) {
      const nodeElement = document.createElement('div');
      nodeElement.className = 'node';
      nodeElement.textContent = current.value;
      linkedListElement.appendChild(nodeElement);
      current = current.next;
    }
  }