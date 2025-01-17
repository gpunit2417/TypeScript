// * type annotation is a way of explicitly specifying the type of a variable, function parameter or a function return value.

// let myNumber: number = 10
// myNumber = '5'   //error because type is number.

let myNumber1: any = 10
// myNumber1 = '5'     //no error because no particular type is specified.

console.log(myNumber1.toString())

//Advantages
//helps TS compiler to enforce type checking and provide type safety during development.
//to know what operations can be performed on the variable.

//type annotations are expressed by using a colon followed by a desired type


//Number type

let myFav: number = 5
let myAge: number = 29
let pi: number = 3.14
let myNeg: number = -5

// let invalidResult: number = myAge + "years"
// console.log(invalidResult)


// let invalidResult: number = "123"


// let computedValue: number = Math.sqrt(16)   //valid result


let nanValue: number = NaN
console.log(nanValue)


//String type

// let myFirstName:string = "PUNIT"
// let myLastName: string = "GOYAL"
// let myFullName: string = myFirstName + myLastName
// console.log(myFullName)


// let sentence: string = "Learning typescript from youtube"
// console.log(sentence.length)


let text: string = "need something badly"
let uppercase:string = text.toUpperCase();
let lowercase:string = text.toLowerCase()

// let uppercase:string = text.toLocaleUpperCase();
// let lowercase:string = text.toLocaleLowerCase()

console.log(uppercase); //same output for both
console.log(lowercase); //same output for both

