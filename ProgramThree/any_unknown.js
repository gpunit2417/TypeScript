// Any
//is the most flexible type in TS
//turns off all type checking for the variable or expressions it is applied to
// Use Case
//working with dynamic data like user input, network responses
//migration from JS
var number = 5;
// number = "punit"    //error because initial value assigned is a number
var number1 = 6;
number1 = "punit"; //no error as any particular datatype is not specified 
console.log(number1);
// Unknown 
//safer alternative to any because it still enforces type checking and type safety
//variables of type unknown can hold value of any datatype, but oyu must perform type checks or type assertions before using them in specific way.
var num1;
num1 = 5;
num1 = "punit";
num1 = true;
if (typeof num1 === "number") {
    console.log(num1 + 5);
}
else if (typeof num1 === "boolean") {
    console.log(num1);
}
