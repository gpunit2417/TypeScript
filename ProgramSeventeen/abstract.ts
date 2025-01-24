///* Abstract Classes provide a way to define common properties and methods that
// multiple derived classes can share. This promotes code reuse and helps establish a
// common interface for related classes.

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
class ArSq {
  private _side: number | undefined;
  constructor(public name: string, public color: string) {}

  public set side(side: number) {
    if (side < 0) {
      throw new Error("Invalid Input");
    }

    this._side = side;
  }

  public get side() {
    if (this._side == undefined) {
      throw new Error("It is undefined");
    }

    return this._side ** 2;
  }

  info(): string {
    return ``;
  }
}

// Area of Rectangle
class Rectangle {
  private length: number;
  private width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  // getter method for length
  get Length(): number {
    return this.length;
  }

  // setter method for length
  set Length(value: number) {
    if (value < 0) {
      throw new Error("Length cannot be negative.");
    }
    this.length = value;
  }

  // getter method for width
  get Width(): number {
    return this.width;
  }

  // setter method for width
  set Width(value: number) {
    if (value < 0) {
      throw new Error("Width cannot be negative.");
    }
    this.width = value;
  }

  // method to calculate area
  calculateArea(): number {
    return this.length * this.width;
  }
}

class squ1 extends ArSq {}

const rectangle = new Rectangle(10, 50);
const Ars: ArSq = new squ1("Square", "Red");
console.log(`Area of rectangle: ${rectangle.calculateArea()}`);

// change the length and width
rectangle.Length = 20;
rectangle.Width = 10;
console.log(
  `Area of rectangle after changing length and width: ${rectangle.calculateArea()}`
);

Ars.side = 50;
console.log("The Area of Square: ", Ars.side);
