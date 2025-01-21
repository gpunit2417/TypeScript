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
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.age = age;
        this.name = name;
        this.hobbies = hobbies;
    }
    Persons.prototype.introduce = function () {
        return "Hi, I am ".concat(this.name, " and my age is ").concat(this.age, " with hobbies ").concat(this.hobbies.join(','), ".");
    };
    return Persons;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    Students.prototype.introduce = function () {
        return "".concat(_super.prototype.introduce.call(this), ". I am in grade ").concat(this.grade);
    };
    return Students;
}(Persons));
var personOneDetail = new Persons("Punit", 22, ["Cricket", "Volleyball"]);
var studentOneDetail = new Students("Punit", 22, ["Cricket", "Volleyball"], 10);
console.log(personOneDetail.introduce());
console.log(studentOneDetail.introduce());
