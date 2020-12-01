import BinarySearchTree from "./BinarySearchTree";
import AVLTree from "./AVLTree";

console.log("--------------------------BinarySearchTree-----------------------------");
const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(3);
binarySearchTree.insert(5);
binarySearchTree.insert(6);
binarySearchTree.insert(7);
binarySearchTree.insert(25);
binarySearchTree.insert(8);
binarySearchTree.insert(9);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(11);
binarySearchTree.insert(12);
binarySearchTree.insert(13);
binarySearchTree.insert(18);
binarySearchTree.insert(14);
binarySearchTree.insert(15);

console.log("min: ", binarySearchTree.min());
console.log("max: ", binarySearchTree.max());
console.log("find: ", binarySearchTree.search(1));
console.log("find: ", binarySearchTree.remove(3));
console.log("binarySearchTree: ", binarySearchTree.root);

const aVLTree = new AVLTree();

aVLTree.insert(3);
aVLTree.insert(5);
aVLTree.insert(6);
aVLTree.insert(7);
aVLTree.insert(25);
aVLTree.insert(8);
aVLTree.insert(9);
aVLTree.insert(20);
aVLTree.insert(10);
aVLTree.insert(11);
aVLTree.insert(12);
aVLTree.insert(13);
aVLTree.insert(18);
aVLTree.insert(14);
aVLTree.insert(15);

aVLTree.remove(10);

console.log("aVLTree: ", aVLTree.root);

// binarySearchTree.inOrderTraversal(item => {
//   // console.log("in: ", item);
// });
//
// binarySearchTree.preOrderTraversal(item => {
//   // console.log("pre: ", item);
// });
//
// binarySearchTree.postOrderTraversal(item => {
//   // console.log("post: ", item);
// });

console.log("--------------------------BinarySearchTree-----------------------------");
