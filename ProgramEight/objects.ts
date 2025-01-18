//object declaration

//Method 1
const person = {
    name: 'punit',
    age: 22,
    gender: 'Male',
    address: {
        city: 'Hisar',
        state: 'Haryana', 
        country: 'India'
    }
}

//Method 2
const person1: {
    name: string;
    age: number;
    gender: string;
    address: {
        city: string;
        state: string;
        country: string;
    }
} = {
    name: 'punit',
    age: 22,
    gender: 'Male',
    address: {
        city: 'Hisar',
        state: 'Haryana', 
        country: 'India'
    }
}


//data access using dot notation
console.log(person1.name);
console.log(person.address.city);


//data updation 
person.address.city = "Ambala"
console.log(person.address.city);


//practice question
const Product = {
    name: 'Dell laptop',
    price: 40000,
    quantity: 5
}

const Product1: {
    name: string;
    price: number;
    quantity: number;
} = {
    name: 'HP laptop',
    price: 35000,
    quantity: 5
}

console.log(Product);
console.log(Product1);

