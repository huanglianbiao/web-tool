/*
 *  阶乘(n!) n * (n - 1) * (n - 2) * ... * 1
 *  0! = 1
 * */

/* 迭代阶乘 */
const factorialIterator = num => {
  if (typeof num !== "number" || num < 0) {
    return undefined;
  }

  let res = 1;
  while (num > 0) {
    res *= num;
    num--;
  }
  return res;
};

const factorial = num => {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
};

console.clear();
console.log(factorialIterator(5));
console.log(factorial(5));
