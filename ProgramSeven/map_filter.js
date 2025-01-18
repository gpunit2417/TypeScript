//map operation
// const array = [1, 2, 3, 4, 5]
// const doubleArray = array.map((curElement) => curElement * 2)
// console.log(doubleArray);
// const numberToString = array.map((curVal: number) => curVal.toString())
// console.log(numberToString);
// //filter operation
// const greaterThanThree = array.filter((current: number) => current > 3)
// console.log(greaterThanThree);
// const divisibleByTwo = array.filter((currentValue: number) => currentValue % 2 == 0)
// console.log(divisibleByTwo);
//calculate Average of numbers
var calculateAverage = function (arr, page) {
    if (page === void 0) { page = 10; }
    var averageNum = arr.reduce(function (initialValue, currentValue) {
        return initialValue + currentValue * page;
    }, 0);
    console.log(averageNum / arr.length);
};
calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
//find max number
var findMaxValue1 = function (numbers) {
    var maximumValue = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (maximumValue < numbers[i]) {
            maximumValue = numbers[i];
        }
    }
    return maximumValue;
};
console.log(findMaxValue1([4, 2, 42, 2, 3]));
