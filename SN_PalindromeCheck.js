// Check for a number or a string being a palindrome

let str = "tattarrattat";
let num = 1234567654321;

let checkForPalindrome = (item) => {
    let revItem;
    if (typeof item === "number")
        revItem = item.toString().split("").reverse().join("");
    else if (typeof item === "string")
        revItem = item.split("").reverse().join("");
    else {
        console.log("Not a valid entry for palindrome check.");
        return;
    }
    if (item == revItem) console.log("Its a Palindrome!");
    else console.log("Not a Palindrome!");
};

let anotherCheckForPalindrome = (item) => {
    let revItem;
    if (typeof item === "number")
        revItem = item.toString();
    else if (typeof item === "string")
        revItem = item;
    else {
        console.log("Not a valid entry for palindrome check.");
        return;
    }
    let palinFlag = true;
    for(let i = 0; i < revItem.length; i++){
        if(revItem[i] !== revItem[revItem.length-1-i]){
            palinFlag = false
        }
    }
    if (palinFlag) console.log("Its a Palindrome!");
    else console.log("Not a Palindrome!");
};

checkForPalindrome(str);
checkForPalindrome(num);
checkForPalindrome(["Just Trying"]);

console.log("\n");

anotherCheckForPalindrome(str);
anotherCheckForPalindrome(num);
anotherCheckForPalindrome(["Just Trying"]);
