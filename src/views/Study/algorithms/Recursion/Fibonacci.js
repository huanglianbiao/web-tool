import { isInvalidValue } from "../../data-structures/utils";
/*
 * 斐波那契数列
 * */

/* 迭代方式 */
const fibonacciIterator = n => {
  if (n < 0) {
    return undefined;
  }

  if (n === 0) {
    return 0;
  }

  if (n <= 2) {
    return 1;
  }
  let fbncMinus2 = 0;
  let fbncMinus1 = 1;
  let fbncN = 0;

  for (let i = 2; i <= n; i++) {
    fbncN = fbncMinus2 + fbncMinus1;

    fbncMinus2 = fbncMinus1;
    fbncMinus1 = fbncN;
  }

  return fbncN;
};

const fibonacci = n => {
  if (n < 1) {
    return 0;
  }

  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
};

const fibonacciCache = n => {
  if (n < 1) {
    return 0;
  }

  let cache = [0, 1, 1];

  const fibonacci = index => {
    if (!isInvalidValue(cache[index])) {
      return cache[index];
    }

    return (cache[index] = fibonacci(index - 2) + fibonacci(index - 1));
  };

  return fibonacci(n);
};

console.time("fibonacciIterator");
console.log("fibonacci: ", fibonacciIterator(1111));
console.timeEnd("fibonacciIterator");

// console.time("fibonacci");
// console.log("fibonacci: ", fibonacci(111));
// console.timeEnd("fibonacci");

console.time("fibonacciCache");
console.log("fibonacci: ", fibonacciCache(1111));
console.timeEnd("fibonacciCache");
