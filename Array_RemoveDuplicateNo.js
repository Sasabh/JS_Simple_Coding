// Remove Duplicate characters from array of element and find the count of an elements using set object

var newArray = [2, 35, 1, 7, 5, 23, 6, 4, 45, 2, 7, 99, 932, 12, 23, 35, 77];

//Convert array to set which only retains the uniques entries
var uniqueFromArray = [...new Set(newArray)];

console.log("Uniques entries in array: ", uniqueFromArray);
