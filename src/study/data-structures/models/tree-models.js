export default class Node {
  constructor(item) {
    this.item = item;
    this.left = undefined;
    this.right = undefined;
  }
}

const Colors = {
  RED: Symbol("Red node of the tree"),
  BLACK: Symbol("Black node of the tree")
};

class RedBlackNode extends Node {
  constructor(item) {
    super(item);
    this.parent = undefined;
    this.color = Colors.RED;
  }

  isRed() {
    return this.color === Colors.RED;
  }
}

export { Colors, RedBlackNode };
