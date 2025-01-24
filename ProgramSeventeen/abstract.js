///* Abstract Classes provide a way to define common properties and methods that
// multiple derived classes can share. This promotes code reuse and helps establish a
// common interface for related classes.
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
///* abstract class cannot be instantiated
///* abstract classes focus on class inheritance and sharing common functionality,
//* whereas the useContext hook in React focuses on managing global state and allowing
// components to consume that state.
// abstract class PerObj {
//     name: string;
//     age: number;
// }
// class Person: PerObj = {
//     name: "vinod",
//     age: 29,
// };
// class Person1: PerObj = {
//     name: "thapa",
//     age: 29,
// };
// class Person3: PerObj = {
//     name: "thapa",
//     age: 29,
// };
///* Example: Shape Hierarchy
///* Suppose you’re building a graphics application, and you want to create a hierarchy
// of different shapes. You can use an abstract base class Shape to define common
// properties and methods that all shapes share.
// circle , rectangle
/// SUBSCRIBE TO THAPA TECHNICAL
// abstract class Shape {
//     constructor(protected color: string) {}
//     abstract calculateArea(): number;
//     abstract displayArea: () => void;
// }
// class Circle extends Shape {
//     constructor(protected color: string, protected radius: number) {
//         super(color);
//     }
//     public calculateArea(): number {
//         return Math.PI * this.radius * this.radius;
//     }
//     displayArea = () => {
//         console.log(`This is a ${this.color} circle with radius ${this.radius}.`);
//     };
// }
// const circle = new Circle("red", 5);
// console.log(circle.calculateArea());
// circle.displayArea();
///* Practice Time
///* You need to do the same for Square and Rectangle and if possible use getter and
// setter methods or static members
// Area of Rectangle and Square using Getter and Setter Method
//Area of Square
var ArSq = /** @class */ (function () {
    function ArSq(name, color) {
        this.name = name;
        this.color = color;
    }
    Object.defineProperty(ArSq.prototype, "side", {
        get: function () {
            if (this._side == undefined) {
                throw new Error("It is undefoned");
            }
            return Math.pow(this._side, 2);
        },
        set: function (side) {
            if (side < 0) {
                throw new Error("Invalid Input");
            }
            this._side = side;
        },
        enumerable: false,
        configurable: true
    });
    ArSq.prototype.info = function () {
        return "";
    };
    return ArSq;
}());
// Area of Rectangle
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Object.defineProperty(Rectangle.prototype, "Length", {
        // getter method for length
        get: function () {
            return this.length;
        },
        // setter method for length
        set: function (value) {
            if (value < 0) {
                throw new Error("Length cannot be negative.");
            }
            this.length = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "Width", {
        // getter method for width
        get: function () {
            return this.width;
        },
        // setter method for width
        set: function (value) {
            if (value < 0) {
                throw new Error("Width cannot be negative.");
            }
            this.width = value;
        },
        enumerable: false,
        configurable: true
    });
    // method to calculate area
    Rectangle.prototype.calculateArea = function () {
        return this.length * this.width;
    };
    return Rectangle;
}());
var squ1 = /** @class */ (function (_super) {
    __extends(squ1, _super);
    function squ1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return squ1;
}(ArSq));
var rectangle = new Rectangle(10, 50);
var Ars = new squ1("Square", "Red");
console.log("Area of rectangle: ".concat(rectangle.calculateArea()));
// change the length and width
rectangle.Length = 20;
rectangle.Width = 10;
console.log("Area of rectangle after changing length and width: ".concat(rectangle.calculateArea()));
Ars.side = 50;
console.log("The Area of Square: ", Ars.side);
