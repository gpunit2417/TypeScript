// In TS, an interface is a powerful feature that allows you to define a contract for an object's shape. It specifies the properties and their types that an object must have to be considered of that particular type. Interfaces are generally used for type-checking during development and do not generate any JS code at runtime.
var productOne = {
    name: "Dell",
    model: 123,
    price: 10000,
    quantity: 5
};
var productTwo = {
    name: "HP",
    model: 1233,
    price: 12000,
    quantity: 10
};
var calculatePrice = function (product) {
    var price = product.price, quantity = product.quantity;
    return price * quantity;
};
var TotalPrice = calculatePrice(productOne);
var TotalPriceTwo = calculatePrice(productTwo);
console.log(TotalPrice);
console.log(TotalPriceTwo);
