"use strict";
// Boolean type
let isNumber = true;
let isDivisibleByFour = false;
//function to check for odd or even
function isEven(a) {
    return a % 2 == 0;
}
console.log(isEven(5));
//function to check for a number divisible by 4 and 8
function isDivisibleByFourAndEight(a) {
    return (a % 4 == 0 && a % 8 == 0);
}
console.log(isDivisibleByFourAndEight(81));
