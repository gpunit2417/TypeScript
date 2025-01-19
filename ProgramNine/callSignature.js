// The function call signature refers to a declaration or definition of a function, which includes the function's name, parameters and the return type. It defines the structure and type information of a function without including the function's implementation or body.
var student1 = {
    name: "Punit",
    age: 22,
    greet: function (country) {
        return "Welcome ".concat(this.name, ", You are from ").concat(country, " and your age is ").concat(this.age);
    },
};
var introduction = function (student1) {
    var name = student1.name, age = student1.age;
    return "Welcome ".concat(name, ", you are eligible for driving license as your age is ").concat(age);
};
console.log(introduction(student1));
console.log(student1.greet("India"));
