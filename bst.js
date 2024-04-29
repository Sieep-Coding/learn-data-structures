class BSTNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new BSTNode(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    remove(value) {
      this.root = this.removeNode(this.root, value);
    }
  
    removeNode(node, value) {
      if (node === null) {
        return null;
      }
  
      if (value === node.value) {
        if (node.left === null && node.right === null) {
          return null;
        }
  
        if (node.left === null) {
          return node.right;
        }
  
        if (node.right === null) {
          return node.left;
        }
  
        const minNode = this.findMin(node.right);
        node.value = minNode.value;
        node.right = this.removeNode(node.right, minNode.value);
        return node;
      }
  
      if (value < node.value) {
        node.left = this.removeNode(node.left, value);
        return node;
      }
  
      node.right = this.removeNode(node.right, value);
      return node;
    }
  
    findMin(node) {
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    }
  }
  
  const bst = new BinarySearchTree();
  const bstElement = document.getElementById('bstVisualization');
  
  function insertNode() {
    const value = parseInt(prompt('Enter a value to insert:'), 10);
    bst.insert(value);
    updateBSTVisualization();
  }
  
  function removeNode() {
    const value = parseInt(prompt('Enter a value to remove:'), 10);
    bst.remove(value);
    updateBSTVisualization();
  }
  
  function updateBSTVisualization() {
    bstElement.innerHTML = '';
    renderBSTNode(bst.root, bstElement);
  }
  
  function renderBSTNode(node, parentElement) {
    if (node === null) {
      return;
    }
  
    const nodeElement = document.createElement('div');
    nodeElement.className = 'bst-node';
    nodeElement.textContent = node.value;
    parentElement.appendChild(nodeElement);
  
    const leftElement = document.createElement('div');
    leftElement.className = 'left';
    nodeElement.appendChild(leftElement);
    renderBSTNode(node.left, leftElement);
  
    const rightElement = document.createElement('div');
    rightElement.className = 'right';
    nodeElement.appendChild(rightElement);
    renderBSTNode(node.right, rightElement);
  }