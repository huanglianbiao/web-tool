import LinkedList from "./data-structures-algorithms/LinkedList/LinkedList";
import DoublyLinkedList from "./data-structures-algorithms/LinkedList/DoublyLinkedList";

console.log("----------------------debug start----------------------");

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);

// console.log(linkedList.insert("a", 3));
// linkedList.insert(3, 2);

// console.log(linkedList.remove(2));
// console.log(linkedList.getHead());
// console.log((linkedList.indexOf(4)));
// linkedList.removeByIndex(1);
// linkedList.remove(4);
// linkedList.clear();
// console.log(linkedList.getHead());
// console.log(linkedList.getItemByIndex(1));

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push("a");
// doublyLinkedList.insert("a", 1);
// doublyLinkedList.insert("b", 1);
// console.log(doublyLinkedList.getHead());

// console.log(doublyLinkedList.removeByIndex(1));
console.log(doublyLinkedList.remove("1"));

console.log(doublyLinkedList.getHead());
console.log("size: ", doublyLinkedList.size());
console.log("tail: ", doublyLinkedList.getTail());

console.log("----------------------debug end------------------------");
