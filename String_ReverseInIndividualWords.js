// String reverse while only reversing of individual words

newString =
    'Innovation is the ability to see change as an opportunity, not a threat.';

let result = newString
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .reverse()
    .join(' ');

//Another Approach
var reverseWords = function (s) {
    let res = '';
    let word = '';
    for (let c of s) {
        if (c === ' ') {
            res += word + c;
            word = '';
        } else {
            word = c + word;
        }
    }
    return res + word;
};
console.log(reverseWords('priya bagde'));

console.log(
    'String Reverse with reversion of only individual words: ',
    reverseWords(newString),
);
