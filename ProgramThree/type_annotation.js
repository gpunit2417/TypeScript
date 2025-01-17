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
console.log(nanValue);
//String type
// let myFirstName:string = "PUNIT"
// let myLastName: string = "GOYAL"
// let myFullName: string = myFirstName + myLastName
// console.log(myFullName)
// let sentence: string = "Learning typescript from youtube"
// console.log(sentence.length)
var text = "need something badly";
var uppercase = text.toUpperCase();
var lowercase = text.toLowerCase();
// let uppercase:string = text.toLocaleUpperCase();
// let lowercase:string = text.toLocaleLowerCase()
console.log(uppercase); //same output for both
console.log(lowercase); //same output for both
// 1: Substring:
var longText = "This is a long sentence.";
var shortText = longText.substring(0, 10);
console.log(shortText);
// 2: String Comparison:
var str1 = "Hello";
var str2 = "World";
var areEqual = str1 === str2;
console.log(areEqual);
// 3: String Template:
var product = "Phone";
var price = 500;
var message = "The product ".concat(product, " is priced at ").concat(price, " dollars.");
console.log(message);
