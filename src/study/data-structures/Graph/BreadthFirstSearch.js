import { Colors } from "../utils";
import Queue from "../Queue/Queue";

const initColor = vertices => {
  const color = {};
  vertices.forEach(v => (color[v] = Colors.WHITE));
  return color;
};

const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initColor(vertices);

  const queue = new Queue();
  queue.enqueue(startVertex);
  color[startVertex] = Colors.GRAY; // 被访问，未被完全探索

  while (!queue.isEmpty()) {
    const first = queue.dequeue();
    const neighbors = adjList.get(first); // 邻接表

    neighbors.forEach(v => {
      // 只入队未被访问的节点，否则会出现死循环
      if (color[v] === Colors.WHITE) {
        queue.enqueue(v);
        color[v] = Colors.GRAY;
      }
    });

    color[first] = Colors.BLACK;
    if (callback) {
      callback(first);
    }
  }
};

const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = {};

  const distances = {};
  const vertexParent = {};
  vertices.forEach(v => {
    distances[v] = 0;
    vertexParent[v] = null;
  });

  const queue = new Queue();
  queue.enqueue(startVertex);
  color[startVertex] = Colors.GRAY;

  while (!queue.isEmpty()) {
    const first = queue.dequeue();
    const neighbors = adjList.get(first);
    neighbors.forEach(v => {
      if (!color[v]) {
        queue.enqueue(v);
        color[v] = Colors.GRAY;

        distances[v] = distances[first] + 1; // 节点的层级等于父节点的层级+1
        vertexParent[v] = first;
      }
    });
    color[first] = Colors.BLACK;
  }

  return { distances, vertexParent };
};

export { breadthFirstSearch, BFS };
