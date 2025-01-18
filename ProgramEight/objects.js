//object declaration
//Method 1
var person = {
    name: 'punit',
    age: 22,
    gender: 'Male',
    address: {
        city: 'Hisar',
        state: 'Haryana',
        country: 'India'
    }
};
//Method 2
var person1 = {
    name: 'punit',
    age: 22,
    gender: 'Male',
    address: {
        city: 'Hisar',
        state: 'Haryana',
        country: 'India'
    }
};
//data access using dot notation
console.log(person1.name);
console.log(person.address.city);
//data updation 
person.address.city = "Ambala";
console.log(person.address.city);
//practice question
var Product = {
    name: 'Dell laptop',
    price: 40000,
    quantity: 5
};
var Product1 = {
    name: 'HP laptop',
    price: 35000,
    quantity: 5
};
console.log(Product);
console.log(Product1);
