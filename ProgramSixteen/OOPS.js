// In TS, a class is blueprint of an object.
var Persons = /** @class */ (function () {
    function Persons() {
        this.name = "Punit";
        this.age = 22;
        this.hobbies = ["Cricket", "Volleyball"];
    }
    return Persons;
}());
var personOneDetail = new Persons();
console.log(personOneDetail);
