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
// function sum(a:number, b:number):number {   //explicitly specified datatype, so error handling
//     return a+b
// }
// console.log(sum(5, 10));



//TS configuration file
// - This file contains many in-built commands
// we will ensure if our ts file contains any error, then on executing it no js file creates.
//for this, we will run *tsc --init* command which will create a tsconfig file
//After that, search for emiton in tsconfig.json file and uncomment it.



// function sum(a:number, b:number):number {   //explicitly specified datatype, so error handling
//     return a+b
// }
// console.log(sum(5, "vinod"));    //Result is 15

//the above line contains a string as an argument, but required is a number...
//on running tsc index.ts command, an error is shown but index.js file is created.
//so to prevent creation of index.js file, we will run command *tsc --noEmitOnError index.ts*
//On running above command, no index.js file is constructed.



//we can create the above simple function using fat arrow function as: 

//@ts-ignore
const sum = (a:number, b:number):number => {   //explicitly specified datatype, so error handling
    return a+b
}
console.log(sum(5, 10));    //Result is 15