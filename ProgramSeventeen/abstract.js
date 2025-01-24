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
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.color = color;
        _this.radius = radius;
        _this.displayArea = function () {
            console.log("This is a ".concat(_this.color, " circle with radius ").concat(_this.radius, "."));
        };
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var circle = new Circle("red", 5);
console.log(circle.calculateArea());
circle.displayArea();
///* Practice Time  
///* You need to do the same for Square and Rectangle and if possible use getter and  
// setter methods or static members  
