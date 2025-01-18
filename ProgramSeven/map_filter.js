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
// const calculateAverage = (arr:number[], page=10) => {
//     let averageNum = arr.reduce((initialValue, currentValue) => {
//         return initialValue + currentValue * page
//     }, 0)
//     console.log(averageNum/arr.length)
// }
// calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
//find max number
// const findMaxValue1 = (numbers:any):number =>{
//     let maximumValue:number = 0
//     for(let i:number=0; i<numbers.length; i++){
//         if (maximumValue < numbers[i]){
//             maximumValue = numbers[i];
//         }
//     }
//     return maximumValue
// }
// console.log(findMaxValue1([4, 2, 42, 2, 3]));
//practice question for map
//1. uppercase of a string array containing names
var namedArray = ["Punit", "goyal", "purohit"];
var uppercasedArray = namedArray.map(function (curr) { return curr.toUpperCase(); });
console.log(uppercasedArray);
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var squaredArray = numberArray.map(function (curValue) { return curValue * curValue; });
console.log(squaredArray);
