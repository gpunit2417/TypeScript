// normal function
function greet(name, id) {
    return "Welcome, ".concat(name, ". Your id is ").concat(id);
}
var greeting = greet("Punit", 11212505);
console.log(greeting);
//default parameter function
function greet1(name, id) {
    if (id === void 0) { id = 1; }
    return "Welcome ".concat(name, ". Your id is ").concat(id);
}
console.log(greet1("Punit"));
//optional parameters function
//a parameter is made optional by using ? after the parameter name
function greet2(name, id) {
    if (id) {
        return "Welcome ".concat(name, ". Your moved on next level with id = ").concat(id);
    }
    else {
        return "Welcome ".concat(name, ". Your moved to next level.");
    }
}
console.log(greet2("Punit", 11212505));
console.log(greet2("Punit"));
