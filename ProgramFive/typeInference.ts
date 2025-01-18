//type inference is the ability of TS compiler to automatically determine the type of the value assigned to any variable based on their context and their usage in the code part.

let nyNum = 5   //automatically determines the number type
// myNum = "punit" //error as number is initialized initially


let myName = "Punit"    //the compiler automatically infers the type string


//Use case
//used when assigned value clearly indicates the type of value assigned
//when in doubt, provide explicit type annotations to make your intentions clear.
//avoid relying too heavily on type inference when the assigned value is complex or ambiguous
//regularly review and refactor your code to ensure inferred types aligned with your intentions.