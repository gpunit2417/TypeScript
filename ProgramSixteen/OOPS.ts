// In TS, a class is blueprint of an object.

// class Persons {
//     name: string = "Punit";
//     age: number = 22;
//     hobbies: string[] = ["Cricket", "Volleyball"];
// }

// const personOneDetail: Persons = new Persons()
// console.log(personOneDetail);


// class Persons {
//     name: string;
//     age: number;
//     hobbies: string[];

//     constructor(name: string, age: number, hobbies: string[]) {
//         this.age = age
//         this.name = name
//         this.hobbies = hobbies
//     }
// }

// const personOneDetail: Persons = new Persons("Punit", 22, ["Cricket", "Volleyball"])
// console.log(personOneDetail);



// INHERITANCE

class Persons {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.age = age
        this.name = name
        this.hobbies = hobbies
    }

    introduce(): string{
        return `Hi, I am ${this.name} and my age is ${this.age} with hobbies ${this.hobbies.join(',')}.`
    }
}

class Students extends Persons{
    grade: number;

    constructor(name: string, age: number, hobbies: string[], grade: number){
        super(name, age, hobbies);
        this.grade = grade
    }

    introduce(): string{
        return `${super.introduce()}. I am in grade ${this.grade}`
    }
}

const personOneDetail: Persons = new Persons("Punit", 22, ["Cricket", "Volleyball"])
const studentOneDetail: Students = new Students("Punit", 22, ["Cricket", "Volleyball"], 10)
console.log(personOneDetail.introduce());
console.log(studentOneDetail.introduce());
