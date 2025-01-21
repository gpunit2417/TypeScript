// In TS, a class is blueprint of an object.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// class Persons {
//     name: string;
//     age: number;
//     hobbies: string[];
//     constructor(name: string, age: number, hobbies: string[]) {
//         this.age = age
//         this.name = name
//         this.hobbies = hobbies
//     }
//     introduce(): string{
//         return `Hi, I am ${this.name} and my age is ${this.age} with hobbies ${this.hobbies.join(',')}.`
//     }
// }
// class Students extends Persons{
//     grade: number;
//     constructor(name: string, age: number, hobbies: string[], grade: number){
//         super(name, age, hobbies);
//         this.grade = grade
//     }
//     introduce(): string{
//         return `${super.introduce()}. I am in grade ${this.grade}`
//     }
// }
// const personOneDetail: Persons = new Persons("Punit", 22, ["Cricket", "Volleyball"])
// const studentOneDetail: Students = new Students("Punit", 22, ["Cricket", "Volleyball"], 10)
// console.log(personOneDetail.introduce());
// console.log(studentOneDetail.introduce());
//ACCESS MODIFIERS 
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.age = age;
        this.name = name;
        this.hobbies = hobbies;
    }
    Persons.prototype.introduceParent = function () {
        console.log(this.age);
        return "Hi, I am ".concat(this.name, " and my age is ").concat(this.age, " with hobbies ").concat(this.hobbies.join(','), ".");
    };
    return Persons;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this; // can use hobbies here despite protected access modifier is used.
        _this.grade = grade;
        return _this;
    }
    Students.prototype.introduceChild = function () {
        console.log(this.hobbies);
        // console.log(this.age);  //error because age is made private so it can only be used in PARENT class
        return "".concat(_super.prototype.introduceParent.call(this), ". I am in grade ").concat(this.grade);
    };
    return Students;
}(Persons));
var personOneDetail = new Persons("Punit", 22, ["Cricket", "Volleyball"]);
var studentOneDetail = new Students("Punit", 22, ["Cricket", "Volleyball"], 10);
console.log(personOneDetail.introduceParent());
console.log(studentOneDetail.introduceChild());
console.log(personOneDetail.name); //because name is public
// console.log(personOneDetail.hobbies);   //error because hobbies is protected and can be accessible only in PARENT class and its SUBCLASSES,
// console.log(personOneDetail.age);   //error because age is made private so it can only be used in PARENT class
