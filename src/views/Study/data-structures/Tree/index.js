import BinarySearchTree from "./BinarySearchTree";

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
console.log("root: ", binarySearchTree.root);

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
