// In TS, a class is blueprint of an object.

// class Persons {
//     name: string = "Punit";
//     age: number = 22;
//     hobbies: string[] = ["Cricket", "Volleyball"];
// }

// const personOneDetail: Persons = new Persons()
// console.log(personOneDetail);


class Persons {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.age = age
        this.name = name
        this.hobbies = hobbies
    }
}

const personOneDetail: Persons = new Persons("Punit", 22, ["Cricket", "Volleyball"])
console.log(personOneDetail);