import LinkedList from "./data-structures/LinkedList/LinkedList";
import DoublyLinkedList from "./data-structures/LinkedList/DoublyLinkedList";
import CircularLinkedList from "./data-structures/LinkedList/CircularLinkedList";
import DoublyCircularLinkedList from "./data-structures/LinkedList/DoublyCircularLinkedList";
import SortedLinkedList from "./data-structures/LinkedList/SortedLinkedList";
import StackLinkedList from "./data-structures/LinkedList/StackLinkedList";

console.log("----------------------debug start----------------------");

const linkedList = new LinkedList();
linkedList.insert(1, 0);
linkedList.insert(2, 0);
// linkedList.insert(2);

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
// console.log(doublyLinkedList.remove("1"));
//
// console.log(doublyLinkedList.getHead());
// console.log("size: ", doublyLinkedList.size());
// console.log("tail: ", doublyLinkedList.getTail());

const circularLinkedList = new CircularLinkedList();
circularLinkedList.push(1);
circularLinkedList.push(2);
circularLinkedList.push(3);
// circularLinkedList.insert("a", 0);
// circularLinkedList.insert("b", 3);
circularLinkedList.removeByIndex(0);
circularLinkedList.remove(2);
// console.log(circularLinkedList.getHead());

const doublyCircularLinkedList = new DoublyCircularLinkedList();
doublyCircularLinkedList.push(1);
doublyCircularLinkedList.push(2);
doublyCircularLinkedList.push(3);
doublyCircularLinkedList.push("a");

// doublyCircularLinkedList.insert("a", 3);
// doublyCircularLinkedList.insert("b", 4);
// console.log(doublyCircularLinkedList.getHead());
// console.log(doublyCircularLinkedList.removeByIndex(3));
// console.log(doublyCircularLinkedList.remove(3));
// console.log(doublyCircularLinkedList.getHead());
// console.log(doublyCircularLinkedList.getTail());

const sortedLinkedList = new SortedLinkedList();

// console.log(sortedLinkedList.insert(5));
// console.log(sortedLinkedList.insert(4));
// console.log(sortedLinkedList.insert(7));
// console.log(sortedLinkedList.insert(6));
// console.log(sortedLinkedList.push(6));
// console.log(sortedLinkedList.push(0));
// console.log(sortedLinkedList.getHead());

const stackLinkedList = new StackLinkedList();

stackLinkedList.push(1);
stackLinkedList.push(2);
stackLinkedList.push(3);

console.log(stackLinkedList.pop());
console.log(stackLinkedList.peak());
console.log(stackLinkedList.clear());
console.log(stackLinkedList.size());

console.log("----------------------debug end------------------------");
