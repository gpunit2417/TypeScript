// The function call signature refers to a declaration or definition of a function, which includes the function's name, parameters and the return type. It defines the structure and type information of a function without including the function's implementation or body.

//call signatures are typically used inside object type notation to describe the shape of a function without object type


type Student = {
    name: string,
    age: number,
    gender?: string
    greet: (country: string) => string  //method call signature
}

const student1: Student = {
    name: "Punit",
    age: 22,
    greet(country: string) {
        return `Welcome ${this.name}, You are from ${country} and your age is ${this.age}`
    },
}

const introduction = (student1: Student) => {
    const {name, age} = student1
    return `Welcome ${name}, you are eligible for driving license as your age is ${age}`
}

console.log(introduction(student1));
console.log(student1.greet("India"));
