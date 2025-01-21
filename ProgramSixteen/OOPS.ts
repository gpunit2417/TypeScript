// In TS, a class is blueprint of an object.

class Persons {
    name: string = "Punit";
    age: number = 22;
    hobbies: string[] = ["Cricket", "Volleyball"];
}

const personOneDetail: Persons = new Persons()
console.log(personOneDetail);
