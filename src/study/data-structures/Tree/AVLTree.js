import BinarySearchTree from "./BinarySearchTree";
import { defaultCompare, BalanceFactor, isInvalidValue, Compare } from "../utils";
import Node from "../models/tree-models";

/*
 * AVL树（平衡二叉搜索树）
 * */

export default class AVLTree extends BinarySearchTree {
  constructor(compare = defaultCompare) {
    super(compare);
  }

  getNodeHeight(node) {
    if (isInvalidValue(node)) {
      return -1;
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  getBalanceFactor(node) {
    const diffHeight = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (diffHeight) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  rotationLL(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;

    return temp;
  }

  rotationRR(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;

    return temp;
  }

  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }

  insert(item) {
    this.root = this.insertNode(this.root, item);
  }

  insertNode(node, item) {
    if (isInvalidValue(node)) {
      return new Node(item);
    }

    if (this.compareFn(item, node.item) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, item);
    } else if (this.compareFn(item, node.item) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, item);
    } else {
      return node; // 已存在
    }

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(item, node.item) === Compare.LESS_THAN) {
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    } else if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(item, node.item) === Compare.BIGGER_THAN) {
        node = this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }
    return node;
  }

  remove(item) {
    const node = super.removeNode(this.root, item);
    if (isInvalidValue(node)) {
      return undefined;
    }

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left);

      if ([BalanceFactor.UNBALANCED_LEFT, BalanceFactor.SLIGHTLY_UNBALANCED_LEFT].includes(balanceFactorLeft)) {
        return this.rotationLL(node);
      }

      if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node);
      }
    }

    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node);

      if ([BalanceFactor.UNBALANCED_RIGHT, BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT].includes(balanceFactorRight)) {
        return this.rotationRR(node);
      }

      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node);
      }
    }

    return node;
  }
}
