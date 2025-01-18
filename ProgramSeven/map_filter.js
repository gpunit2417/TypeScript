//map operation
var array = [1, 2, 3, 4, 5];
var doubleArray = array.map(function (curElement) { return curElement * 2; });
console.log(doubleArray);
var numberToString = array.map(function (curVal) { return curVal.toString(); });
console.log(numberToString);
//filter operation
var greaterThanThree = array.filter(function (current) { return current > 3; });
console.log(greaterThanThree);
var divisibleByTwo = array.filter(function (currentValue) { return currentValue % 2 == 0; });
console.log(divisibleByTwo);
