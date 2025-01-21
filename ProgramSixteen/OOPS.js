// In TS, a class is blueprint of an object.
// class Persons {
//     name: string = "Punit";
//     age: number = 22;
//     hobbies: string[] = ["Cricket", "Volleyball"];
// }
// const personOneDetail: Persons = new Persons()
// console.log(personOneDetail);
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.age = age;
        this.name = name;
        this.hobbies = hobbies;
    }
    return Persons;
}());
var personOneDetail = new Persons("Punit", 22, ["Cricket", "Volleyball"]);
console.log(personOneDetail);
