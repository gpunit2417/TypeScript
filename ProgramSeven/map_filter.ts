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
// const namedArray = ["Punit", "goyal", "purohit"]
// const uppercasedArray = namedArray.map((curr: string) => curr.toUpperCase())
// console.log(uppercasedArray);


//2. square of each number from a numbered array
// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const squaredArray = numberArray.map((curValue: number) => curValue * curValue)
// console.log(squaredArray);


//practice question for filter

//1. length of array value greater than four

const names: string[] = ["Alice", "Bob", "Andrew", "Alex", "Anna"]
const nameGreaterFour = names.map((curName: string) => curName.length > 4)
console.log(nameGreaterFour);


const nameWithGreaterThanFourLetter = names.filter((current: string) => current.length > 4)
console.log(nameWithGreaterThanFourLetter);


//2. names starting with 'A'
const namesWithA = names.map((currentName: string) => currentName.startsWith("A"))
console.log(namesWithA);


const nameStartingWithA = names.filter((curr: string) => curr.startsWith('A'))
console.log(nameStartingWithA);



//In the above two questions, using map and filter is logging different outputs.
//map outputs the data in the form of true and false
//true in case of successful conditions satisfying
//else false

//filter return the actual data