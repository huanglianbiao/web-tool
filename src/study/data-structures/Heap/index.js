import MinHeap from "./MinHeap";
import MaxHeap from "./MaxHeap";

console.log("--------------------------MinHeap-----------------------------");
const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(6);
minHeap.insert(4);
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(7);
minHeap.insert(1);
minHeap.insert(8);

console.log(minHeap.heap);

minHeap.extract();
console.log(minHeap.heap);
console.log(minHeap.peak());

const maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(6);
maxHeap.insert(4);
maxHeap.insert(3);
maxHeap.insert(2);
maxHeap.insert(7);
maxHeap.insert(1);
maxHeap.insert(8);

console.log(maxHeap.heap);

maxHeap.extract();
console.log(maxHeap.heap);
console.log(maxHeap.peak());

console.log("--------------------------MinHeap-----------------------------");
