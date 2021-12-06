import { getSum, getMedian, getStatistics } from './src/medium/medium_1';

console.log(getSum([0, 1, 2, 3, 4, 5]));
console.log(getSum([43, 345, 52, 2]));
console.log(getSum([]));
console.log(getSum([823904]));
console.log(getSum([-234, 234, 6949, -5934]));

console.log(getMedian([1, 2, 3, 4, 5]));
console.log(getMedian([1, 2, 3, 4, 5, 6]));
console.log(getMedian([23, -1, 343, 123, 0, 3]));
console.log(getMedian([6, 2, 3, 4, 5, 1]));
console.log(getMedian([]));

console.log(getStatistics([1, 2, 3, 4, 5]));
console.log(getStatistics([1, 2, 3, 4, 5, 6]));
console.log(getStatistics([23, -1, 343, 123, 0, 3]));
console.log(getStatistics([6, 2, 3, 4, 5, 1]));
console.log(getStatistics([]));