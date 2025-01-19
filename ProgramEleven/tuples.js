//In TS, tuples are the data structure that allows you to store a fixed-size collection of data of different types. They are similar to arrays, but with a key difference: the type of elements in a tuple are fixed and declared at the time of creation and arrays can hold elements of same type, and their sizes can vary.
var display = function (person) {
    var age = person[0], name = person[1], hasDrivingLicense = person[2];
    console.log("Your age is ".concat(age, ", name is ").concat(name, " and your hasDrivingLicense attribute is ").concat(hasDrivingLicense ? 'true' : 'false'));
};
var personInfo1 = [22, "Punit", true];
var personInfo2 = [21, "Monika", false];
display(personInfo1);
display(personInfo2);
