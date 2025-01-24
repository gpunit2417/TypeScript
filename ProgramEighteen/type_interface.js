// *************************
//* INTERFACE VS TYPE
// *************************
var BioData = /** @class */ (function () {
    function BioData(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
    return BioData;
}());
var std1 = new BioData("vinod", 29, "pune", "MH");
console.log(BioData);
