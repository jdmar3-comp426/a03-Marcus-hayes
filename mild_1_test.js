import { sumToString, getIncreasingArray, maxAndMin, countArray } from "./src/mild/mild_1";

// Mild_1 Tests
console.log(sumToString(0, 2));
console.log(sumToString(-2, 2));
console.log(sumToString(1, -2));
console.log(sumToString(543, 453));
console.log(sumToString(-5, -5));

console.log(getIncreasingArray(1,5));
console.log(getIncreasingArray(0,4));
console.log(getIncreasingArray(-1,6));
console.log(getIncreasingArray(3,2));
console.log(getIncreasingArray(5,15));

console.log(maxAndMin([1, 2, 3, 4, 5]));
console.log(maxAndMin([3, 5, 2, 0]));
console.log(maxAndMin([0]));
console.log(maxAndMin([]));
console.log(maxAndMin([-5, 2342, -234, 495, 9]));

console.log(countArray([1, 2, 3, 2, 1]));
console.log(countArray([1, 2, 'noice', 4, 'willis']));
console.log(countArray([1, 2, 3, 'key', 'key', 2, 534, 2, 'narc']));
console.log(countArray(['abe', 'bra', 'clam', 'dad', 'camping', 'bra', 'abe']));
console.log(countArray([]));