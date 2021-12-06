import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    const result = car_data.filter(car_obj => car_obj.torque >= minTorque && car_obj.horsepower >= minHorsepower)
        .sort(function(a,b) {b.horsepower - a.horsepower });
    return result;
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    const result = car_data.filter(car_obj => car_obj.highway_mpg >= minHighway && car_obj.city_mpg >= minCity);
    result.sort(function(a,b) {b.highway_mpg - a.highway_mpg });
    return result
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    const res_array = [];
    var cap_term = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
    car_data.forEach(item => {
        if (item.id.includes(cap_term)) {
            console.log(item.id);
            res_array.push(item);
        }
    });
    res_array.sort(function(a,b) {
        var a_loc = a.id.search(cap_term);
        var b_loc = b.id.search(cap_term);
        if(a_loc<b_loc) {
            return -1;
        } else if(a_loc>b_loc) {
            return 1;
        } else {
            return 0;
        }
    });
    return res_array

}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {
    const res_array = [];
    car_data.forEach(function(car) {
        if(years.indexOf(car.year) > -1) {
            res_array.push(car);
        }
    });
    return res_array;
}
