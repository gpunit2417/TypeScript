// In TS, a class is blueprint of an object.

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

class Persons {
    public name: string;
    private age: number;
    protected hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.age = age
        this.name = name
        this.hobbies = hobbies
    }

    introduceParent(): string{
        console.log(this.age);
        
        return `Hi, I am ${this.name} and my age is ${this.age} with hobbies ${this.hobbies.join(',')}.`
    }
}

class Students extends Persons{
    grade: number;

    constructor(name: string, age: number, hobbies: string[], grade: number){
        super(name, age, hobbies);  // can use hobbies here despite protected access modifier is used.
        this.grade = grade
    }

    introduceChild(): string{
        console.log(this.hobbies);
        // console.log(this.age);  //error because age is made private so it can only be used in PARENT class
        
        return `${super.introduceParent()}. I am in grade ${this.grade}`
    }
}

const personOneDetail: Persons = new Persons("Punit", 22, ["Cricket", "Volleyball"])
const studentOneDetail: Students = new Students("Punit", 22, ["Cricket", "Volleyball"], 10)

console.log(personOneDetail.introduceParent());
console.log(studentOneDetail.introduceChild());
console.log(personOneDetail.name);  //because name is public

// console.log(personOneDetail.hobbies);   //error because hobbies is protected and can be accessible only in PARENT class and its SUBCLASSES,

// console.log(personOneDetail.age);   //error because age is made private so it can only be used in PARENT class
