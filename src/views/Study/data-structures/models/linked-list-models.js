class Node {
  constructor(item) {
    this.item = item;
    this.next = undefined;
  }
}

class DoublyNode extends Node {
  constructor(item, prev, next) {
    super(item, next);
    this.prev = prev;
  }
}

export { Node, DoublyNode };
