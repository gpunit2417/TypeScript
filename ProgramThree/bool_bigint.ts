// Boolean type
let isNumber : boolean = true
let isDivisibleByFour: boolean = false

//function to check for odd or even

function isEven(a:number): boolean{
    return a%2 == 0
}

// console.log(isEven(5));


//function to check for a number divisible by 4 and 8

function isDivisibleByFourAndEight(a:number): boolean{
    return (a%4 == 0 && a%8 == 0)
}

// console.log(isDivisibleByFourAndEight(81));



// BigInt

let maxValue = Number.MAX_SAFE_INTEGER
console.log(maxValue);

let bigValue: bigint = 9007199254740991n
console.log(bigValue);

let anotherBigValue = BigInt("9007199254740991")
console.log(anotherBigValue);

//@ts-ignore
let sum = bigValue + anotherBigValue
console.log(sum);


let difference = bigValue - anotherBigValue
console.log(difference);


let multiply = bigValue * anotherBigValue
console.log(multiply);


let divide = bigValue / anotherBigValue
console.log(divide);
