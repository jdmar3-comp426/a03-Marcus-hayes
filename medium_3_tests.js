import { searchByYear, searchHighPower, searchMpg, searchName } from './src/medium/medium_3';
import mpg_data from "./src/medium/data/mpg_data.js";

console.log('Reference Array Length: ' + mpg_data.length);

// console.log(searchHighPower(mpg_data, 10, 15).length);
// console.log(searchHighPower(mpg_data, 200, 15).length);
// console.log(searchHighPower(mpg_data, 150, 400).length);
// console.log(searchHighPower(mpg_data, 300, 400).length);

// searchMpg(mpg_data, 10, 10).forEach(item => {
//     console.log(`(${item.highway_mpg}, ${item.city_mpg})`);
// });
// searchMpg(mpg_data, 20, 20).forEach(item => {
//     console.log(`(${item.highway_mpg}, ${item.city_mpg})`);
// });
searchMpg(mpg_data, 35, 25).forEach(item => {
    console.log(`(${item.highway_mpg}, ${item.city_mpg})`);
});
// console.log(searchMpg(mpg_data, 15, 30).length);

// console.log(searchName(mpg_data, 'taurus').length);
// console.log(searchName(mpg_data, 'SEL').length);

// console.log(searchByYear(mpg_data, [2010]).length);
// console.log(searchByYear(mpg_data, [2011]).length);
// console.log(searchByYear(mpg_data, [2012]).length);
// console.log(searchByYear(mpg_data, [2009, 2010, 2011, 2012]).length);



