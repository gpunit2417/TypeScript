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
var calculateAverage = function (myarr) {
    var sum = myarr.reduce(function (accumulator, currentVal) { return accumulator + currentVal; });
    return sum / (myarr.length);
};
var average = calculateAverage([6, 8, 11, 10, 15, 12]);
console.log("Average of numbers :", average);
