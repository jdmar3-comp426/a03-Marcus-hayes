import { variance } from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    var sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    if(array.length == 0) return 0;
    array.sort(function(a, b) {
        return a-b;
    });
    var midpoint = Math.floor(array.length/2);
    if(array.length % 2) {
        return array[midpoint];
    }
    return (array[midpoint-1] + array[midpoint])/2;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    var sum = 0;
    var median = 0;
    var mean = 0; 
    var vrnce = 0;
    var std_dvt = 0;
    var min = 0;
    var max = 0;
    if(array.length == 0) {
        return {
        length: array.length,
        sum: sum,
        mean: mean,
        median: median,
        min: min,
        max: max,
        variance: vrnce,
        standard_deviation: std_dvt
        }
    }
    sum = getSum(array);
    min = Math.min(...array);
    max = Math.max(...array);
    mean = sum/array.length;
    vrnce = variance(array, mean);
    median = getMedian(array);
    std_dvt = Math.sqrt(vrnce);
    return {
        length: array.length,
        sum: sum,
        mean: mean,
        median: median,
        min: min,
        max: max,
        variance: vrnce,
        standard_deviation: std_dvt
    }
}

