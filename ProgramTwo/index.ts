//Write a program to add two numbers without error handling

// function sum(a, b) {
//     return a+b
// }

// console.log(sum(5, "vinod"));   //Result is 5vinod because type is not specified and logically it should throw error



//Write a program to add two numbers with error handling

// function sum(a:number, b:number):number {   //explicitly specified datatype, so error handling
//     return a+b
// }
// console.log(sum(5, 10));    //Result is 15



//@ts-ignore    //this will ignore the *DUPLICATE FUNCTION IMPLEMENTATION* error.
function sum(a:number, b:number):number {   //explicitly specified datatype, so error handling
    return a+b
}
console.log(sum(5, 10));



//TS configuration file
// - This file contains many in-built commands
// we will ensure if our ts file contains any error, then on executing it no js file creates.
//for this, we will run *tsc --init* command which will create a tsconfig file
//After that, search for emiton in tsconfig.json file and uncomment it.