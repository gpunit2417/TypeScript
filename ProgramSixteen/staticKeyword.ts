// In TS, static methods and properties belong to the class itself rather than to instances of the class. By making methods and properties static, we can access them directly from the class without needing to create an instance of the class. This is useful for utility functions or properties that don't rely on instance specific data.

// class Human{
//     constructor(public PI: number){}
// }
// // @ts-ignore
// const pi:Human = new Human(3.14);
// console.log(pi);



// class MathOperation{
//     public static pi: number

//     public static add(num1: number, num2: number){
//         return num1 + num2
//     }

//     public static sub(num1: number, num2: number){
//         return num1 - num2
//     }
// }

// console.log(Math.PI);
// console.log(MathOperation.add(2, 5));
// console.log(MathOperation.sub(4, 2)); 

//Practice time

class MathOperation{
    public static pi: number

    public static add(num1: number, num2: number){
        return num1 + num2
    }

    public static sub(num1: number, num2: number){
        return num1 - num2
    }

    public static div(num1: number, num2: number){
        return num1 / num2
    }

    public static mul(num1: number, num2: number){
        return num1 * num2
    }

    public static rem(num1: number, num2: number){
        return num1 % num2
    }
}

console.log(Math.PI);
console.log(MathOperation.add(2, 5));
console.log(MathOperation.sub(4, 2));
console.log(MathOperation.div(10, 2));
console.log(MathOperation.mul(10, 2));
console.log(MathOperation.rem(10, 2));


