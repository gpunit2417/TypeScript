// Boolean type
var isNumber = true;
var isDivisibleByFour = false;
//function to check for odd or even
function isEven(a) {
    return a % 2 == 0;
}
// console.log(isEven(5));
//function to check for a number divisible by 4 and 8
function isDivisibleByFourAndEight(a) {
    return (a % 4 == 0 && a % 8 == 0);
}
// console.log(isDivisibleByFourAndEight(81));
// BigInt
var maxValue = Number.MAX_SAFE_INTEGER;
console.log(maxValue);
var bigValue = 9007199254740991n;
console.log(bigValue);
var anotherBigValue = BigInt("9007199254740991");
console.log(anotherBigValue);
//@ts-ignore
var sum = bigValue + anotherBigValue;
console.log(sum);
var difference = bigValue - anotherBigValue;
console.log(difference);
var multiply = bigValue * anotherBigValue;
console.log(multiply);
var divide = bigValue / anotherBigValue;
console.log(divide);
