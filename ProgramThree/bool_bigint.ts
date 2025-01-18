// Boolean type
let isNumber : boolean = true
let isDivisibleByFour: boolean = false

//function to check for odd or even

function isEven(a:number): boolean{
    return a%2 == 0
}

console.log(isEven(5));


//function to check for a number divisible by 4 and 8

function isDivisibleByFourAndEight(a:number): boolean{
    return (a%4 == 0 && a%8 == 0)
}

console.log(isDivisibleByFourAndEight(81));

