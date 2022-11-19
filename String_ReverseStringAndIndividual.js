// String reverse with reversing of individual words as well

newString =
    'Innovation is the ability to see change as an opportunity, not a threat.';

let result = newString.split('').reverse().join('');

//Another Approach
var reverseWords = function (s) {
    let res = '';
    let word = '';
    for (let c of s) {
        res = c + res;
    }
    return res;
};

console.log(
    'String Reverse with reversion of individual words as well: ',
    reverseWords(newString),
);
