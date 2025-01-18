//map operation

const array = [1, 2, 3, 4, 5]
const doubleArray = array.map((curElement) => curElement * 2)
console.log(doubleArray);


const numberToString = array.map((curVal: number) => curVal.toString())
console.log(numberToString);


//filter operation

const greaterThanThree = array.filter((current: number) => current > 3)
console.log(greaterThanThree);


const divisibleByTwo = array.filter((currentValue: number) => currentValue % 2 == 0)
console.log(divisibleByTwo);
