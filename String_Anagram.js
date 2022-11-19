//Check if the given string is an Anagram or no i.e. words that are made of same no of letters shuffled in different order

text1 = 'Begin';
text2 = 'Being';

function checkForAnagram(str1, str2) {
    let sorted1 = str1.toLowerCase().split('').sort().join('');
    let sorted2 = str2.toLowerCase().split('').sort().join('');

    if (sorted1 === sorted2) {
        console.log('Its an Anagram');
    } else {
        console.log('Not an Anagram');
    }
}

checkForAnagram(text1, text2);
