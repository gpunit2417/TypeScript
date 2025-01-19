//In TS, tuples are the data structure that allows you to store a fixed-size collection of data of different types. They are similar to arrays, but with a key difference: the type of elements in a tuple are fixed and declared at the time of creation and arrays can hold elements of same type, and their sizes can vary.
var disprod = function (info) {
    var prname = info[0], price = info[1], quantity = info[2];
    console.log("Product name: ".concat(prname, ", Price ").concat(price, ", Quantity ").concat(quantity));
};
var prod1 = ["Soap", 25, 9];
var prod2 = ["Hairbrush", 89, 21];
disprod(prod1);
disprod(prod2);
// Question 2:
// type SubjectGrade = [string, number, string, number, string, number]
// const average = (student:SubjectGrade):void =>
//     {
//  const [subname1, grade1, subname2, grade2, subname3, grade3] = student;
//  console.log(`Subject name: ${subname1}, Grade: ${grade1}, 
//              Subject name: ${subname2}, Grade: ${grade2}, 
//              Subject name: ${subname3}, Grade: ${grade3}` )
// const vari = (grade1 + grade2 + grade3)/3; 
// console.log("The average is:",vari.toFixed(2))
// }
// const sub1:SubjectGrade = ["Math",30, "EVS", 40 , "SSC", 70] 
// average(sub1)
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
