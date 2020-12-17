import Graph from "./Graph";
import Stack from "@study/data-structures/Stack/Stack.object";
import { breadthFirstSearch, BFS } from "./BreadthFirstSearch";

console.log("--------------------------Graph-----------------------------");
const graph = new Graph();

const vertices = ["A", "B", "C", "D", "E", "F", "G"];

vertices.forEach(v => graph.addVertex(v));

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("E", "F");
graph.addEdge("F", "G");

console.log(graph.getVertices());
console.log(graph.getAdjList());
console.log(graph.toString());

breadthFirstSearch(graph, vertices[0], v => {
  console.log("breadthFirstSearch: ", v);
});

const { distances, vertexParent } = BFS(graph, vertices[0]);

console.log(distances, vertexParent);

getVertexPath(vertices, vertexParent);

function getVertexPath(vertices, vertexParent) {
  const fromVertex = vertices[0];

  vertices.forEach((item, index) => {
    if (index > 0) {
      const toVertex = item;
      const path = new Stack();
      for (let v = toVertex; v !== fromVertex; v = vertexParent[v]) {
        path.push(v);
      }
      path.push(fromVertex);

      let s = path.pop();
      while (!path.isEmpty()) {
        s += `-${path.pop()}`;
      }
      console.log(s);
    }
  });
}

console.log("--------------------------Graph-----------------------------");
