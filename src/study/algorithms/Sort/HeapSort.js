/*
 * 堆排序算法
 * */
import { defaultCompare, swap, Compare } from "../../data-structures/utils";

function heapify(array, index, heapSize, compareFn) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  if (left < heapSize && compareFn(array[left], array[largest]) === Compare.BIGGER_THAN) {
    largest = left;
  }
  if (right < heapSize && compareFn(array[right], array[largest]) === Compare.BIGGER_THAN) {
    largest = right;
  }
  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, largest, heapSize, compareFn);
  }
}

// 将数组转换为最大二叉堆
function buildMaxHeap(array, compareFn) {
  const start = Math.ceil((array.length - 1) / 2);
  for (let i = start; i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}

export default function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn);
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize, compareFn);
  }
  return array;
}

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log("heapSort: ", arr);
console.log("heapSort: ", heapSort(arr));
