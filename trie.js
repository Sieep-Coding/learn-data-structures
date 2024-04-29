class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
      }
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children.has(char)) {
          return false;
        }
        node = node.children.get(char);
      }
      return node.isEndOfWord;
    }
  }
  
  const trie = new Trie();
  const trieElement = document.getElementById('trieVisualization');
  
  function insertWord() {
    const wordInput = document.getElementById('wordInput');
    const word = wordInput.value.trim();
    if (word !== '') {
      trie.insert(word);
      wordInput.value = '';
      updateTrieVisualization();
    }
  }
  
  function searchWord() {
    const wordInput = document.getElementById('wordInput');
    const word = wordInput.value.trim();
    if (word !== '') {
      const found = trie.search(word);
      alert(`The word "${word}" ${found ? 'exists' : 'does not exist'} in the trie.`);
    }
  }
  
  function updateTrieVisualization() {
    trieElement.innerHTML = '';
    renderTrieNode(trie.root, trieElement);
  }
  
  function renderTrieNode(node, parentElement) {
    node.children.forEach((childNode, char) => {
      const nodeElement = document.createElement('div');
      nodeElement.className = 'trie-node';
      if (childNode.isEndOfWord) {
        nodeElement.classList.add('end-of-word');
      }
      nodeElement.textContent = char;
      parentElement.appendChild(nodeElement);
      renderTrieNode(childNode, nodeElement);
    });
  }