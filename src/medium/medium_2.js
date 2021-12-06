import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */

export const allCarStats = {
    avgMpg: mpg_data.reduce((target) => {
        let highway_avg = mpg_data.reduce( (ttl, next) => {
            return ttl + next.highway_mpg;
            }, 0)/mpg_data.length;
        let city_avg = mpg_data.reduce( (ttl, next) => {
            return ttl + next.city_mpg;
            }, 0)/mpg_data.length;
        target["city"] = city_avg;
        target["highway"] = highway_avg;
        return target;
    }, {}),
    allYearStats: getStatistics( mpg_data.map( (e) => e.year)),
    ratioHybrids: mpg_data.filter( 
        function(e) {
            return e.hybrid;
        }).length / mpg_data.length
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: mpg_data.filter((v,i,a) => a.findIndex(t=>(t.make === v.make))===i)
        .map(function(v, i, a) {
            var hybs = mpg_data.filter((e) => (e.hybrid && e.make === v.make)).map((e) => e.id)
                .sort().reverse();
            return {
                "make": v.make,
                "hybrids": hybs
            }
        }).filter((e) => e.hybrids.length > 0),
    avgMpgByYearAndHybrid: mpg_data.filter((v,i,a) => a.findIndex(t=>(t.year === v.year))===i)
        .map(function(v, i, a) {
          var obj = {};
          var nothyb_city = 0;
          var nothyb_hwy = 0;
          var hyb_city = 0;
          var hyb_hwy = 0;
          var nothyb_cnt = 0;
          var hyb_cnt = 0;

          mpg_data.forEach(function(e) {
            if(e.year === v.year && e.hybrid) {
                    hyb_city += e.city_mpg;
                    hyb_hwy += e.highway_mpg;
                    hyb_cnt += 1;
            } else {
                nothyb_city += e.city_mpg;
                nothyb_hwy += e.highway_mpg;
                nothyb_cnt += 1;
            }
          });

          obj[v.year] = {
            "hybrid": {
                "city": hyb_city/hyb_cnt,
                "highway": hyb_hwy/hyb_cnt
            },
            "notHybrid": {
                "city": nothyb_city/nothyb_cnt,
                "highway": nothyb_hwy/nothyb_cnt
            }
          }
          return obj;
        }
    )
}
