class Graph {
    constructor() {
      this.vertices = new Map();
      this.edges = [];
    }
  
    addVertex(value) {
      if (!this.vertices.has(value)) {
        this.vertices.set(value, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.vertices.has(vertex1)) {
        this.addVertex(vertex1);
      }
      if (!this.vertices.has(vertex2)) {
        this.addVertex(vertex2);
      }
  
      this.vertices.get(vertex1).push(vertex2);
      this.vertices.get(vertex2).push(vertex1);
      this.edges.push([vertex1, vertex2]);
    }
  }
  
  const graph = new Graph();
  const graphElement = document.getElementById('graphVisualization');
  
  function addVertex() {
    const value = prompt('Enter a value for the new vertex:');
    graph.addVertex(value);
    updateGraphVisualization();
  }
  
  function addEdge() {
    const vertex1 = prompt('Enter the first vertex:');
    const vertex2 = prompt('Enter the second vertex:');
    graph.addEdge(vertex1, vertex2);
    updateGraphVisualization();
  }
  
  function updateGraphVisualization() {
    graphElement.innerHTML = '';
  
    const vertexElements = new Map();
  
    graph.vertices.forEach((_, vertex) => {
      const vertexElement = document.createElement('div');
      vertexElement.className = 'vertex';
      vertexElement.textContent = vertex;
      vertexElement.dataset.vertex = vertex;
      graphElement.appendChild(vertexElement);
      vertexElements.set(vertex, vertexElement);
    });
  
    graph.edges.forEach(edge => {
      const [vertex1, vertex2] = edge;
      const vertex1Element = vertexElements.get(vertex1);
      const vertex2Element = vertexElements.get(vertex2);
  
      const edgeElement = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      edgeElement.className = 'edge';
      edgeElement.setAttribute('x1', vertex1Element.offsetLeft + vertex1Element.offsetWidth / 2);
      edgeElement.setAttribute('y1', vertex1Element.offsetTop + vertex1Element.offsetHeight / 2);
      edgeElement.setAttribute('x2', vertex2Element.offsetLeft + vertex2Element.offsetWidth / 2);
      edgeElement.setAttribute('y2', vertex2Element.offsetTop + vertex2Element.offsetHeight / 2);
  
      graphElement.appendChild(edgeElement);
    });
  }