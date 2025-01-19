//union in TS is implemented using pipe(|) operation. It is used to combine different values
// const inputValue = (userValue: string | number | boolean) => {
//     console.log(userValue);
// }
// inputValue("Punit")
// inputValue(2417)
// inputValue(true)
// Practice Question
// const inputValue = (userValue: string | number | boolean) => {
//     if(typeof userValue === "string"){
//         console.log(userValue.toUpperCase());        
//     }
//     else if(typeof userValue === "number"){
//         console.log(userValue*2);
//     }
//     else if(typeof userValue === "boolean"){
//         console.log(userValue);
//     }
// }
// inputValue("Punit")
// inputValue(2417)
// inputValue(true)
var inputValue = function (userValue) {
    if (typeof userValue === "string") {
        console.log(userValue[0].toUpperCase() + userValue.slice(1));
    }
    else if (typeof userValue === "number") {
        console.log("$" + userValue.toFixed(2));
    }
    else if (typeof userValue === "boolean") {
        console.log(userValue === true ? "Yes" : "No");
    }
};
inputValue("punit");
inputValue(2417);
inputValue(true);
