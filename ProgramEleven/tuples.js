//In TS, tuples are the data structure that allows you to store a fixed-size collection of data of different types. They are similar to arrays, but with a key difference: the type of elements in a tuple are fixed and declared at the time of creation and arrays can hold elements of same type, and their sizes can vary.
var cities = [];
var city1 = ['Surat', 30, 'overcast'];
var city2 = ['Ahmedabad', 34, 'sunny'];
var city3 = ['Rajkot', 27, 'rainy'];
cities.push(city1, city2, city3);
var displayWeather = function (cities) {
    var cityInfo = [];
    cities.forEach(function (city) {
        var name = city[0], celsius = city[1], condition = city[2];
        cityInfo.push({ City: name, Temperature: celsius, Condition: condition });
    });
    console.table(cityInfo);
};
displayWeather(cities);
