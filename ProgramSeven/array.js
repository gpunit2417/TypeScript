//there are basically 3 ways to declare an array in TS
//1. Using square brackets
var arr = [1, 2, 3, 4, 5, 6, 7];
//2. Using Array constructor
var arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 4);
//3. Using Array.of method
var arr3 = Array.of("Punit", "Monika", "Atul");
//To access array element, we can use square bracket notation
console.log(arr3[1]);
console.log(arr3[2]);
console.log(arr3[0]);
console.log(arr2.length);
console.log(arr2.sort());
