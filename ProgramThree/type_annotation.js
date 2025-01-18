"use strict";
// * type annotation is a way of explicitly specifying the type of a variable, function parameter or a function return value.
// let myNumber: number = 10
// myNumber = '5'   //error because type is number.
let myNumber1 = 10;
// myNumber1 = '5'     //no error because no particular type is specified.
console.log(myNumber1.toString());
//Advantages
//helps TS compiler to enforce type checking and provide type safety during development.
//to know what operations can be performed on the variable.
//type annotations are expressed by using a colon followed by a desired type
//Number type
let myFav = 5;
let myAge = 29;
let pi = 3.14;
let myNeg = -5;
// let invalidResult: number = myAge + "years"
// console.log(invalidResult)
// let invalidResult: number = "123"
// let computedValue: number = Math.sqrt(16)   //valid result
let nanValue = NaN;
console.log(nanValue);
//String type
// let myFirstName:string = "PUNIT"
// let myLastName: string = "GOYAL"
// let myFullName: string = myFirstName + myLastName
// console.log(myFullName)
// let sentence: string = "Learning typescript from youtube"
// console.log(sentence.length)
let text = "need something badly";
let uppercase = text.toUpperCase();
let lowercase = text.toLowerCase();
// let uppercase:string = text.toLocaleUpperCase();
// let lowercase:string = text.toLocaleLowerCase()
console.log(uppercase); //same output for both
console.log(lowercase); //same output for both
// 1: Substring:
let longText = "This is a long sentence.";
let shortText = longText.substring(0, 10);
console.log(shortText);
// 2: String Comparison:
let str1 = "Hello";
let str2 = "World";
let areEqual = str1 === str2;
console.log(areEqual);
// 3: String Template:
let product = "Phone";
let price = 500;
let message = `The product ${product} is priced at ${price} dollars.`;
console.log(message);
