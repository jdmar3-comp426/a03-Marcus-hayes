import { identifyArray, identifyVariable, removeKey, removeKeys, removeKeyNonDestructive } from "./src/mild/mild_2"

//Mild_2 Tests
console.log(identifyVariable(1));
console.log(identifyVariable('a'));
console.log(identifyVariable(true));
console.log(identifyVariable([]));
console.log(identifyVariable({}));

console.log(identifyArray([1, 2, 3, 4]));
console.log(identifyArray(['a', 'asdf', true, 9]));
console.log(identifyArray([{}, ' ', false, -1231]));
console.log(identifyArray([['a'], 'asdf', true, 9]));
console.log(identifyArray(['a', ['asdf', {}, 123], true, 9]));

let test_obj1 = {
    'fingers': 5,
    'toes': 7,
    'name': 'Skeeter',
    'profession': 'redneck',
    'height': '5 foot 2',
    'weight': '5 kegs'
}

console.log('Removing key non-destructively')
console.log(removeKeyNonDestructive(test_obj1, 'toes'));
console.log(test_obj1)

console.log('Removing key destructively')
console.log(removeKey(test_obj1, 'height'));
console.log(test_obj1)

console.log('Removing keys non-destructively')
console.log(removeKeys(test_obj1, ['weight', 'profession']));
console.log(test_obj1);