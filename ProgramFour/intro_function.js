// function greet(name: string, id: number){
//     console.log(`Welcome, ${name}. Your id is ${id}`);
// }
// greet("Punit", 1)
// function greet(name: string, id: number){
//     return `Welcome, ${name}. Your id is ${id}`
// }
// console.log(greet("Punit", 1))
// function greet(name: string, id: number): string{
//     return `Welcome, ${name}. Your id is ${id}`
// }
// console.log(greet("Punit", 1))
// function greet(name: string, id: number): void{
//     console.log(`Welcome, ${name}. Your id is ${id}`);
// }
// greet("Punit", 1)
//fat arrow functions
// const greet = (name: string, id: number) => {
//     console.log(`Welcome, ${name}. Your id is ${id}`);
// }
// greet("Punit", 1)
// const greet = (name: string, id: number) => {
//     return `Welcome, ${name}. Your id is ${id}`
// }
// const myGreet = greet("Monika", 2)
// console.log(myGreet);
//Palindrome string
// const palindrome = (palin: string): boolean => {
//     let newPlaindrome = palin.split("").reverse().join("")
//     return newPlaindrome === palin
// }
// console.log(palindrome("12321"))
//calculate Average of numbers
// const calculateAverage = (myarr: number[]) => {
//     const sum =  myarr.reduce((accumulator: number, currentVal: number) =>  accumulator + currentVal);
//     return sum/(myarr.length)
//  }
//  const average = calculateAverage([6, 8, 11, 10, 15, 12]);
//  console.log("Average of numbers :", average);
//find max number
function findMaxValue(numbers) {
    return Math.max.apply(Math, numbers);
}
var numbers = [10, 20, 30, 40, 41];
//@ts-ignore
var maxValue = findMaxValue(numbers);
console.log("Maximum Value:", maxValue);
