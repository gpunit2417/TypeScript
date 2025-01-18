// normal function

function greet(name: string, id:number):string{
    return `Welcome, ${name}. Your id is ${id}`
}

const greeting = greet("Punit", 11212505)
console.log(greeting);



//default parameter function

function greet1(name: string, id: number = 1): string {
    return `Welcome ${name}. Your id is ${id}`
}

console.log(greet1("Punit"));


//optional parameters function
//a parameter is made optional by using ? after the parameter name

function greet2(name: string, id?: number): string{
    if(id){
        return `Welcome ${name}. Your moved on next level with id = ${id}`
    }
    else{
        return `Welcome ${name}. Your moved to next level.`
    }
}

console.log(greet2("Punit", 11212505));
console.log(greet2("Punit"));
