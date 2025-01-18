// function greet(name: string, id: number){
//     console.log(`Welcome, ${name}. Your id is ${id}`);
// }

// greet("Punit", 1)


// function greet(name: string, id: number){
//     return `Welcome, ${name}. Your id is ${id}`
// }

// console.log(greet("Punit", 1))


// function greet(name: string, id: number): string{
//     return `Welcome, ${name}. Your id is ${id}`
// }

// console.log(greet("Punit", 1))


// function greet(name: string, id: number): void{
//     console.log(`Welcome, ${name}. Your id is ${id}`);
// }

// greet("Punit", 1)


//fat arrow functions

// const greet = (name: string, id: number) => {
//     console.log(`Welcome, ${name}. Your id is ${id}`);
// }

// greet("Punit", 1)


const greet = (name: string, id: number) => {
    return `Welcome, ${name}. Your id is ${id}`
}

const myGreet = greet("Monika", 2)
console.log(myGreet);
