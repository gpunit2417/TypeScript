//there are basically 3 ways to declare an array in TS

//1. Using square brackets

const arr = [1,2,3,4,5,6,7]

//2. Using Array constructor

const arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 4)

//3. Using Array.of method

// const arr3 = Array.of("Punit", "Monika", "Atul")


//To access array element, we can use square bracket notation
console.log(arr2[1]);
console.log(arr2[2]);
console.log(arr2[0]);


console.log(arr2.length);
console.log(arr2.sort());

