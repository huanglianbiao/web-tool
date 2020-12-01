import BinarySearchTree from "./BinarySearchTree";
import { defaultCompare, BalanceFactor, isInvalidValue, Compare } from "../utils";
import { RedBlackNode, Colors } from "../models/tree-models";

export default class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
  }

  insert(item) {
    if (isInvalidValue(this.root)) {
      this.root = new RedBlackNode(item);
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, item);
      // 插入后，需验证是否满足红黑树，及平衡树的规则
      this.fixTree(newNode);
    }
  }

  insertNode(node, item) {
    if (this.compareFn(item, node.item) === Compare.LESS_THAN) {
      if (isInvalidValue(node.left)) {
        node.left = new RedBlackNode(item);
        node.left.parent = node;
        return node.left;
      } else {
        return this.insertNode(node.left, item);
      }
    } else {
      if (isInvalidValue(node.right)) {
        node.right = new RedBlackNode(item);
        node.right.parent = node;
        return node.right;
      } else {
        return this.insertNode(node.right, item);
      }
    }
  }

  fixTree(node) {
    // 因为节点color初始给的是：Colors.RED，因此判断节点的父节点也是同样的颜色
    while (node?.parent?.isRend()) {
      const parent = node.parent;
      const grandParent = node.parent.parent;
      // A: 父节点为左侧子节点
      if (grandParent.left === parent) {
        // 叔节点
        const uncle = grandParent.right;
        if (uncle.isRed()) {
        }
      }
    }
  }
}
