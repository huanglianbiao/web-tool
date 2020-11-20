import "./Tree";
import LinkedList from "./LinkedList/LinkedList";

//给出两个非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照逆序的方式存储的，并且它们的每个节点只能存储一位数字。
//
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
//
// 您可以假设除了数字 0 之外，这两个数都不会以 0开头。
//
// 示例：
//
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
const linkedList1 = new LinkedList();
linkedList1.push(2);
linkedList1.push(4);
linkedList1.push(3);

const linkedList2 = new LinkedList();
linkedList2.push(5);
linkedList2.push(6);
linkedList2.push(4);

const getNum = linkedList => {
  let list = [linkedList.item];

  let node = linkedList.next;
  while (node) {
    list.push(node.item);
    node = node.next;
  }
  return Number(list.reverse().join(""));
};

const addTwoNumbers = function(l1, l2) {
  let count = `${getNum(l1) + getNum(l2)}`;
  let countList = count.split("").map(item => Number(item));

  const linkedList = new LinkedList();
  linkedList.push(countList.pop());

  while (countList.length) {
    linkedList.push(countList.pop());
  }

  return linkedList.getHead();
};

console.log("leet Code addTwoNumbers: ", addTwoNumbers(linkedList1.getHead(), linkedList2.getHead()));
