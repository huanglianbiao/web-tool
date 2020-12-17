import Dictionary from "../Dictionary/Dictionary";

export default class Graph {
  /*
   * params @isDirected: Boolean 是否为有向图
   * */
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = []; // 顶点
    this.adjList = new Dictionary(); // 邻接表(Adjacency List)，或可使用Map
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.adjList.get(v1).push(v2);

    // 若不是有向图，则需要相互关联
    if (!this.isDirected) {
      this.adjList.get(v2).push(v1);
    }
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    const adjList = this.getAdjList().keyValues();
    let str = "";

    adjList.forEach(item => {
      str += `${item.key} -> ${item.value.join(" ")}\n`;
    });

    return str;
  }
}
