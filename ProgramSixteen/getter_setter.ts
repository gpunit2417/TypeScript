//? In TypeScript classes, you can use getter and setter methods to control the access 
// and modification of class properties. Getter methods allow you to retrieve the value 
// of a property, while setter methods allow you to set the value of a property with 
// additional logic or validation.

//TODO The get method doesn't take any parameters, and the set method takes only one 
// parameter.

class Persons {
    private _age: number | undefined;
    constructor(public name: string, protected hobbies: string[]) {}

    public set age(age: number) {
        if (age > 150 || age < 0) {
            throw new Error("age is not valid");
        }
        this._age = age;
    }

    public get age() {
        if (this._age === undefined) {
            throw new Error("age is not defined");
        }
        return this._age;
    }

    introduceParent(): string {
        return `Hi, I'm ${this.name} and I'm 
        ${this._age} years old. I love ${this.hobbies.join(",")}.`;
    }
}

const persons1: Persons = new Persons("vinod", ["reading", "painting"]);

// persons1.age(512);
persons1.age = 12;

console.log(persons1.introduceParent());
console.log(persons1.age);

//* PRACTICE TIME
//? Q1: Bank Account Balance
// Create a TypeScript class BankAccount with a private property _balance initialized to 0.
// Implement a getter method balance that returns the current balance.
// Implement a setter method balance that updates the balance if the new value is non-
// negative. Otherwise, log an error message.
// Instantiate an object of the BankAccount class.
// Use the setter to set the balance to 1000 and use the getter to display the updated 
// balance.

// Try setting a negative balance using the setter. What output do you expect?

//? Q2: Temperature Converter
// Define a TypeScript class Temperature with a private property _celsius set to 0.
// Implement a getter method celsius that returns the temperature in Celsius.
// Implement a setter method celsius that sets the temperature in Celsius.
// Implement a getter method fahrenheit that converts Celsius to Fahrenheit using the 
// formula (C * 9/5) + 32.

// Implement a setter method fahrenheit that converts Fahrenheit to Celsius using the 
// formula (F - 32) * 5/9.

// Create an instance of the Temperature class.
// Use the setter to set the temperature in Celsius to 25 and then use the getter for 
// Fahrenheit. What Fahrenheit value do you expect?
// Use the setter to set the temperature in Fahrenheit to 98.6 and then use the getter 
// for Celsius. What Celsius value do you expect?

