// enums are commonly used when you want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to define a set of named values and associate them with specific meanings.
//in TS, when enums constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. The first numeric values for first enum constant is 0, and subsequent enum constants are incremented by 1.
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var userOne = {
    name: "Punit",
    email: 'punit10@gmail.com',
    password: '123',
    role: Roles.admin
};
var userTwo = {
    email: 'deep@123gmail.com',
    password: '234',
    role: Roles.user
};
var isAdmin = function (user) {
    var email = user.email, role = user.role;
    return role === Roles.admin ? "Welcome ".concat(email, ", you are now an ").concat(role) : "Welcome ".concat(email, ", you are a authorized ").concat(role);
};
console.log(isAdmin(userOne));
console.log(isAdmin(userTwo));
