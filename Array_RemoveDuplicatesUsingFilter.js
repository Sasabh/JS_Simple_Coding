// Remove Duplicate characters from array of element using filter

var newArray = ['a', 1, 'a', 2, '1', 7, 23, 'v', 'l', 'v'];
var uniqueArray = newArray.filter(
    (value, index, arr) => arr.indexOf(value) === index,
);

console.log('Uniques entries in Array: ', uniqueArray);
