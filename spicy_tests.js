import { repeat, repeatDemo, multiplyBy, tenTimes, 
    tenTimesFifty, everyEven, someEven, 
    filter, allEvensAreOdd, anEvenIsOdd,
    hasExactly } from "./src/spicy/spicy_9";

// repeatDemo();

// console.log(multiplyBy(2)(5));
// console.log(multiplyBy(4)(3));
// console.log(multiplyBy(3)(8));
// console.log(multiplyBy(7)(9));

// console.log(tenTimes(3));
// console.log(tenTimes(100));
// console.log(tenTimes(4));
// console.log(tenTimes(7));


// console.log(tenTimesFifty());

var fn = function(x) {
    return x == 1;
};

// console.log(everyEven([1, 2, 3, 4, 2, 1], fn));
// console.log(everyEven([1, 2, 1, 4, 1, 1], fn));
// console.log(everyEven([1, 2, 1, 4, 2, 1], fn));
// console.log(everyEven([1, 2, 1, 4, 1, 1], fn));

// console.log(someEven([3, 2, 3, 4, 3, 1], fn));
// console.log(someEven([1, 2, 1, 4, 1, 1], fn));
// console.log(someEven([5, 2, 7, 4, 2, 1], fn));
// console.log(someEven([1, 2, 1, 4, 1, 1], fn));

// console.log(filter([1, 1, 1, 1, 1, 1], fn));
// console.log(filter([2, 1, 4, 1, 4, 3], fn));
// console.log(filter([1, 2, 4, 4, 6, 3], fn));
// console.log(filter([1, 2, 1, 4, 1, 3], fn));

// console.log(allEvensAreOdd([3, 2, 3, 4, 3, 1]));
// console.log(allEvensAreOdd([2, 1, 4, 1, 4, 3]));
// console.log(allEvensAreOdd([1, 2, 5, 4, 9, 3]));
// console.log(allEvensAreOdd([5, 2, 7, 4, 2, 1]));

// console.log(anEvenIsOdd([3, 2, 3, 4, 3, 1]));
// console.log(anEvenIsOdd([2, 1, 4, 1, 4, 3]));
// console.log(anEvenIsOdd([1, 2, 5, 4, 9, 3]));
// console.log(anEvenIsOdd([5, 2, 7, 4, 2, 1]));

// console.log(hasExactly([1, 1, 1, 4, 3, 1], fn, 3));
// console.log(hasExactly([2, 0, 4, 1, 1, 1], fn, 3));
// console.log(hasExactly([1, 2, 5, 1, 9, 2], fn, 2));
// console.log(hasExactly([5, 2, 1, 4, 2, 1], fn, 4));