// Any
//is the most flexible type in TS
//turns off all type checking for the variable or expressions it is applied to


// Use Case
//working with dynamic data like user input, network responses
//migration from JS


let number = 5
// number = "punit"    //error because initial value assigned is a number

let number1 : any = 6
number1 = "punit"      //no error as any particular datatype is not specified 
console.log(number1);
