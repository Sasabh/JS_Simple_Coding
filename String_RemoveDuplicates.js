// Remove duplicates from the string

newString = 'many many returns of the day anish, manish, ravish';
anotherString = '71232121213054645645698653482825268';
function removeDuplicatesInString(testString) {
    //Split the string into an Array of characters
    //Filter while finding the index of item
    //If item index equal to current index then its unique else duplicate
    //Join after filter
    let result = testString
        .split('')
        .filter((item, index, arr) => {
            return arr.indexOf(item) === index;
        })
        .join('');

    return result;
}

console.log('Strinf without Duplicates :', removeDuplicatesInString(newString));
console.log(
    'String without Duplicates :',
    removeDuplicatesInString(anotherString),
);
