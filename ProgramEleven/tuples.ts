//In TS, tuples are the data structure that allows you to store a fixed-size collection of data of different types. They are similar to arrays, but with a key difference: the type of elements in a tuple are fixed and declared at the time of creation and arrays can hold elements of same type, and their sizes can vary.

// type PersonInfo = readonly [number, string, boolean]

// const display = (person: PersonInfo) => {
//     const [age, name, hasDrivingLicense] = person
//     console.log(`Your age is ${age}, name is ${name} and your hasDrivingLicense attribute is ${hasDrivingLicense? 'true': 'false'}`);

// }

// const personInfo1: PersonInfo = [22, "Punit", true]

// const personInfo2: PersonInfo = [21, "Monika", false]

// display(personInfo1)
// display(personInfo2)

// Question 1:

// type ProductName = readonly [string, number, number]

// const disprod = (info:ProductName):void =>{
//     const [prname, price, quantity] = info;
//     console.log(`Product name: ${prname}, Price ${price}, Quantity ${quantity}`)
// }

// const prod1:ProductName = ["Soap",25,9]
// const prod2: ProductName= ["Hairbrush",89,21]

// disprod(prod1)
// disprod(prod2)

// Question 2:
// type SubjectGrade = [string, number, string, number, string, number];

// const average = (student: SubjectGrade): void => {
//     const [subname1, grade1, subname2, grade2, subname3, grade3] = student;
//     console.log(`Subject name: ${subname1}, Grade: ${grade1}, 
//                 Subject name: ${subname2}, Grade: ${grade2}, 
//                 Subject name: ${subname3}, Grade: ${grade3}`);
//     const vari = (grade1 + grade2 + grade3) / 3;
//     console.log("The average is:", vari.toFixed(2));
// };

// const sub1: SubjectGrade = ["Math", 30, "EVS", 40, "SSC", 70];

// average(sub1);

// Qusestion 3 :

type WeatherData = readonly [string, number, string];
let cities: any[] = [];

let city1: WeatherData = ['Surat', 30, 'overcast'];
let city2: WeatherData = ['Ahmedabad', 34, 'sunny'];
let city3: WeatherData = ['Rajkot', 27, 'rainy'];

cities.push(city1, city2, city3);

const displayWeather = (cities: any[]) => {
  let cityInfo: object[] = [];
  cities.forEach((city) => {
    let [name, celsius, condition] = city;
    cityInfo.push({ City: name, Temperature: celsius, Condition: condition });
  });
  console.table(cityInfo);
};
displayWeather(cities)
