import Stack from "./data-structures/Stack/Stack.object";
import LinkedList from "./data-structures/LinkedList/LinkedList";
import DoublyLinkedList from "./data-structures/LinkedList/DoublyLinkedList";
import CircularLinkedList from "./data-structures/LinkedList/CircularLinkedList";
import DoublyCircularLinkedList from "./data-structures/LinkedList/DoublyCircularLinkedList";
import SortedLinkedList from "./data-structures/LinkedList/SortedLinkedList";
import StackLinkedList from "./data-structures/LinkedList/StackLinkedList";
import Set from "./data-structures/Set/Set";
import Dictionary from "./data-structures/Dictionary/Dictionary";
import HashTable from "./data-structures/HashTable/HashTable";
import HashTableSplitLink from "./data-structures/HashTable/HashTableSplitLink";
import HashTableLinearProbing from "./data-structures/HashTable/HashTableLinearProbing";
import "./ECMAScript";
import "./algorithms";

console.log("----------------------debug start----------------------");
console.log("--------------------------Stack-----------------------------");
const stack = new Stack();
stack.push("a", "b");

console.log(stack.items, stack.size());

console.log("--------------------------LinkedList-----------------------------");
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

// console.log(stackLinkedList.pop());
// console.log(stackLinkedList.peak());
// console.log(stackLinkedList.clear());
// console.log(stackLinkedList.size());

const set = new Set();

set.add(1);
set.add("2");
set.add(1);
set.delete(1);
set.clear();

// console.log(set.items, set.size());

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
const arr3 = [1, 2, 3, 4, 5, 6];

const set1 = new Set(...arr1);
const set2 = new Set(...arr2);
const set3 = new Set(...arr3);

// console.log("并集：", set1.union(set2).values());
// console.log("交集：", set1.intersection(set2).values());
// console.log("差集：", set1.difference(set2).values());
// console.log("子集：", set1.isSubset(set2));
// console.log("子集：", set1.isSubset(set3));

const dictionary = new Dictionary();

dictionary.set("a", 1);
dictionary.set("b", 2);
dictionary.set("a", 3);

// dictionary.forEach((value, key) => {
//   console.log(value, key, 111);
// });
//
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.size());
console.log("--------------------------HashTable-----------------------------");
const hashTable = new HashTable();
const obj = { a: 1 };
const fn = function() {
  const a = 0;
  console.log(a);
};
hashTable.put(1, 1);
hashTable.put(294, 294);
hashTable.put("abc", "ABC");
hashTable.put("acb", "ACB");
hashTable.put("bac", "BAC");
hashTable.put("bca", "BCA");
hashTable.put("cab", "CAB");
hashTable.put("cba", "CBA");
hashTable.put(999900, "300");
hashTable.put(obj, "OBJECT");
hashTable.put(fn, "FUNCTION");
hashTable.put(undefined, "undefined");

// console.log(hashTable.get(1));
// console.log(hashTable.get("ab"));
// console.log(hashTable.get("ba"));
// console.log(hashTable.get(obj));
// console.log(hashTable.get(fn));
// console.log(hashTable.get());
console.log(hashTable.table);

console.log("--------------------------HashTableSplitLink-----------------------------");
const hashTableSplitLink = new HashTableSplitLink();
hashTableSplitLink.put(1, 1);
hashTableSplitLink.put("ab", "AB");
hashTableSplitLink.put("ba", "BA");
hashTableSplitLink.put(obj, "OBJECT");
hashTableSplitLink.put(fn, "FUNCTION");
hashTableSplitLink.put(undefined, "undefined");

console.log(hashTableSplitLink.get(1));
console.log(hashTableSplitLink.get("ab"));
console.log(hashTableSplitLink.get("ba"));
console.log(hashTableSplitLink.get(obj));
console.log(hashTableSplitLink.get(fn));
console.log(hashTableSplitLink.get());
// console.log(hashTableSplitLink.keyValues());
// console.log(hashTableSplitLink.keys());
// console.log(hashTableSplitLink.values());

console.log("--------------------------HashTableLinearProbing-----------------------------");
const hashTableLinearProbing = new HashTableLinearProbing();
hashTableLinearProbing.put(1, 1);
hashTableLinearProbing.put(294, 294);
hashTableLinearProbing.put("abc", "ABC");
hashTableLinearProbing.put("acb", "ACB");
hashTableLinearProbing.put("bac", "BAC");
hashTableLinearProbing.put("bca", "BCA");
hashTableLinearProbing.put("cab", "CAB");
hashTableLinearProbing.put("cba", "CBA");
hashTableLinearProbing.put(999900, "300");
hashTableLinearProbing.put(obj, "OBJECT");
hashTableLinearProbing.put(fn, "FUNCTION");
hashTableLinearProbing.put(undefined, "undefined");

console.log(hashTableLinearProbing.get(1));
console.log(hashTableLinearProbing.get(294));
console.log(hashTableLinearProbing.get("abc"));
console.log(hashTableLinearProbing.get("acb"));
console.log(hashTableLinearProbing.get("bac"));
console.log(hashTableLinearProbing.get("bca"));
console.log(hashTableLinearProbing.get("cab"));
console.log(hashTableLinearProbing.get("cba"));
console.log(hashTableLinearProbing.get(obj));
console.log(hashTableLinearProbing.get(fn));
console.log(hashTableLinearProbing.get());
console.log(hashTableLinearProbing.get(300));

console.log(hashTableLinearProbing.remove("abc"));
// console.log(hashTableLinearProbing.get("acb"));

console.log(hashTableLinearProbing.keyValues());
console.log(hashTableLinearProbing.values());

console.log("----------------------debug end------------------------");
