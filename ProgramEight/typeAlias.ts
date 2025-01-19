// In TS, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of the code.
//Type Aliases provides a way for better code organization, readability and abstraction of complex types.

//to define type aliases, use *type* keyword followed by alias name and type definition 

// const persons: {
//     name: string,
//     age: number,
//     standard: number,
// } = {
//     name: "Punit Goyal",
//     age: 22,
//     standard: 16
// }

// const persons1: {
//     name: string,
//     age: number,
//     standard: number,
// } = {
//     name: "Punit Goyal",
//     age: 22,
//     standard: 16
// }

// const persons2: {
//     name: string,
//     age: number,
//     standard: number,
// } = {
//     name: "Punit Goyal",
//     age: 22,
//     standard: 16
// }


// In the above 3 objects , we need to redefine the type of the object, which can lead to overhead. so, to overcome this overhead, we can use type alias with the following structure.

type Person = {
    name: string,
    age: number,
    standard: number,
}


const personOne: Person = {
    name: "Punit Goyal",
    age: 22,
    standard: 16
}

const personTwo: Person = {
    name: "Mohit Rana",
    age: 24,
    standard: 16
}

const personThree: Person = {
    name: "Raman Bawa",
    age: 21,
    standard: 16
}

const personFour: Person = {
    name: "DK Chauhan",
    age: 22,
    standard: 16
}