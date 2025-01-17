// * type annotation is a way of explicitly specifying the type of a variable, function parameter or a function return value.
// let myNumber: number = 10
// myNumber = '5'   //error because type is number.
var myNumber1 = 10;
// myNumber1 = '5'     //no error because no particular type is specified.
console.log(myNumber1.toString());
//Advantages
//helps TS compiler to enforce type checking and provide type safety during development.
//to know what operations can be performed on the variable.
//type annotations are expressed by using a colon followed by a desired type
//Number type
var myFav = 5;
var myAge = 29;
var pi = 3.14;
var myNeg = -5;
// let invalidResult: number = myAge + "years"
// console.log(invalidResult)
// let invalidResult: number = "123"
// let computedValue: number = Math.sqrt(16)   //valid result
var nanValue = NaN;
//String type
var myFirstName = "PUNIT";
var myLastName = "GOYAL";
var myFullName = myFirstName + myLastName;
console.log(myFullName);
var sentence = "Learning typescript from youtube";
console.log(sentence.length);
