//type inference is the ability of TS compiler to automatically determine the type of the value assigned to any variable based on their context and their usage in the code part.
var nyNum = 5; //automatically determines the number type
// myNum = "punit" //error as number is initialized initially
var myName = "Punit"; //the compiler automatically infers the type string
//Use case
//used when assigned value clearly indicates the type of value assigned
//when in doubt, provide explicit type annotations to make your intentions clear.
//avoid relying too heavily on type inference when the assigned value is complex or ambiguous
//regularly review and refactor your code to ensure inferred types aligned with your intentions.
//Practice Questions
//1. Declare a variable message and initialize it with the value 'Hello, Typescript!'. Infer the type using type inference
var msg = 'Hello, Typescript!';
console.log(msg);
//2. WAP calculateArea that takes a length and width parameter of type number and return their product. Infer the return type of the function using type inference
function calculateArea(a, b) {
    return a * b;
}
console.log(calculateArea(5, 5));
