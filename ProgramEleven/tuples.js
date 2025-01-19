//In TS, tuples are the data structure that allows you to store a fixed-size collection of data of different types. They are similar to arrays, but with a key difference: the type of elements in a tuple are fixed and declared at the time of creation and arrays can hold elements of same type, and their sizes can vary.
var average = function (student) {
    var subname1 = student[0], grade1 = student[1], subname2 = student[2], grade2 = student[3], subname3 = student[4], grade3 = student[5];
    console.log("Subject name: ".concat(subname1, ", Grade: ").concat(grade1, ", \n             Subject name: ").concat(subname2, ", Grade: ").concat(grade2, ", \n             Subject name: ").concat(subname3, ", Grade: ").concat(grade3));
    var vari = (grade1 + grade2 + grade3) / 3;
    console.log("The average is:", vari.toFixed(2));
};
var sub1 = ["Math", 30, "EVS", 40, "SSC", 70];
average(sub1);
// Qusestion 3 :
// type WeatherData = readonly [string, number, string];
// let cities: any[] = [];
// let city1: WeatherData = ['Surat', 30, 'overcast'];
// let city2: WeatherData = ['Ahmedabad', 34, 'sunny'];
// let city3: WeatherData = ['Rajkot', 27, 'rainy'];
// cities.push(city1, city2, city3);
// const displayWeather = (cities: any[]) => {
//   let cityInfo: object[] = [];
//   cities.forEach((city) => {
//     let [name, celsius, condition] = city;
//     cityInfo.push({ City: name, Temperature: celsius, Condition: condition });
//   });
//   console.table(cityInfo);
// };
// displayWeather(cities)
