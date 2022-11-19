// Find the factorial of a number from the entered value

// var prompt = require("prompt");

// //Start prompt
// prompt.start();

// console.log('Enter two values:- ');

// prompt.get(['name', 'other'], (err, result) => {
//     console.log(result)
// })

// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

const readLine = require("readline-sync");
let n;

function getNumberFromUser() {
    try {
        let readData = readLine.question("Please enter the an Integer: ");
        n = parseInt(readData);
        if (n !== n || n != readData) throw Error();
    } catch (error) {
        console.log("Only Intgers are allowed. Try Again! \n");
        getNumberFromUser();
    }
}

getNumberFromUser();
