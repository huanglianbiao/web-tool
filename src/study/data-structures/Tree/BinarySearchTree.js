import Node from "../models/tree-models";
import { Compare, defaultCompare, isInvalidValue } from "../utils";

/*
 * 二叉搜索树
 * */

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = undefined;
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
    return node;
  }

  // 中序遍历：从小到大顺序访问节点
  inOrderTraversal(cb) {
    const traversalNode = (node, callback) => {
      if (!isInvalidValue(node)) {
        traversalNode(node.left, callback);
        callback(node.item);

        traversalNode(node.right, callback);
      }
    };

    traversalNode(this.root, cb);
  }

  // 先序遍历：优先遍历后代节点
  preOrderTraversal(cb) {
    const traversalNode = (node, callback) => {
      if (!isInvalidValue(node)) {
        callback(node.item);

        traversalNode(node.left, callback);
        traversalNode(node.right, callback);
      }
    };

    traversalNode(this.root, cb);
  }

  postOrderTraversal(cb) {
    const traversalNode = (node, callback) => {
      if (!isInvalidValue(node)) {
        traversalNode(node.left, callback);
        traversalNode(node.right, callback);

        callback(node.item);
      }
    };

    traversalNode(this.root, cb);
  }

  // 最小节点
  min() {
    return this.minNode(this.root)?.item;
  }

  minNode(node) {
    while (!isInvalidValue(node) && !isInvalidValue(node.left)) {
      node = node.left;
    }

    return node.item;
  }

  max() {
    let node = this.root;
    while (!isInvalidValue(node) && !isInvalidValue(node.right)) {
      node = node.right;
    }

    return node.item;
  }

  search(item) {
    const search = node => {
      if (isInvalidValue(node)) {
        return false;
      }

      if (this.compareFn(item, node.item) === Compare.LESS_THAN) {
        return search(node.left);
      } else if (this.compareFn(item, node.item) === Compare.BIGGER_THAN) {
        return search(node.right);
      } else {
        return true;
      }
    };

    return search(this.root);
  }

  remove(item) {
    // 更新树
    this.root = this.removeNode(this.root, item);
  }

  removeNode(node, item) {
    if (isInvalidValue(node)) {
      return undefined;
    }

    if (this.compareFn(item, node.item) === Compare.LESS_THAN) {
      // 如果要找的值比当前节点小，就继续往左树找
      // 更新左树
      node.left = this.removeNode(node.left, item);
      return node;
    } else if (this.compareFn(item, node.item) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, item);
      return node;
    } else {
      // 找到需要删除元素后

      /* 第一种情况 */
      if (isInvalidValue(node.left) && isInvalidValue(node.right)) {
        // 删除该节点，并处理父节点的引用
        node = undefined;
        return node;
      }

      /* 第二种情况 */
      if (isInvalidValue(node.left)) {
        node = node.right; // 用将左子树地址覆盖该节点，即删除
        return node;
      }
      if (isInvalidValue(node.right)) {
        node = node.left;
        return node;
      }

      /* 第三种情况 */
      //  左右子节点都有

      // a. 重置该节点及右子树
      // b. 找到右子树的最小节点
      // c. 覆盖当前节点的值，right指针正确，不需要修改。此时，需要删除的节点实际已被删除
      // d. 但是，右子树中最小节点父节点指针还有问题。因为，最小节点已被挪动，位置上已为空
      // e. 删除右子树最小节点

      // 至于为什么要挪动最小节点，目的就是为了让该二叉树是一颗二叉搜索树
      const rightMinNode = this.minNode(node.right);
      node.item = rightMinNode.item;
      node.right = this.removeNode(node.right, rightMinNode.item);
      return node;
    }
  }
}
